import express from 'express';

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