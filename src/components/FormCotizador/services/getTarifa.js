const { REACT_APP_API_KEY_COTIZA } = process.env

export const getTarifa = async () => {
  const response = await window
    .fetch(
      `https://www.softwarecristal.com/web/api/public/?token=${REACT_APP_API_KEY_COTIZA}&o=verTarifa`,
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
