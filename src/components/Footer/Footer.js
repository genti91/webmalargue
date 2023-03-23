import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'
import { Link } from 'react-router-dom'
import { FooterDesk } from './FooterDesk'

import { FooterMobile } from './FooterMobile'

export const Footer = () => {
  return (
    <>
      {isMobile ? <FooterMobile /> : <FooterDesk />}
      <Container id='termsAndCond' fluid>
        <Container>
          <Row>
            <Col>{isMobile ? <Link style={{ color: '#222222', textDecoration: 'none' }} to='/politica-privacidad'>Políticas de privacidad | Términos y condiciones</Link> : null}</Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}
