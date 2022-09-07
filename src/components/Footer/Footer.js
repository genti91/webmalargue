import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'
import { FooterDesk } from './FooterDesk'

import { FooterMobile } from './FooterMobile'

export const Footer = () => {
  return (
    <>
      {isMobile ? <FooterMobile /> : <FooterDesk />}
      <Container id='termsAndCond' fluid>
        <Container>
          <Row>
            <Col>{/* Políticas de privacidad | Términos y condiciones */}</Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}
