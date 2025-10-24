import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import html2canvas from 'html2canvas'
import { cotizaIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import GeneraHeader from '../../components/GeneraHeader'
import '../GeneraEnvio/Genera.scss'
import { useLoading } from '../../context/LoadingContext'
import { Link, useSearchParams } from 'react-router-dom'
import { ErrorProcesarRetiro } from '../../components/Errores/ErrorProcesarRetiro'
import { Button } from 'react-bootstrap'
import { postNuevoRetiro } from './services/postNuevoRetiro'
import emailjs from 'emailjs-com'
import QRCode from 'qrcode'
import ShippingLabel from '../../components/ShippingLabel'

const GeneraConfirmacionExito = () => {
    const { setLoading } = useLoading();
    const [searchParams] = useSearchParams()
    const paymentId = searchParams.get('payment_id');
    const { cotizacion, remitente, destinatario } = JSON.parse(localStorage.getItem('datosEnvio')) || {};
    const [numRetiro, setNumRetiro] = useState();
    const [codigoSeguimiento, setCodigoSeguimiento] = useState();
    const [errorRetiro, setErrorRetiro] = useState(paymentId ? false : true);
    const [errorEmailBody, setErrorEmailBody] = useState({});

    const renderElementToPng = async (element) => {
        const container = document.createElement('div')
        container.style.position = 'absolute'
        container.style.left = '-9999px'
        document.body.appendChild(container)
        let root
        if (ReactDOM.createRoot) {
            root = ReactDOM.createRoot(container)
            root.render(element)
        } else {
            ReactDOM.render(element, container)
        }
        await new Promise(r => setTimeout(r, 300))
        const styleFix = document.createElement("style");
        styleFix.innerHTML = `
            img { display:inline-block !important; vertical-align:middle !important; }
            body { line-height: initial !important; }
        `;
        document.head.appendChild(styleFix);
        const canvas = await html2canvas(container, {
            backgroundColor: '#ffffff',
            scale: 2,
            useCORS: true,
        })

        const dataUrl = canvas.toDataURL('image/png')
        styleFix.remove()

        if (root?.unmount) root.unmount()
        else ReactDOM.unmountComponentAtNode(container)

        container.remove()
        return dataUrl
        }

    const cargarRetiro = async () => {
        try {
            let { idTrazabilidad, numeroRetiro, paymentIdOld } = JSON.parse(localStorage.getItem('envioExitoso')) || {};
            if (idTrazabilidad && numeroRetiro && paymentIdOld === paymentId) {
                setNumRetiro(numeroRetiro);
                setCodigoSeguimiento(idTrazabilidad);
                return;
            }
            setLoading(true);
            const res = await postNuevoRetiro(cotizacion, paymentId, remitente, destinatario);
            if (!res || !res.numeroRetiro || !res.idTrazabilidad) {
                throw new Error(`Respuesta inválida del servidor: ${res?.msg}`);
            }

            const qrIdForName = res.idTrazabilidad.replace(/-/g, '')
            const qrBase = await QRCode.toDataURL(qrIdForName, {
                width: 150,
                margin: 1,
            });

            const emailParams = emailBody(cotizacion, remitente, destinatario, res.idTrazabilidad, paymentId, res.numeroRetiro)

            for (let i = 0; i < (cotizacion.arrayBultos || []).length; i++) {
                const bulto = cotizacion.arrayBultos[i]
                const labelData = {
                    fecha: new Date().toLocaleDateString('es-AR'),
                    codigoSeguimiento: res.idTrazabilidad,
                    sucursalDestino: cotizacion.sucursalDestinoNombre,
                    bultos: bulto.cantidadBultos,
                    kg: bulto.peso,
                    m3: ((bulto.alto / 100) * (bulto.ancho / 100) * (bulto.largo / 100) * bulto.cantidadBultos).toFixed(3),
                    remitente: remitente.nombre,
                    destinatario: destinatario.nombre,
                    localidadDestino: cotizacion.sucursalCanalizadoraNombre,
                    recibidorQUN: `${formatearNumeroRetiro(res.numeroRetiro)}`,
                    pagina: i + 1,
                    totalPaginas: cotizacion.arrayBultos.length
                }

                const element = <ShippingLabel data={labelData} qrCodeUrl={qrBase} />
                const pngDataUrl = await renderElementToPng(element)

                const keyName = `qrIdTrazabilidad_${i + 1}`
                emailParams[keyName] = pngDataUrl
            }

            await emailjs.send('service_lv636bu', 'template_vim8d28', emailParams, 'fRtOuVBrm3PpHzBca')

            setNumRetiro(res.numeroRetiro);
            setCodigoSeguimiento(res.idTrazabilidad);
            localStorage.setItem('envioExitoso', JSON.stringify({
                numeroRetiro: res.numeroRetiro,
                idTrazabilidad: res.idTrazabilidad,
                paymentIdOld: paymentId
            }));
        } catch (err) {
            console.error('Error al cargar el retiro:', err);
            let remi = addPrefixToKeys({...remitente, tipo_documento: remitente.tipo_documento.value}, 'remi_')
            let desti = addPrefixToKeys({...destinatario, 
                tipo_documento: destinatario.tipo_documento.value,
                factura_a_nombre_de: destinatario.factura_a_nombre_de.value,
                notificacion: destinatario.notificacion.value
            }, 'dest_')
            setErrorEmailBody({
                email: remitente?.email,
                id_cotizacion: cotizacion?.id,
                id_operacion_mp: paymentId,
                ...desti,
                ...remi,
                destinatario:  JSON.stringify(destinatario),
                error: JSON.stringify(err.response ? err.response.data : err.message)
            });
            setErrorRetiro(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 350, behavior: 'smooth' });
        cargarRetiro();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section id='genera'>
            <BannerHeader
                lineaPrincipal='Generá tu Retiro'
                lineaSecundaria=''
                image={cotizaIMG}
            />
            <div id='main' className='container tw-py-12'>
                <div className='row tw-gap-14 tw-pt-4'>
                    <GeneraHeader selectedIndex={4} />
                    { errorRetiro ? 
                        <ErrorProcesarRetiro emailBody={errorEmailBody}/>
                    :
                    <>
                        <div className='tw-text-center tw-flex tw-flex-col tw-gap-2 tw-text-[#198754] tw-items-center tw-justify-center'>
                            <img src={`/assets/icono-exito.png`} alt="Ícono de éxito" className="tw-h-[48px] tw-w-[48px]" />
                            <h2 className='tw-text-[#198754] tw-text-[28px] tw-font-bold'>¡Gracias por elegirnos!</h2>
                            <h3 className='tw-text-[#198754] tw-text-[21px] tw-w-8/12'>Tu retiro se generó con éxito.</h3>
                            <h3 className='tw-text-[#198754] tw-text-[21px] tw-w-8/12'>Te enviamos un email con los detalles a la dirección que nos indicaste.</h3>
                            <h3 className='tw-text-[#198754] tw-text-[21px] tw-w-8/12 tw-font-bold'>No olvides revisar tu bandeja de entrada y spam.</h3>
                        </div>
                        <div className='tw-text-[20px] tw-w-full tw-border-t tw-border-[#CAC4D0] tw-pt-9'>
                            <div>
                                Número de Retiro: <span className='tw-text-[#2F3394] tw-font-bold'>{formatearNumeroRetiro(numRetiro)}</span>
                            </div>
                            <div>
                                Código de Seguimiento: <span className='tw-text-[#2F3394] tw-font-bold'>{codigoSeguimiento}</span>
                            </div>
                        </div>
                        <div className='tw-flex tw-flex-col sm:tw-flex-row md:tw-gap-12 tw-gap-3 lg:tw-justify-end tw-justify-center'>
                            <Link to={'/tracking?trackingID=' + codigoSeguimiento}>
                                <Button
                                    className='sm:tw-w-[158px] tw-w-full tw-h-12 p-0'
                                >
                                    Seguí tu envío
                                </Button>
                            </Link>
                            <Link to='/genera'>
                                <Button
                                    className='sm:tw-w-[211px] tw-w-full tw-h-12 p-0 tw-bg-[#198754]'
                                    style={{
                                        backgroundColor: '#198754',
                                        border: '1px solid #198754',
                                    }}
                                >
                                    Solicitar nuevo retiro
                                </Button>
                            </Link>
                        </div>
                    </>
                    }
                </div>
            </div>
        </section>
    )
}

export default GeneraConfirmacionExito;


const emailBody = (cotizacion, remitente, destinatario, idTrazabilidad, paymentId, numeroRetiro) => {
    let emailNoti = remitente.email
    if (destinatario.notificacion.value !== "Remitente") {
        emailNoti = remitente.email + `, ${destinatario.email}`;
    }
    return {
        email: emailNoti,
        nombreQr: idTrazabilidad.replace(/-/g, ''),
        numero_retiro: formatearNumeroRetiro(numeroRetiro),
        cotizacion_id : cotizacion.id,
        codigo_seguimiento: idTrazabilidad,
        nombre_remi: remitente.nombre,
        email_remi: remitente.email,
        cod_area_remi: remitente.codigo_de_area,
        tel_remi: remitente.telefono,
        direccion_remi: formatearDireccion(remitente, cotizacion.localidadOrigen, cotizacion.provinciaOrigen, cotizacion.cpOrigen),
        nombre_dest: destinatario.nombre,
        email_dest: destinatario.email,
        tipo_doc_dest: destinatario.tipo_documento.value,
        doc_dest: destinatario.numero_documento,
        cod_area_dest: destinatario.codigo_de_area,
        tel_dest: destinatario.telefono,
        direccion_dest: formatearDireccion(destinatario, cotizacion.localidadDestino, cotizacion.provinciaDestino, cotizacion.cpDestino),
        valor_declarado: cotizacion.valorDeclarado,
        descripcion_bultos: cotizacion.descripcionBultos,
        observaciones: destinatario.observaciones ? destinatario.observaciones : '-',
        id_operacion_mp: paymentId,
        factura_a_nombre: destinatario.factura_a_nombre_de.value,
        precio_base: cotizacion.precioSinIVA,
        seguro: cotizacion.precioSeguro,
        iva: cotizacion.IVA,
        precio_final: cotizacion.precioFinal,
        tabla_bultos: cotizacion.arrayBultos.map((bulto, i) => {
            const bg = i % 2 === 1 ? 'background:#f5f5f5;' : '';
            return `
                <tr style="${bg}">
                    <td style="padding:8px 6px;border:1px solid #cccccc;">${bulto.cantidadBultos}&nbsp;</td>
                    <td style="padding:8px 6px;border:1px solid #cccccc;">${bulto.peso}&nbsp;</td>
                    <td style="padding:8px 6px;border:1px solid #cccccc;">${bulto.ancho}&nbsp;</td>
                    <td style="padding:8px 6px;border:1px solid #cccccc;">${bulto.alto}&nbsp;</td>
                    <td style="padding:8px 6px;border:1px solid #cccccc;">${bulto.largo}&nbsp;</td>
                </tr>
            `;
            }).join('')
    }
}

const formatearDireccion = (datos, localidad, provincia, cp) => {
    return [
        datos.calle + ' ' + datos.numero,
        datos.piso ? `Piso ${datos.piso}` : null,
        datos.dpto ? `Departamento ${datos.dpto}` : null,
        localidad?.replace(/^\(\d+\)\s*/, '') || localidad,
        provincia,
        cp ? `CP ${cp}` : null
    ].filter(Boolean).join(', ');
}

const formatearNumeroRetiro = (numeroRetiro) => {
    if (!numeroRetiro) return numeroRetiro;
    const numeroStr = String(numeroRetiro);
    if (numeroStr.length < 4) return numeroStr;
    const numeroCompleto = numeroStr.padStart(12, '0');
    const primeraParte = numeroCompleto.substring(0, 4);
    const segundaParte = numeroCompleto.substring(4);
    return `${primeraParte}-${segundaParte}`;
};

const addPrefixToKeys = (obj, prefix) => {
    return Object.keys(obj).reduce((newObj, key) => {
        newObj[`${prefix}${key}`] = obj[key];
        return newObj;
    }, {});
};