const { REACT_APP_API_TOKEN, REACT_APP_API_HOST } = process.env

export const getOportunidad = async (id) => {
    return await window
        .fetch(
            `${REACT_APP_API_HOST}/?token=${REACT_APP_API_TOKEN}&o=lead`,
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
