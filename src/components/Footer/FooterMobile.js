import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import {
  tarjetas,
  logoMercadoPago,
  loogMalargueColor,
  logoTiendaNubeCenter,
} from '../../assets'
import siteData from '../../assets/data'
import { EmailIcon } from '../../assets/EmailIcon'

import { FaIcon } from '../../assets/FaIcon'
import { IgIcon } from '../../assets/IgIcon'

import './FooterMobile.scss'

export const FooterMobile = () => {
  const { phone, social, email } = siteData

  return (
    <Row id='FooterMobile'>
      <Container>
        <Row>
          <div className='col-md-6'>
            <h2>
              <a href={'tel:' + phone.num}>{phone.display}</a>
            </h2>
            <p>
              Contactanos por{' '}
              <strong>Whatsapp de Lunes a Viernes de 9 a 17 hs.</strong>
            </p>
          </div>
        </Row>
        <Row className='pb-1'>
          <Col id='socialIcons' xs={6}>
            <Row>
              <Col xs={4}>
                <a href={social.facebook} target={'_blank'} rel="noreferrer">
                  <button className='btn btn-outline-primary' type='button'>
                    {<FaIcon iconFill='white' iconHeight='40' />}
                  </button>
                </a>
              </Col>
              <Col xs={4}>
                <a href={social.instagram} target={'_blank'} rel="noreferrer">
                  <button className='btn btn-outline-primary' type='button'>
                    {<IgIcon iconFill='white' iconHeight='40' />}
                  </button>
                </a>
              </Col>
              <Col xs={4}>
                <a href={'mailto:' + email} target={'_blank'} rel="noreferrer">
                  <button className='btn btn-outline-primary' type='button'>
                    {<EmailIcon iconFill='white' iconHeight='40' />}
                  </button>
                </a>
              </Col>
            </Row>
          </Col>
          <Col id='contactMail' xs={6}>
            <Row className='align-items-center h-100'>
              <Col>
                <a href={'mailto:' + email} target={'_blank'} rel="noreferrer">
                  {email}
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row id='mediosDePago' className=''>
          <Row>
            <p>Hacé tus envíos y pagalos a través de Mercado Pago</p>
          </Row>
          <Row className='align-items-center'>
            <Col xs={5}>
              <img
                className='img-fluid'
                src={logoMercadoPago}
                alt="Logo de Mercado Pago"
              />
            </Col>
            <Col xs={7}>
              <img
                className='img-fluid'
                src={tarjetas}
                alt="Tarjetas de crédito aceptadas"
              />
            </Col>
          </Row>
        </Row>
        <Row id='tiendaNube' className=' align-items-center'>
          <Col xs={8}>
            <Col>
              <p>
                Integrá tu tienda nube y sumá una opción mas de envío a tu
                tienda
              </p>
            </Col>
          </Col>
          <Col xs={4}>
            <img
              className='img-fluid'
              src={logoTiendaNubeCenter}
              alt="Logo de Tienda Nube"
            />
          </Col>
        </Row>
        <Row id='address' className=' align-items-center'>
          <Col xs={6}>
            <Col>
              <img
                className='img-fluid'
                src={loogMalargueColor}
                alt="Logo de Expreso Malargüe"
              />
            </Col>
          </Col>
          <Col xs={6}>
            <p>Av. Garmendia 4805, C.A.B.A. (C1427ASB)</p>
          </Col>
        </Row>
      </Container>
    </Row>
  )
}
