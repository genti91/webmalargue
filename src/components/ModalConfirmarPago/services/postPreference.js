const { REACT_APP_MP_API_HOST } = process.env

export const postPreference = async (precio) => {
    return await window
        .fetch(
            `${REACT_APP_MP_API_HOST}/api/mercadopago/create-preference`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    descripcion: 'Solicitud de retiro online',
                    precio,
                }),
            }
        )
        .then((response) => response.json())
        .catch((error) => {
            throw error
        })
}
