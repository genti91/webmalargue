import React from 'react'
import { cotizaIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import { FormTenesCotizacion } from '../../components/FormTenesCotizacion/FormTenesCotizacion'
import { useSearchParams } from 'react-router-dom'
import './Genera.scss'

const Genera = () => {
    const [searchParams] = useSearchParams()

    const email = searchParams.get('email')
    const numeroCotizacion = searchParams.get('numero_cotizacion')
    const flujo = searchParams.get('flujo')
    return (
        <section id='genera'>
            <BannerHeader
                lineaPrincipal='Generá tu Retiro'
                lineaSecundaria='' // Si no hay linea enviar ''
                image={cotizaIMG}
            />
            <div id='main' className='container'>
                <div className='row tw-py-20 gap-4'>
                    <FormTenesCotizacion flujo={flujo} email={email} numeroCotizacion={numeroCotizacion} />
                </div>
            </div>
        </section>
    )
}

export default Genera
