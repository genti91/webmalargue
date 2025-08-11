const { API_TOKEN_TARIF_LEAD_PROSP, API_HOST_TARIF_LEAD_PROSP } = process.env

export const getProspecto = async (id, email) => {
    return await window
        .fetch(
            `${API_HOST_TARIF_LEAD_PROSP}/?token=${API_TOKEN_TARIF_LEAD_PROSP}&o=prospecto`,
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
