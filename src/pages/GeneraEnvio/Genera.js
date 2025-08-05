import React, { useEffect, useState } from 'react'
import { cotizaIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import GeneraHeader from '../../components/GeneraHeader'
import { FormTenesCotizacion } from '../../components/FormTenesCotizacion/FormTenesCotizacion'
import { useSearchParams } from 'react-router-dom'
import './Genera.scss'
import { useGenera } from '../../context/GeneraContext'
import { FormGeneraRemitente } from '../../components/FormGeneraRemitente/FormGeneraRemitente'
import { FormGeneraDestinatario } from '../../components/FormGeneraDestinatario/FormGeneraDestinatario'
import { GeneraResumen } from '../../components/GeneraResumen/GeneraResumen'
import { useForm } from '../../hooks'

const Genera = () => {
  const [searchParams] = useSearchParams()
  const { cotizacion } = useGenera()
  const email = searchParams.get('email')
  const numeroCotizacion = searchParams.get('numero_cotizacion')
  const [savedCotizacion, setSavedCotizacion] = useState(email && numeroCotizacion ? true : null);
  const flujo = searchParams.get('flujo')
  const [currentStep, setCurrentStep] = React.useState(0)
  const remitenteDefault = {
    nombre: '',
    email: '',
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
  }
  const [formRemitente, setFormRemitente] = React.useState(remitenteDefault)
  const destinatarioDefault = {
    nombre: '',
    email: '',
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
    observaciones: '',
    factura_a_nombre_de: '',
    tipo_de_contribuyente: 'Consumidor final',
    notificacion: '',
  }
  const [formDestinatario, setFormDestinatario] =
    React.useState(destinatarioDefault)

  const { form, setInForm } = useForm({
          numero_cotizacion: numeroCotizacion || '',
          email: email || '',
      })

  const setInRemitenteForm = (field, value) => {
    setFormRemitente((prevState) => ({
      ...prevState,
      [field]: value,
    }))
  }
  const setInDestinatarioForm = (field, value) => {
    setFormDestinatario((prevState) => ({
      ...prevState,
      [field]: value,
    }))
  }
  useEffect(() => {
    if (cotizacion && cotizacion.id) {
      setFormRemitente((prevState) => ({
        ...prevState,
        localidad: cotizacion.remitente.localidad,
        provincia: cotizacion.remitente.provincia,
        cp: cotizacion.remitente.cp,
      }))
      setFormDestinatario((prevState) => ({
        ...prevState,
        localidad: cotizacion.destinatario.localidad,
        provincia: cotizacion.destinatario.provincia,
        cp: cotizacion.destinatario.cp,
      }))
    }
  }, [cotizacion])

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: cotizacion?.id ? 200 : 0, behavior: 'smooth' })
    }, 0)
  }, [currentStep, cotizacion?.id])

  return (
    <section id='genera'>
      <BannerHeader
        lineaPrincipal='Generá tu Retiro'
        lineaSecundaria='' // Si no hay linea enviar ''
        image={cotizaIMG}
      />
      <div id='main' className='container tw-py-[40px]'>
        <div className='row gap-4 tw-pt-4'>
          {cotizacion && cotizacion.id ? (
            <>
              <GeneraHeader selectedIndex={currentStep} />
              <div className='tw-text-[#2F3394] tw-text-[20px] tw-w-full tw-flex tw-flex-col tw-items-center md:tw-items-end tw-justify-end mt-4'>
                <div>
                  <span className='tw-font-bold'>Cotización:</span>{' '}
                  {cotizacion.id}
                </div>
                <div>
                  <span className='tw-font-bold'>Precio final:</span> ARS{' '}
                  {cotizacion.precioFinal}
                </div>
              </div>

              {currentStep === 0 && (
                <FormGeneraRemitente
                  form={formRemitente}
                  setInForm={setInRemitenteForm}
                  datosPrevios={cotizacion.remitente}
                  setCurrentStep={setCurrentStep}
                />
              )}
              {currentStep === 1 && (
                <FormGeneraDestinatario
                  form={formDestinatario}
                  setInForm={setInDestinatarioForm}
                  datosPrevios={cotizacion.destinatario}
                  setCurrentStep={setCurrentStep}
                />
              )}
              {currentStep === 2 && (
                <GeneraResumen
                  cotizacion={cotizacion}
                  datosRemitente={formRemitente}
                  datosDestinatario={formDestinatario}
                  setCurrentStep={setCurrentStep}
                />
              )}
            </>
          ) : (
            <FormTenesCotizacion
              savedCotizacion={savedCotizacion}
              setSavedCotizacion={setSavedCotizacion}
              form={form}
              setInForm={setInForm}
              flujo={flujo}
              email={email}
              numeroCotizacion={numeroCotizacion}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Genera
