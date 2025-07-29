import { useEffect, useState } from 'react'
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

const GeneraConfirmacionExito = () => {
    const { setLoading } = useLoading();
    const [searchParams] = useSearchParams()
    const paymentId = searchParams.get('payment_id');
    const { cotizacion, remitente, destinatario } = JSON.parse(localStorage.getItem('datosEnvio')) || {};
    const [numRetiro, setNumRetiro] = useState();
    const [codigoSeguimiento, setCodigoSeguimiento] = useState();
    const [errorRetiro, setErrorRetiro] = useState(paymentId ? false : true);
    const [errorEmailBody, setErrorEmailBody] = useState({});

    const cargarRetiro = async () => {
        try {
            setLoading(true);
            console.log('Cargando retiro con paymentId:', paymentId);
            console.log('Datos de cotización:', cotizacion);
            console.log('Datos de remitente:', remitente);
            console.log('Datos de destinatario:', destinatario);
            const res = await postNuevoRetiro(cotizacion, paymentId, remitente, destinatario);
            if (!res || !res.numeroRetiro || !res.idTrazabilidad) {
                throw new Error(`Respuesta inválida del servidor: ${res.msg}`);
            }
            localStorage.removeItem('cotizacion');
            localStorage.removeItem('cotizacion_forms');
            emailjs.send('service_lv636bu', 'template_vim8d28', emailBody(cotizacion, remitente, destinatario, res.idTrazabilidad, paymentId), 'fRtOuVBrm3PpHzBca')
            localStorage.setItem('payment_id', paymentId);
            setNumRetiro(res.numeroRetiro);
            localStorage.setItem('num_retiro', res.numeroRetiro);
            setCodigoSeguimiento(res.idTrazabilidad);
            localStorage.setItem('codigo_seguimiento', res.idTrazabilidad);
        } catch (err) {
            console.error('Error al cargar el retiro:', err);
            setErrorEmailBody({
                email: remitente.email,
                id_cotizacion: cotizacion.id,
                id_operacion_mp: paymentId,
                remitente: JSON.stringify(remitente),
                destinatario:  JSON.stringify(destinatario),
                error: JSON.stringify(err.response ? err.response.data : err.message)
            });
            setErrorRetiro(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        localStorage.setItem('payment_id', paymentId);
        cargarRetiro();
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
                            <img src={`/assets/icono-exito.png`} alt="icon" className="tw-h-[48px] tw-w-[48px]" />
                            <h2 className='tw-text-[#198754] tw-text-[28px] tw-font-bold'>¡Gracias por elegirnos!</h2>
                            <h3 className='tw-text-[#198754] tw-text-[21px] tw-w-8/12'>Tu retiro se generó con éxito.</h3>
                            <h3 className='tw-text-[#198754] tw-text-[21px] tw-w-8/12'>Te enviamos un email con los detalles a la dirección que nos indicaste.</h3>
                            <h3 className='tw-text-[#198754] tw-text-[21px] tw-w-8/12 tw-font-bold'>No olvides revisar tu bandeja de entrada y spam.</h3>
                        </div>
                        <div className='tw-text-[20px] tw-w-full tw-border-t tw-border-[#CAC4D0] tw-pt-9'>
                            <div>
                                Número de Retiro: <span className='tw-text-[#2F3394] tw-font-bold'>{numRetiro}</span>
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


const emailBody = (cotizacion, remitente, destinatario, idTrazabilidad, paymentId) => {
    let emailNoti = remitente.email
    if (destinatario.notificacion.value != "Remitente") {
        emailNoti = remitente.email + `, ${destinatario.email}`;
    }
    return {
        email: emailNoti,
        cotizacion_id : cotizacion.id,
        codigo_seguimiento: idTrazabilidad,
        nombre_remi: remitente.nombre,
        email_remi: remitente.email,
        tipo_doc_remi: remitente.tipo_documento.value,
        doc_remi: remitente.numero_documento,
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
        observaciones: destinatario.observaciones,
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