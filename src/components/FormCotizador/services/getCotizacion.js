const { REACT_APP_API_KEY } = process.env

export const getCotizacion = async (parametros) => {
  const response = await window
    .fetch(
      `https://www.softwarecristal.com/web/apitest/public/?token=${REACT_APP_API_KEY}&o=cotizacion`,
      {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(parametros),
      }
    )
    .catch((error) => {
      throw error
    })
  const data = await response.json()
  return data
}
