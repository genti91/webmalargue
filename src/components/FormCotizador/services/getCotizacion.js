const { REACT_APP_API_HOST, REACT_APP_API_TOKEN } = process.env

export const getCotizacion = async (props) => {
    var cotizacion = await window
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
            throw new Error(error)
        })
    cotizacion = { ...cotizacion, valorizo: cotizacion.valorizo }
    const prospecto = await window
        // /CRM/PUT generar prospecto
        .fetch(
            `${REACT_APP_API_HOST}/?token=${REACT_APP_API_TOKEN}&o=putProspecto`,
            {
                method: 'POST',
                credentials: 'same-origin',
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
            throw error
        })
    //TODO: enviar el tamaño de los bultos
    const lead = await window
        // /CRM/PUT generar oprotunidad
        .fetch(
            `${REACT_APP_API_HOST}/?token=${REACT_APP_API_TOKEN}&o=putLead`,
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
                        provOrigen: props.provOrigin,
                        provDestino: props.provDestiny,
                        locOrigen: props.origin,
                        locDestino: props.destiny,
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
    return { ...cotizacion, ...lead }
}
