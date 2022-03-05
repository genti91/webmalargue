import React from 'react'

import './BannerHeader.scss'


export const BannerHeader = ({lineaPrincipal, lineaSecundaria, image}) => {
  return (
    <section id='BannerHeader'

        style={{
           backgroundImage: `url(${image})`
        }}
    
    >
        <div id='overlay' className='container-fluid' 
        
        >
        </div>
        <div id='title' className='container h-100'
            >
            <div className='row h-100 align-items-end'>
                <div  className='col-md-4'
                >
                    
                    <h1>
                        <span>{lineaSecundaria}</span><br/>
                        {lineaPrincipal}
                    </h1>
                    <div className='linea'></div>

                </div>
            </div>
        </div>

        
    </section>
  )
}
