const { REACT_APP_API_TOKEN_TARIF_LEAD_PROSP, REACT_APP_API_HOST_TARIF_LEAD_PROSP } = process.env

export const getOportunidad = async (id) => {
    return await window
        .fetch(
            `${REACT_APP_API_HOST_TARIF_LEAD_PROSP}/?token=${REACT_APP_API_TOKEN_TARIF_LEAD_PROSP}&o=lead`,
            {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify({
                    id,
                }),
            }
        )
        .then((response) => response.json())
        .catch((error) => {
            throw error
        })
}
