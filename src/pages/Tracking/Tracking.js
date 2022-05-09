import React, { useState } from 'react'
import { remitoIMG, seguimientoIMG } from '../../assets'
import { BannerHeader } from '../../components/BannerHeader/BannerHeader'
import './Tracking.scss'
import { Bullet } from './Bullet'
// import { GuiaNoEncontrada } from "./GuiaNoEncontrada";
import { SearchBox } from './SearchBox'

const Tracking = () => {
  // const [loginToken, setLoginToken] = useState({});
  const [trackingData, setTrackingData] = useState([])

  return (
    <section id='Tracking'>
      <BannerHeader
        lineaPrincipal='Seguimiento'
        lineaSecundaria='' // Si no hay linea enviar ''
        image={seguimientoIMG}
      />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <h1 className='heroTitle'>
              En tu remito encontrarás el número de seguimiento
            </h1>
            <img className='img-fluid mt-4' src={remitoIMG} alt='remito' />
            <div>
              <h3>Ingresá el número de seguimiento </h3>
            </div>

            <SearchBox setTrackingData={setTrackingData} />
            {/* <iframe
              src="https://www.softwarecristal.com.ar/web/tracking.php?empresa=malargue"
              title="Consulta ON LINE de carga"
              width="100%"
              height="500px"
            ></iframe> */}
            {trackingData.length
              ? trackingData.map(
                  ({ des, fecha, cod, guia, nRetiro, index }) => (
                    <div key={cod} className='row align-items-center step'>
                      <Bullet fecha={fecha} order={index} />
                      <div className={'status col-10 d-flex flex-column'}>
                        <div className='title'>{des}</div>
                        <div className='data'>{fecha}</div>
                      </div>
                    </div>
                  )
                )
              : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tracking
