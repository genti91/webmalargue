import { cotizaIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import GeneraHeader from '../../components/GeneraHeader'
import '../GeneraEnvio/Genera.scss'
import { Button } from 'react-bootstrap';

const GeneraConfirmacionFallo = () => {
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
                        >
                            <Button
                                className='tw-w-[158px] tw-mt-12 tw-mb-3 tw-h-12 p-0 tw-bg-[#6C757D]'
                                // onClick={}
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
