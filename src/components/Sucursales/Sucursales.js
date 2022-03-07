import React from 'react'

import './Sucursales.scss'

export const Sucursales = ({titulo, sucursales}) => {
  return (

    <div id='sucursales' className='constainer-fluid'>
        <div className='container'>
            <h1>{titulo}</h1>
        </div>
    </div>
  )
}
