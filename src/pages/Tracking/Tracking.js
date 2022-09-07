import React, { useState } from 'react'
import { remitoIMG, seguimientoIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import './Tracking.scss'
import { Bullet } from './Bullet'
import { SearchBox } from './SearchBox'

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
              En tu remito encontrarás el número de seguimiento
            </h1>
            <img className='img-fluid mt-4' src={remitoIMG} alt='remito' />
            <div>
              <h3>Ingresá el número de seguimiento </h3>
            </div>

            <SearchBox setTrackingData={setTrackingData} />
            {trackingData.length
              ? trackingData.map(({ des, fecha, cod, index, destino }) => (
                  <div key={cod} className='row align-items-center step'>
                    <Bullet fecha={fecha} order={index} />
                    <div className={'status col-10 d-flex flex-column'}>
                      <div className='title'>
                        {des}{' '}
                        {(des === 'En sucursal ' ||
                          des === 'En viaje a sucursal') &&
                          destino}
                      </div>
                      <div className='data'>{fecha}</div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tracking
