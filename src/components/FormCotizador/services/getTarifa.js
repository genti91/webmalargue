const { REACT_APP_API_TOKEN_TARIF_LEAD_PROSP, REACT_APP_API_HOST_TARIF_LEAD_PROSP } = process.env

export const getTarifa = async () => {
  const response = await window
    .fetch(
      `${REACT_APP_API_HOST_TARIF_LEAD_PROSP}/?token=${REACT_APP_API_TOKEN_TARIF_LEAD_PROSP}&o=verTarifa`,
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
