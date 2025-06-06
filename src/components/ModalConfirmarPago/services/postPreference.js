const { REACT_APP_MP_API_HOST } = process.env

export const postPreference = async (precio, id_coti) => {
    return await window
        .fetch(
            `${REACT_APP_MP_API_HOST}/api/mercadopago/create-preference`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    descripcion: `Solicitud de retiro online de la cotización ${id_coti}`,
                    precio,
                }),
            }
        )
        .then((response) => response.json())
        .catch((error) => {
            throw error
        })
}
