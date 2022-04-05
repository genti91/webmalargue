import React from 'react'
import { Row } from 'react-bootstrap'

import './BannerHome.scss'



export const BannerHome = () => {
  return (
    <section id='BannerHome' className='d-flex align-items-stretch'
    >
        <Row className='container-fluid d-flex justify-content-end'>
                <div className='col-md-5 d-flex align-items-center  d-none d-sm-flex'>
                    <div className='d-flex'>
                        <h1>Enviá lo que<br/>necesites, Malargüe<br/>te lo lleva</h1>
                    </div>
                </div>
                {/* Mobile */}
                <div
                  className='d-flex d-sm-none align-items-start'
                >
                  <Row className='d-flex'>
                      <h1>Enviá lo que necesites, Malargüe te lo lleva</h1>
                  </Row>

                </div>
            </Row>
  

    </section>
  )
}
