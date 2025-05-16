import React from 'react'
import { cotizaIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import FormCotizacion from '../../components/FormCotizador/FormCotizacion'

const Cotiza = () => {
  return (
    <section id='cotiza'>
      <BannerHeader
        lineaPrincipal='Cotizá online'
        lineaSecundaria='' // Si no hay linea enviar ''
        image={cotizaIMG}
      />
      <div id='main' className='container'>
        <div className='row tw-py-20'>          
          <FormCotizacion />
        </div>
      </div>
    </section>
  )
}

export default Cotiza
