export const getTickets = async (trackingId) => {
  const response = await window
    .fetch(
      'https://www.softwarecristal.com/web/api/public/?o=getTracking&token=052bf68381ca31a797f2c0dbe8fdd67b6bd7a3e81215bb0adbb3e9ddcb28c94f',
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
