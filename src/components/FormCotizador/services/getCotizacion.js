const { REACT_APP_API_HOST, REACT_APP_API_KEY_COTIZA, REACT_APP_API_KEY_PROSP_LEAD } = process.env

export const getCotizacion = async (props) => {
  var cotizacion = await window
    .fetch(
      `${REACT_APP_API_HOST}/public/?token=${REACT_APP_API_KEY_COTIZA}&o=cotizacion`,
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
        // /CRM/PUT generar prospecto
    .fetch(
      `${REACT_APP_API_HOST}/?token=${REACT_APP_API_KEY_PROSP_LEAD}&o=putProspecto`,
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
    console.log('prospecto', prospecto)
  const lead = await window
        // /CRM/PUT generar oprotunidad
    .fetch(
      `${REACT_APP_API_HOST}/?token=${REACT_APP_API_KEY_PROSP_LEAD}&o=putLead`,
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
    console.log('lead', lead)

  return {...cotizacion, ...lead}
}
