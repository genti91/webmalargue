import { send } from "emailjs-com";

const { REACT_APP_API_HOST_TARIF_LEAD_PROSP_BILLE, REACT_APP_API_TOKEN_TARIF_LEAD_PROSP_BILLE, REACT_APP_MP_API_HOST } = process.env;

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

    let formaPago = 2;
    if (destinatario.factura_a_nombre_de.value === "Remitente") {
        formaPago = 1;
    }
    let idFiscal = destinatario.numero_documento;
    if (destinatario.tipo_documento.value === "DNI") {
        idFiscal = `DNI ${idFiscal}`;
    } else {
        idFiscal = formatearDocumento(destinatario.numero_documento);
    }
    let tipoFiscal = 5;
    if (destinatario.tipo_de_contribuyente.value === "Responsable Inscripto") {
        tipoFiscal = 1;
    } else if (destinatario.tipo_de_contribuyente.value === "Monotributista") {
        tipoFiscal = 6;
    }

    let billetera = await getBilletera();
    let sendCobranza = true;
    let minuta = billetera?.data[0]?.minuta || 0;
    if (billetera?.data?.length === 0 || !billetera?.data[0]?.minuta) {
        sendCobranza = false;
    }
    if (String(billetera?.data[0]?.minuta)?.length < 10) {
        sendCobranza = false;
    }
    const minutaEstado = billetera?.data[0]?.minutaEstado;
    if (!minutaEstado || minutaEstado.toLowerCase() !== "abierta") {
        sendCobranza = false;
    }
    let precioFinal = parseFloat(cotizacion.precioFinal.replace(/\./g, '').replace(',', '.'));

    const payload = {
        paymentId,
        clienteCuenta: 66666,
        clienteSubCuenta: 1,
        origenSucursal: cotizacion.sucursalCanalizadora,
        formaPago,
        tipoFiscal,
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
        observacion: destinatario.observaciones ? `${destinatario?.observaciones} - N° Cotización: ${cotizacion.id}` : `- N° Cotización: ${cotizacion.id}`,
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
    };

    if (sendCobranza) {
        payload.cobranza = {
            tipo: "RE",
            minuta,
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
        };
    }

    const options = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    };
    return {...await fetchWithRetry(url, options), minuta};
};


const getBilletera = async () => {
    return await window
        .fetch(
            `${REACT_APP_API_HOST_TARIF_LEAD_PROSP_BILLE}/?token=${REACT_APP_API_TOKEN_TARIF_LEAD_PROSP_BILLE}&o=billetera`,
            {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify({
                    idbilletera: 3,
                    filtros : {
                        uuid: "1234"
                    }
                }),
            }
        )
        .then((response) => response.json())
        .catch((error) => {
            throw error
        })
}

export function formatearDocumento(numero_documento) {
  let str = String(numero_documento);
  let parte1 = str.slice(0, 2);
  let parte2 = str.slice(2, 10);
  let parte3 = str.slice(10);
  return `${parte1}-${parte2}-${parte3}`;
}