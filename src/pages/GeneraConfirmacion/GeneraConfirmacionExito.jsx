import { cotizaIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import GeneraHeader from '../../components/GeneraHeader'
import '../GeneraEnvio/Genera.scss'
import { useGenera } from '../../context/GeneraContext'

const GeneraConfirmacionExito = () => {
    return (
        <section id='genera'>
            <BannerHeader
                lineaPrincipal='Generá tu Retiro'
                lineaSecundaria=''
                image={cotizaIMG}
            />
            <div id='main' className='container tw-py-12'>
                <div className='row gap-4 tw-pt-4'>
                    <GeneraHeader selectedIndex={4} />
                </div>
            </div>
        </section>
    )
}

export default GeneraConfirmacionExito;
