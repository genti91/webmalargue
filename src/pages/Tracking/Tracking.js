import React, { useState } from 'react'
import { seguimientoIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import './Tracking.scss'
import { Bullet } from './Bullet'
import { SearchBox } from './SearchBox'
import { Link } from 'react-router-dom'
import ReusableAccordion from '../../components/Accordion/ReusableAccordion'
import { faqTracking } from './faqTracking'
import { useWindowSize } from '../../hooks/useWindowSize'

const Tracking = () => {
  const [trackingData, setTrackingData] = useState([])
  const { width } = useWindowSize()

  function reformatDatetime(value) {
    // Split the date and time parts
    const [datePart, timePart] = value.split(' ')

    // Split the date into components
    const [year, month, day] = datePart.split('-')

    // Split the time into components (optional if not needed)
    const [hours, minutes] = timePart.split(':')

    // Return the reformatted string
    return `${day}/${month}/${year} ${hours}:${minutes}`
  }

  return (
    <section id='Tracking'>
      <BannerHeader
        lineaPrincipal='Seguimiento'
        lineaSecundaria='' // Si no hay linea enviar ''
        image={seguimientoIMG}
      />
      <div className='container'>
        <div
          className='row justify-content-center'
          style={{ marginBottom: '40px' }}
        >
          <div className='col-md-8'>
            <h1 className='heroTitle'>Ingresá tu código de seguimiento</h1>

            <SearchBox setTrackingData={setTrackingData} />

            <div className='container' style={{ width: '100%' }}>
              {trackingData.length
                ? trackingData.map(
                    ({ des, fecha, cod, index, destino, dondeEsta, idSts }) => (
                      <div
                        key={cod}
                        style={{ gap: '.75rem' }}
                        className='row align-items-center items-center step'
                      >
                        <Bullet fecha={fecha} order={index} />
                        <div className={'status col-10 d-flex flex-column'}>
                          <div className='title'>
                            {des}{' '}
                            {(des === 'En Sucursal Origen' &&
                              dondeEsta.charAt(0).toUpperCase() +
                              dondeEsta.slice(1).toLowerCase()) ||
                              (des === 'En sucursal Destino' && destino)}
                          </div>
                          {idSts === 450 && (
                            <div className='data'>
                              El repartidor está camino a tu domicilio.
                            </div>
                          )}
                          <div style={{ color: 'grey' }} className='data'>
                            {reformatDatetime(fecha)}
                          </div>
                        </div>
                      </div>
                    )
                  )
                : null}
            </div>

            <h2
              style={{
                paddingTop: '30px',
                marginTop: '40px',
                borderTop: '1px solid #EEEEEE',
              }}
            >
              Preguntas Frecuentes
            </h2>
            <ReusableAccordion data={faqTracking} />

            {trackingData.length <= 0 ? (
              <div
                className='justify-content-center'
                style={{
                  display: 'flex',
                  height: '62px',
                  width: '100%',
                  marginTop: '72px',
                }}
              >
                <p
                  style={{
                    fontSize: width < 430 ? '15px' : '20px',
                    fontWeight: 'bold',
                    marginRight: '25px',
                  }}
                >
                  ¿Dudas sobre cómo <br />
                  seguir tu envío?
                </p>
                <button
                  className='btn-primary'
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    width: 'fit-content',
                    height: '50px',
                    borderRadius: '5px',
                    backgroundColor: '#2F3394',
                  }}
                  type='button'
                >
                  <Link
                    to='/envio'
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                      fontSize: width < 430 ? '15px' : '18px',
                    }}
                  >
                    Seguí esta guía
                  </Link>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tracking
