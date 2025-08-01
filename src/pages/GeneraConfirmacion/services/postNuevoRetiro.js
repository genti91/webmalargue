const { REACT_APP_API_TOKEN, REACT_APP_API_HOST, REACT_APP_MP_API_HOST } = process.env;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const RETRIES = 4;
const DELAY = 1000;

const fetchWithRetry = async (url, options) => {
    for (let attempt = 0; attempt < RETRIES; attempt++) {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            if (attempt < RETRIES - 1) {
                console.warn(`Intento ${attempt + 1} fallido. Reintentando en ${DELAY}ms...`);
                await sleep(DELAY);
            } else {
                console.error(`Todos los intentos fallaron:`, error);
                throw error;
            }
        }
    }
};

export const postNuevoRetiro = async (cotizacion, paymentId, remitente, destinatario) => {
    const url = `${REACT_APP_MP_API_HOST}/api/codilsa/nuevoRetiro`;
    let idFiscal = destinatario.numero_documento;
    if (destinatario.factura_a_nombre_de.value === "Remitente") {
        idFiscal = remitente.numero_documento;
    }
    let billetera = await getBilletera();
    if (billetera.data.length === 0) {
        throw new Error(`No se encontró la minuta en la billetera: ${billetera?.msg}`);
    }
    let precioFinal = parseFloat(cotizacion.precioFinal.replace(/\./g, '').replace(',', '.'));
    const options = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            clienteCuenta: 66666,
            clienteSubCuenta: 1,
            origenSucursal: cotizacion.sucursalCanalizadora,
            formaPago: 1,
            tipoFiscal: 5,
            idFiscal,
            nombreRte: remitente.nombre,
            emailRte: remitente.email,
            telefonoRte: `${remitente.codigo_de_area} ${remitente.telefono}`,
            domicilioRte: `${remitente.calle} ${remitente.numero}`,
            domicilioExtraRte: `${remitente.piso || ''}${remitente.piso && remitente.dpto ? ' ' : ''}${remitente.dpto || ''}`,
            cpOrigen: cotizacion.idCpOrigen,
            destinatario: destinatario.nombre,
            emailDes: destinatario.email,
            telefonoDes: `${destinatario.codigo_de_area} ${destinatario.telefono}`,
            domicilioDes: `${destinatario.calle} ${destinatario.numero}`,
            domicilioExtraDes: `${destinatario.piso || ''}${destinatario.piso && destinatario.dpto ? ' ' : ''}${destinatario.dpto || ''}`,
            cpDestino: cotizacion.idCpDestino,
            observaciones: destinatario.observaciones,
            valor: cotizacion.valorDeclarado,
            cotizado: precioFinal,
            conTracking: true,
            remitos: cotizacion.arrayBultos.map((bulto, index) => ({
                numero: String(index + 1).padStart(11, '0'),
                letra: "",
                fecha: new Date().toLocaleDateString('en-CA'),
                carga: cotizacion.descripcionBultos,
                bultos: Number(bulto.cantidadBultos),
                kilos: Number(bulto.peso),
                largo: Number(bulto.largo) / 100,
                ancho: Number(bulto.ancho) / 100,
                alto: Number(bulto.alto) / 100,
            })),
            cobranza: {
                tipo: "RE",
                minuta: billetera.data[0].minuta,
                importeTotal: precioFinal,
                transferencias: [{
                    cuenta: 9,
                    modo: 4,
                    importe: precioFinal,
                    fecha: new Date().toLocaleDateString('en-CA'),
                    numero: paymentId,
                }],
                imputaciones: [{
                    importe: precioFinal,
                }]
            },
        }),
    };
    return await fetchWithRetry(url, options);
};


const getBilletera = async () => {
    return await window
        .fetch(
            `${REACT_APP_API_HOST}/?token=${REACT_APP_API_TOKEN}&o=billetera`,
            {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify({
                    idbilletera: 3,
                    filtros : {
                        uuid: "4268577ae6004fb7916b8040ca9fda0a29b5e1e51fd844f283b90449fd04a382"
                    }
                }),
            }
        )
        .then((response) => response.json())
        .catch((error) => {
            throw error
        })
}