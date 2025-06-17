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

const GeneraConfirmacionExito = () => {
    const { setLoading } = useLoading();
    const [searchParams] = useSearchParams()
    const paymentId = searchParams.get('payment_id');
    const cotizacion = JSON.parse(localStorage.getItem('cotizacion')) || {};
    const { remitente, destinatario } = JSON.parse(localStorage.getItem('cotizacion_forms')) || {};
    const [numRetiro, setNumRetiro] = useState();
    const [codigoSeguimiento, setCodigoSeguimiento] = useState();
    const [errorRetiro, setErrorRetiro] = useState(paymentId ? false : true);
    const [errorEmailBody, setErrorEmailBody] = useState({});

    const cargarRetiro = async () => {
        try {
            setLoading(true);
            const res = await postNuevoRetiro(cotizacion, paymentId, remitente, destinatario);
            setNumRetiro(res.numRetiro);
            localStorage.setItem('num_retiro', res.numRetiro);
            setCodigoSeguimiento(res.codigoSeguimiento);
            localStorage.setItem('codigo_seguimiento', res.codigoSeguimiento);
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
