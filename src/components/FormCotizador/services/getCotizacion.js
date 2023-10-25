const { REACT_APP_API_KEY_COTIZA, REACT_APP_API_KEY_PROSP_LEAD } = process.env

export const getCotizacion = async (props) => {
  var cotizacion = await window
    .fetch(
      `https://www.softwarecristal.com/web/api/public/?token=${REACT_APP_API_KEY_COTIZA}&o=cotizacion`,
      {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify({
          cpOrigen: props.originCP,
          cpDestino: props.destinyCP,
          kilosReales: props.kilosReales,
          metrosCubicos: props.metrosCubicos,
          bultos: props.bultos,
          valorDeclarado: props.valorDeclarado,
        }),
      }
    )
    .then((response) => response.json())
    .catch((error) => {
      throw error
    })
  cotizacion = {...cotizacion, valorizo: cotizacion.valorizo + cotizacion.seguro}
  const prospecto = await window
    .fetch(
      `https://www.softwarecristal.com/web/apitest/?token=${REACT_APP_API_KEY_PROSP_LEAD}&o=putProspecto`,
      {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify({
          razonSocial   : "Cotización con vendedor Cotizador WEB",
          localidad: props.origin,
          codigoPostal: props.originCP,
          email: props.email,
          provincia: props.provOrigin,
        }),
      }
    )
    .then((response) => response.json())
    .catch((error) => {
      throw error
    })
  const lead = await window
    .fetch(
      `https://www.softwarecristal.com/web/apitest/?token=${REACT_APP_API_KEY_PROSP_LEAD}&o=putLead`,
      {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify({
          idProspecto: prospecto?.idProspecto,
          descripcion: "Cotización con vendedor Cotizador WEB",
          idVendedor: 123,
          importeCotizado: cotizacion?.valorizo,
          importeOriginal: cotizacion?.valorizo,
          markUp: 0,
          origen: 1,
          observaciones: JSON.stringify({
            cpOrigen: props.originCP,
            cpDestino: props.destinyCP,
            kilosReales: props.kilosReales,
            metrosCubicos: props.metrosCubicos,
            bultos: props.bultos,
            valorDeclarado: props.valorDeclarado,
          })
        }),
      }
    )
    .then((response) => response.json())
    .catch((error) => {
      throw error
    })

  return {...cotizacion, ...lead}
}
