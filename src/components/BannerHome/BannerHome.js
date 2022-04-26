import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import './BannerHome.scss'




export const BannerHome = () => {
  return (
    <Container fluid id='BannerHome' className='d-flex align-items-stretch'
    >
      <Container>

        <Row className=' d-flex justify-content-end  align-items-start h-100'>
                <Col
                  xs={12}
                className=' d-flex d-none d-sm-flex imgBanner h-100'>
                    <div className='d-flex'>
                        <h1>Enviá lo que<br/>necesites, Malargüe<br/>te lo lleva</h1>
                    </div>
                </Col>

                {/* Mobile */}
                <div
                  className='d-flex d-sm-none align-items-start imgBanner h-100'
                >
                  <Row className='d-flex'>
                      <h1>Enviá lo que necesites, Malargüe te lo lleva</h1>
                  </Row>

                </div>
        </Row>
      </Container>
  

    </Container>
  )
}
