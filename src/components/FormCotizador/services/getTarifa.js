const { REACT_APP_API_KEY } = process.env

export const getTarifa = async () => {
  const response = await window
    .fetch(
      `https://www.softwarecristal.com/web/apitest/public/?token=${REACT_APP_API_KEY}&o=tarifa`,
      {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Authorization': 'd4fda7da-acfb-40b0-89ec-9e2b2898c2f2'
        }
      }
    )
    .catch((error) => {
      throw error
    })
  const data = await response.json()
  return data
}
