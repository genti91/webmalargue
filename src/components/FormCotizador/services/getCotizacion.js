import { calculatePriceDetail } from '../../CotizacionYRetiro/calculatePriceDetail'

const { REACT_APP_API_HOST_COTI, REACT_APP_API_TOKEN_COTI, REACT_APP_MP_API_HOST } =
  process.env

export const postCotizacion = async (props) => {
  return await window
    .fetch(`${REACT_APP_API_HOST_COTI}/?token=${REACT_APP_API_TOKEN_COTI}&o=cotizacion`, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({
        tarifa: props.tarifa,
        cpOrigen: props.cpOrigen,
        cpDestino: props.cpDestino,
        kilosReales: props.kilosReales,
        metrosCubicos: props.metrosCubicos,
        bultos: props.arrayBultos,
        valorDeclarado: props.valorDeclarado,
      }),
    })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error al obtener la cotización:', error)
      throw new Error(error)
    })
}

export const putProspecto = async (props) => {
  return await window
    // /CRM/PUT generar prospecto
    .fetch(`${REACT_APP_MP_API_HOST}/api/codilsa/prospecto`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        razonSocial: 'Cotización con vendedor Cotizador WEB',
        localidad: props.localidadOrigen,
        codigoPostal: props.cpOrigen,
        email: props.emailNotificacion,
        provincia: props.provinciaOrigen,
      }),
    })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error al obtener el prospecto:', error)
      throw error
    })
}

export const putLead = async (props, prospecto, cotizacion) => {
    let precio = calculatePriceDetail(cotizacion?.valorizo, cotizacion?.seguro)
    let seguroValue = cotizacion?.seguro.toLocaleString('es-AR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    })
    let observaciones = {
        emailNotificacion: props.emailNotificacion,
        fechaEmision: new Date().toISOString(),
        localidadOrigen: props.localidadOrigen,
        cpOrigen: props.cpOrigen,
        idCpOrigen: props.idCpOrigen,
        provinciaOrigen: props.provinciaOrigen,
        localidadDestino: props.localidadDestino,
        cpDestino: props.cpDestino,
        idCpDestino: props.idCpDestino,
        provinciaDestino: props.provinciaDestino,
        sucursalCanalizadora: props.sucursalCanalizadora,
        sucursalCanalizadoraNombre: props.sucursalCanalizadoraNombre,
        sucursalCanalizadoraDomicilio: props.sucursalCanalizadoraDomicilio,
        sucursalDestino: props.sucursalDestino,
        sucursalDestinoNombre: props.sucursalDestinoNombre,
        sucursalDestinoDomicilio: props.sucursalDestinoDomicilio,
        arrayBultos: props.arrayBultos,
        tarifa: props.tarifa,
        kilosReales: props.kilosReales,
        metrosCubicos: cotizacion?.aforo?.mt3,
        bultosTotal: props.bultosTotal,
        valorDeclarado: props.valorDeclarado,
        descripcionBultos: props.descripcionBultos,
        precioSinIVA: precio.noTaxPrice,
        precioSeguro: seguroValue,
        IVA: precio.ivaValue,
        precioFinal: precio.finalValue,
        kilosAforados: cotizacion?.aforo?.kilosAforados,
    }
    return await window
        // /CRM/PUT generar oprotunidad
        .fetch(
            `${REACT_APP_MP_API_HOST}/api/codilsa/lead`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idProspecto: prospecto?.idProspecto,
                    descripcion: "Cotización con vendedor Cotizador WEB",
                    idVendedor: 123,
                    importeCotizado: cotizacion?.valorizo,
                    importeOriginal: cotizacion?.valorizo,
                    markUp: 0,
                    origen: 1,
                    observaciones: JSON.stringify(observaciones),
                }),
            }
        )
        .then(async (response) => {
          return { res: await response.json(), observaciones }
        })
        .catch((error) => {
            console.error('Error al obtener el lead:', error)
            throw error
        })
}

export const getCotizacion = async (props) => {
  if (!props?.sucursalCanalizadora || !props?.sucursalDestino) {
    throw new Error('Faltan datos de sucursales para cotizar')
  }
  var cotizacion = await postCotizacion(props)
  const prospecto = await putProspecto(props)
  const lead = await putLead(props, prospecto, cotizacion)
  return { cotizacion, lead: lead.res }
}
