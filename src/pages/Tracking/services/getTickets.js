const { REACT_APP_API_HOST, REACT_APP_API_KEY_COTIZA } = process.env

export const getTickets = async (trackingId) => {
  const response = await window
    .fetch(
      `${REACT_APP_API_HOST}/?o=getTracking&token=${REACT_APP_API_KEY_COTIZA}`,
      {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(trackingId),
      }
    )
    .catch((error) => {
      throw error
    })
  const { data } = await response.json()
  return data
}
