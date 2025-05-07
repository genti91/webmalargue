const { REACT_APP_API_KEY_COTIZA, REACT_APP_API_HOST } = process.env

export const getOportunidad = async (id) => {
    return await window
        .fetch(
            `${REACT_APP_API_HOST}/?token=${REACT_APP_API_KEY_COTIZA}&o=lead`,
            {
                method: 'GET',
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
