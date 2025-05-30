import { cotizaIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import GeneraHeader from '../../components/GeneraHeader'
import '../GeneraEnvio/Genera.scss'

const GeneraConfirmacionExito = () => {
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
                        <img src={`/assets/icono-exito.png`} alt="icon" className="tw-h-[48px] tw-w-[48px]" />
                        <h2 className='tw-text-[#198754] tw-text-[28px] tw-font-bold'>¡Gracias por elegirnos!</h2>
                        <h3 className='tw-text-[#198754] tw-text-[21px] tw-w-8/12'>Tu retiro se generó con éxito.</h3>
                        <h3 className='tw-text-[#198754] tw-text-[21px] tw-w-8/12'>Te enviamos un email con los detalles a la dirección que nos indicaste.</h3>
                        <h3 className='tw-text-[#198754] tw-text-[21px] tw-w-8/12 tw-font-bold'>No olvides revisar tu bandeja de entrada y spam.</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GeneraConfirmacionExito;
