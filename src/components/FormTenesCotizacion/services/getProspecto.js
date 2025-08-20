const { REACT_APP_API_TOKEN_TARIF_LEAD_PROSP_BILLE, REACT_APP_API_HOST_TARIF_LEAD_PROSP_BILLE } = process.env

export const getProspecto = async (id, email) => {
    return await window
        .fetch(
            `${REACT_APP_API_HOST_TARIF_LEAD_PROSP_BILLE}/?token=${REACT_APP_API_TOKEN_TARIF_LEAD_PROSP_BILLE}&o=prospecto`,
            {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify({
                    id,
                    email,
                }),
            }
        )
        .then((response) => response.json())
        .catch((error) => {
            throw error
        })
}
