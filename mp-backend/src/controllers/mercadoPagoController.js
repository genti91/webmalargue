import { Preference, MercadoPagoConfig } from 'mercadopago';

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
                pending: `${process.env.REACT_APP_URL}/pendiente`,
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
        console.error('Error creating preference:', error);
        res.status(500).json({ error: error.message });
    }
};

