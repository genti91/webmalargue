import React from 'react'
import { cotizaIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import FormGenera from '../../components/FormGenera'

import './Genera.scss'

const Genera = () => {
  return (
    <section id='genera'>
      <BannerHeader
        lineaPrincipal='Generá tu Retiro'
        lineaSecundaria='' // Si no hay linea enviar ''
        image={cotizaIMG}
      />
      <div id='main' className='container'>
        <div className='row'>
          {/* <div className="col-md-12">
            <h2>Envianos tu consulta</h2>
          </div> */}
          <div id='FormCotizador' className='pb-5'>
            <FormGenera />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Genera
