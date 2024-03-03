import React, { useState } from 'react'
import { imgRemito, seguimientoIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import './Tracking.scss'
import { Bullet } from './Bullet'
import { SearchBox } from './SearchBox'
import { Link } from 'react-router-dom'

const Tracking = () => {
  const [trackingData, setTrackingData] = useState([])

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
          <div className='col-md-6'>
            <h1 className='heroTitle'>
              Ingresá tu código de seguimiento
            </h1>

            <SearchBox setTrackingData={setTrackingData} />
            

            <dv>
            {trackingData.length
              ? trackingData.map(({ des, fecha, cod, index, destino, dondeEsta }) => (
                <div key={cod} className='row align-items-center step'>
                  <Bullet fecha={fecha} order={index} />
                  <div className={'status col-10 d-flex flex-column'}>
                    <div className='title'>
                      {des}{' '}
                      {(
                        (des === 'En Sucursal Origen') && dondeEsta)||
                        ((des === 'En sucursal Destino') &&
                        destino)}
                    </div>
                    <div className='data'>{fecha}</div>
                  </div>
                </div>
              ))
            :null}
            </dv>

            <div>
            <h3 className='heroTitle' style={{ margin: 0, paddingTop: 0 }}>¿No sabes dónde encontrarlo?</h3>
            <h4 style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '15px',
              lineHeight: '30px',
              textAlign: 'center',
              color: '#2F3394'
            }}>En tu remito encontrarás el código de seguimiento</h4>
            <img className='img-fluid mt-4' src={imgRemito} alt='remito' />
            </div>

            {trackingData.length <= 0 ? (
              <div
                className='justify-content-center'
                style={{
                  display: 'flex',
                  height: '62px',
                  width: '100%',
                  marginTop: '72px'
                }}
              >
                <p
                  style={{
                    fontSize: '20px',
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
                    width: '30%',
                    height: '50px',
                    borderRadius: '5px'
                  }}
                  type='button'
                >
                  <Link
                    to='/envio'
                    style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}
                  >
                    Seguí esta guía
                  </Link>
                </button>
              </div>
            ):null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tracking
