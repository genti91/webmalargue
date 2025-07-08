const { REACT_APP_API_KEY_CRM, REACT_APP_API_HOST } = process.env

export const getProspecto = async (id, email) => {
    return await window
        .fetch(
            `${REACT_APP_API_HOST}/?token=${REACT_APP_API_KEY_CRM}&o=prospecto`,
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
