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
          {/* Mensaje de alerta */}
          <div style={{
            background: '#e3f0ff',
            color: '#2f3394',
            borderRadius: '6px',
            padding: '16px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 500
          }}>
            <span style={{
              fontSize: '1.5rem',
              marginRight: '12px'
            }}>ℹ️</span>
            <span style={{
              textAlign: 'center'
            }}>
              <b>¡ATENCIÓN! Los retiros se agendan hasta las 15:00hs.</b> Luego, quedarán pendientes para programarse el día hábil posterior.
            </span>
          </div>
          <div id='FormCotizador' className='pb-5'>
            <FormCotizador />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cotiza
