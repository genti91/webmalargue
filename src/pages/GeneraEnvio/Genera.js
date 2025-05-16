import React, { useEffect } from 'react'
import { cotizaIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import GeneraHeader from '../../components/GeneraHeader'
import { FormTenesCotizacion } from '../../components/FormTenesCotizacion/FormTenesCotizacion'
import { useSearchParams } from 'react-router-dom'
import './Genera.scss'
import { useGenera } from "../../context/GeneraContext";
import { FormGeneraRemitente } from '../../components/FormGeneraRemitente'

const Genera = () => {
    const [searchParams] = useSearchParams()
    const { cotizacion, setCotizacion } = useGenera()
    const email = searchParams.get('email')
    const numeroCotizacion = searchParams.get('numero_cotizacion')
    const flujo = searchParams.get('flujo')
    const [formRemitente, setFormRemitente] = React.useState({
        nombre: '',
        apellido: '',
        tipo_documento: '',
        numero_documento: '',
        codigo_de_area: '',
        telefono: '',
        provincia: '',
        localidad: '',
        cp: '',
        calle: '',
        numero: '',
        piso: '',
        dpto: '',
    })
    const getCotizacion = () => {
        const cotizacion = localStorage.getItem('cotizacion')
        if (cotizacion) {
            setCotizacion(JSON.parse(cotizacion))
        }
    }
    useEffect(() => {
        getCotizacion()
    }, [])
    return (
        <section id='genera'>
            <BannerHeader
                lineaPrincipal='Generá tu Retiro'
                lineaSecundaria='' // Si no hay linea enviar ''
                image={cotizaIMG}
            />
            <div id='main' className='container tw-py-12'>
                <div className='row gap-4 tw-pt-4'>
                    {(cotizacion && cotizacion.id) ?
                        <>
                            <GeneraHeader />
                            <div className='tw-text-[#2F3394] tw-text-[20px] tw-w-full tw-flex tw-flex-col tw-items-end tw-justify-end mt-4'>
                                <div>
                                    <span className='tw-font-bold'>Cotización:</span> {cotizacion.id}
                                </div>
                                <div>
                                    <span className='tw-font-bold'>Precio final:</span> {cotizacion.precioFinal}
                                </div>
                            </div>
                            <FormGeneraRemitente form={formRemitente} setForm={setFormRemitente} datosPrevios={cotizacion.remitente} />
                        </>
                        :
                        <FormTenesCotizacion flujo={flujo} email={email} numeroCotizacion={numeroCotizacion} />
                    }
                </div>
            </div>
        </section>
    )
}

export default Genera
