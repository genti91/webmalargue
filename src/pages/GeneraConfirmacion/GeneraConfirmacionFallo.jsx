import { cotizaIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import GeneraHeader from '../../components/GeneraHeader'
import '../GeneraEnvio/Genera.scss'
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom'
import emailjs from 'emailjs-com'
import { useEffect } from 'react';

const GeneraConfirmacionFallo = () => {
    const [searchParams] = useSearchParams()
    const paramsObj = Object.fromEntries(searchParams.entries());
    const { cotizacion, remitente } = JSON.parse(localStorage.getItem('datosEnvio')) || {};
    const emailBody = {
        email: remitente.email,
        id_cotizacion: cotizacion.id,
        descripcion: JSON.stringify(paramsObj)
    }
    const sendEmail = () => {
        emailjs
            .send('service_lv636bu', 'template_ton699n', emailBody, 'fRtOuVBrm3PpHzBca')
    }
    useEffect(() => {
        window.scrollTo({ top: 350, behavior: 'smooth' });
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
                    <div className='tw-text-center tw-flex tw-flex-col tw-gap-2 tw-text-[#198754] tw-items-center tw-justify-center'>
                        <img src={`/assets/icon-error.png`} alt="icon" className="tw-h-[48px] tw-w-[48px]" />
                        <h2 className='tw-text-[#EB1C23] tw-text-[28px] tw-font-bold'>Tuvimos un problema para procesar el pago</h2>
                        <h3 className='tw-text-[#EB1C23] tw-text-[21px] tw-w-8/12'>Contactanos para solucionarlo</h3>
                        <a
                            href='https://wa.me/5491163622778'
                            target='_blank'
                            rel='noreferrer'
                            className='tw-w-full md:tw-w-[158px]'
                        >
                            <Button
                                className='md:tw-w-[158px] tw-w-full tw-mt-12 tw-mb-3 tw-h-12 p-0 tw-bg-[#6C757D]'
                                onClick={sendEmail}
                            >
                                Contactanos
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GeneraConfirmacionFallo;
