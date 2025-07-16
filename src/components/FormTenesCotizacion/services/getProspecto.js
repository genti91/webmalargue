const { REACT_APP_API_TOKEN, REACT_APP_API_HOST } = process.env

export const getProspecto = async (id, email) => {
    return await window
        .fetch(
            `${REACT_APP_API_HOST}/?token=${REACT_APP_API_TOKEN}&o=prospecto`,
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
