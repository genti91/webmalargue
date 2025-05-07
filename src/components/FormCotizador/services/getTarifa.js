const { REACT_APP_API_KEY_COTIZA, REACT_APP_API_HOST } = process.env

export const getTarifa = async () => {
  const response = await window
    .fetch(
      `${REACT_APP_API_HOST}/public/?token=${REACT_APP_API_KEY_COTIZA}&o=verTarifa`,
      {
        method: 'GET',
        credentials: 'same-origin',
      }
    )
    .catch((error) => {
      throw error
    })
  const data = await response.json()
  return data
}
