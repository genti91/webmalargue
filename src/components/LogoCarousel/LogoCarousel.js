import React from 'react'
import './LogoCarousel.scss'

import { 
    partnerLogo01,
    partnerLogo02,
    partnerLogo03,
    partnerLogo04,
    partnerLogo05,

    } from '../../assets'

export const LogoCarousel = () => {


  return (
    <section id='LogoCarousel'>
        <div className='row h-100 align-items-center'>
            <div className="logoWarper container-fluid crounded">
                <h2 className="text-center mb-4">Nuestros principales clientes</h2>
                <div className="slider">
                    <div className="logos">
                        <img
                            className='partnerLogo'
                            src={partnerLogo01}
                        />
                        <img
                            className='partnerLogo'
                            src={partnerLogo02}
                        />
                        <img
                            className='partnerLogo'
                            src={partnerLogo03}
                        />
                        <img
                            className='partnerLogo'
                            src={partnerLogo04}
                        />
                        <img
                            className='partnerLogo'
                            src={partnerLogo05}
                        />
                    </div>
                    <div className="logos">
                        <img
                            className='partnerLogo'
                            src={partnerLogo01}
                        />
                        <img
                            className='partnerLogo'
                            src={partnerLogo02}
                        />
                        <img
                            className='partnerLogo'
                            src={partnerLogo03}
                        />
                        <img
                            className='partnerLogo'
                            src={partnerLogo04}
                        />
                        <img
                            className='partnerLogo'
                            src={partnerLogo05}
                        />
                    </div>

                </div>

            </div>
        </div>
    </section>
  )
}
