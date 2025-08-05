const { REACT_APP_API_HOST_COTI, REACT_APP_API_TOKEN_COTI } = process.env

export const getTickets = async (trackingId) => {
  const response = await window
    .fetch(
      `${REACT_APP_API_HOST_COTI}/?o=getTracking&token=${REACT_APP_API_TOKEN_COTI}`,
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
