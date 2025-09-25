import { Preference, Payment, MercadoPagoConfig } from 'mercadopago';
import { CACHE_EXPIRATION_MINUTES, isPaymentIdUsed, markPaymentIdAsUsed } from '../utils/paymentCache.js';

export const createPreference = async (req, res) => {
    const mpClient = new MercadoPagoConfig({
        accessToken: process.env.MP_ACCESS_TOKEN,
    });
    const { descripcion, precio } = req.body;

    const preference = {
        body: {
            items: [
                {
                    title: descripcion,
                    unit_price: Number(precio.replace(/\./g, '').replace(',', '.')),
                    quantity: 1,
                },
            ],
            back_urls: {
                success: `${process.env.REACT_APP_URL}/exito`,
                failure: `${process.env.REACT_APP_URL}/fallo`,
                pending: `${process.env.REACT_APP_URL}/fallo`,
            },
            auto_return: 'all',
            payment_methods: {
                excluded_payment_types: [
                    {
                        id: "ticket"
                    }
                ]
            }
        },
    };

    try {
        const response = await new Preference(mpClient).create(preference);
        res.json(response);
    } catch (error) {
        console.error('Error creando preference:', error);
        res.status(500).json({ error: error.message });
    }
};

export const validatePayment = async (paymentId) => {
    try {
        if (isPaymentIdUsed(paymentId)) {
            return { 
                valid: false, 
                reason: 'El ID de pago ya ha sido utilizado'
            };
        }

        const mpClient = new MercadoPagoConfig({
            accessToken: process.env.MP_ACCESS_TOKEN,
        });
        
        const payment = await new Payment(mpClient).get({ id: paymentId });
        
        if (!payment || payment.status !== 'approved') {
            return { 
                valid: false, 
                reason: payment ? `Estado del pago: ${payment.status}` : 'Pago no encontrado'
            };
        }

        const paymentDate = new Date(payment.date_created);
        const currentDate = new Date();
        const timeDifferenceMs = currentDate.getTime() - paymentDate.getTime();
        const timeDifferenceMinutes = timeDifferenceMs / (1000 * 60);
        
        if (timeDifferenceMinutes > CACHE_EXPIRATION_MINUTES) {
            return { 
                valid: false, 
                reason: `El pago es demasiado antiguo. Creado hace ${timeDifferenceMinutes.toFixed(2)} minutos, el máximo permitido es ${CACHE_EXPIRATION_MINUTES} minutos`
            };
        }

        markPaymentIdAsUsed(paymentId, {
            amount: payment.transaction_amount,
            status: payment.status,
            paymentDate: payment.date_created
        });

        return { 
            valid: true, 
            payment: {
                id: payment.id,
                status: payment.status,
                amount: payment.transaction_amount,
                description: payment.description,
                date_created: payment.date_created,
                age_minutes: timeDifferenceMinutes.toFixed(2)
            }
        };
        
    } catch (error) {
        console.error('Error validando pago:', error);
        return { 
            valid: false, 
            reason: 'Error validando el pago',
            error: error.message 
        };
    }
};