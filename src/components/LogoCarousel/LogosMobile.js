import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import './LogosMobile.scss'

import { 
    partnerLogo01,
    partnerLogo02,
    partnerLogo03,
    partnerLogo04,
    partnerLogo05,

    } from '../../assets'

export const LogosMobile = () => {
  return (
    <section
        id='LogoCarouselMobile'
    >
        <Container>
            <Row><h2 className="text-center pt-5">Nuestros principales clientes</h2></Row>
            <Row>
                <Col
                    xs={6}
                >
                    <img
                        className='partnerLogo img-fluid'
                        src={partnerLogo01}
                    />
                    <img
                        className='partnerLogo img-fluid'
                        src={partnerLogo02}
                    />
                    <img
                        className='partnerLogo img-fluid'
                        src={partnerLogo03}
                    />
                </Col>
                <Col
                    xs={6}
                >
                    <img
                        className='partnerLogo img-fluid'
                        src={partnerLogo04}
                    />
                    <img
                        className='partnerLogo img-fluid'
                        src={partnerLogo05}
                    />
                </Col>
            </Row>

        </Container>
    </section>
  )
}
