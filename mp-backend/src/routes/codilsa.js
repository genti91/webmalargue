import express from 'express';
import { validatePayment } from '../controllers/mercadoPagoController.js';

const router = express.Router();

router.put('/prospecto', (req, res) => {
    putProspecto(req.body)
        .then((response) => {
            res.json(response);
        })
        .catch((error) => {
            res.status(500).json({ error: `Error al crear el prospecto: ${error.message}` });
        })
});

router.put('/lead', (req, res) => {
    putLead(req.body)
        .then((response) => {
            res.json(response);
        })
        .catch((error) => {
            res.status(500).json({ error: `Error al crear el lead: ${error.message}` });
        })
});

router.post('/nuevoRetiro', async (req, res) => {
    try {
        const paymentId = req.body?.cobranza?.transferencias?.[0]?.numero;
        
        if (!paymentId) {
            return res.status(400).json({ 
                error: 'Falta el ID de pago en la solicitud'
            });
        }
        const paymentValidation = await validatePayment(paymentId);
        if (!paymentValidation.valid) {
            return res.status(400).json({ 
                error: `Pago inválido: ${paymentValidation.reason}` 
            });
        }
        const expectedAmount = req.body?.cobranza?.importeTotal;
        if (expectedAmount && paymentValidation.payment) {
            const paymentAmount = paymentValidation.payment.amount;
            if (Math.abs(paymentAmount - expectedAmount) > 0.01) {
                return res.status(400).json({ 
                    error: 'El monto del pago no coincide con el monto esperado'
                });
            }
        }

        const response = await postNuevoRetiro(req.body);
        res.json(response); 
    } catch (error) {
        console.error(`[ERROR] Error en nuevoRetiro:`, error);
        res.status(500).json({ 
            error: `Error al crear el nuevo retiro: ${error.message}` 
        });
    }
});

export default router;

const putProspecto = async (props) => {
    return await fetch(
            `${process.env.API_HOST}/?token=${process.env.API_TOKEN}&o=prospecto`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(props),
            }
        )
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error al obtener el prospecto:', error)
            throw error
        })
}

const putLead = async (props) => {
    return await fetch(
            `${process.env.API_HOST}/?token=${process.env.API_TOKEN}&o=lead`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(props),
            }
        )
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error al obtener el lead:', error)
            throw error
        })
}

const postNuevoRetiro = async (props) => {
    return await fetch(
            `${process.env.API_HOST_RETIRO}/?token=${process.env.API_TOKEN_RETIRO}&o=nuevoRetiro`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(props),
            }
        )
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error al crear el nuevo retiro:', error)
            throw error
        })
}