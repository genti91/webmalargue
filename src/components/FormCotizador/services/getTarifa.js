const { REACT_APP_API_TOKEN_TARIF_LEAD_PROSP_BILLE, REACT_APP_API_HOST_TARIF_LEAD_PROSP_BILLE } = process.env

export const getTarifa = async () => {
  const response = await window
    .fetch(
      `${REACT_APP_API_HOST_TARIF_LEAD_PROSP_BILLE}/?token=${REACT_APP_API_TOKEN_TARIF_LEAD_PROSP_BILLE}&o=verTarifa`,
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
