import React from 'react'
import { cotizaIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import FormCotizador from '../../components/FormCotizador/FormCotizador'

const Cotiza = () => {
  return (
    <section id='cotiza'>
      <BannerHeader
        lineaPrincipal='Cotizaciones'
        lineaSecundaria='' // Si no hay linea enviar ''
        image={cotizaIMG}
      />
      <div id='main' className='container'>
        <div className='row'>
          {/* <div className="col-md-12">
            <h2>Envianos tu consulta</h2>
          </div> */}
          <div id='FormCotizador' className='pb-5'>
            <FormCotizador />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cotiza
