const { REACT_APP_API_HOST, REACT_APP_API_TOKEN, REACT_APP_MP_API_HOST } = process.env

export const postCotizacion = async (props) => {
    return await window
        .fetch(
            `${REACT_APP_API_HOST}/?token=${REACT_APP_API_TOKEN}&o=cotizacion`,
            {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify({
                    tarifa: props.tarifa,
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
            console.error('Error al obtener la cotización:', error)
            throw new Error(error)
        })
}

export const putProspecto = async (props) => {
    return await window
        // /CRM/PUT generar prospecto
        .fetch(
            `${REACT_APP_MP_API_HOST}/api/codilsa/prospecto`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    razonSocial: "Cotización con vendedor Cotizador WEB",
                    localidad: props.origin,
                    codigoPostal: props.originCP,
                    email: props.email,
                    provincia: props.provOrigin,
                }),
            }
        )
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error al obtener el prospecto:', error)
            throw error
        })
}

export const putLead = async (props, prospecto, cotizacion) => {
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
                    observaciones: JSON.stringify({
                        provOrigen: props.provOrigin,
                        provDestino: props.provDestiny,
                        locOrigen: props.origin,
                        locDestino: props.destiny,
                        tarifa: props.tarifa,
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
            console.error('Error al obtener el lead:', error)
            throw error
        })
}

export const getCotizacion = async (props) => {
    var cotizacion = await postCotizacion(props)
    const prospecto = await putProspecto(props)
    //TODO: enviar el tamaño de los bultos
    const lead = await putLead(props, prospecto, cotizacion)
    return { ...cotizacion, ...lead }
}
