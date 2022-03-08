import React from 'react'
import { GpsMarker } from '../../assets/GpsMarker'
import { sucList } from './sucData'

import './Sucursales.scss'

export const Sucursales = ({titulo}) => {
  return (
    <div id='sucursales' className='constainer-fluid'>
        <div  className='container'>
            <h1>{titulo}</h1>
            <div id='listaDeSucusrales' className='container'>
              <div className='row'>
                {sucList.map(({city, address})=>(
                  <div
                    key={city}
                    className='col-md-4'
                  >
                    <div className='row'>
                      <div className='col-md-1' col-md-4>
                        <GpsMarker iconFill='#EB1C23' iconHeight='32'/> 
                      </div>
                      <div className='col-md-11'>
                        <h3>{city}</h3>
                        <p>{address}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
    </div>
  )
}
