import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'
import { Link } from 'react-router-dom'

import {
  tarjetas,
  logoMercadoPago,
  logoTiendaNube,
  loogMalargueColor,
} from '../../assets'
import siteData from '../../assets/data'
import { EmailIcon } from '../../assets/EmailIcon'

import { FaIcon } from '../../assets/FaIcon'
import { IgIcon } from '../../assets/IgIcon'

import './Footer.scss'

export const FooterDesk = () => {
  const { phone, adress, social, email } = siteData

  return (
    <footer id='footerMalargue'>
      <Container>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h2>
                <a href={'tel:' + phone.num}>{phone.display}</a>
              </h2>
              <p>
                Contactanos por <strong>Whatsapp</strong> de Lunes a<br />{' '}
                Viernes de 9 a 17 hs.
              </p>
            </div>
            <div className='col-5'>
              <div
                id='socialContact'
                className='row d-flex justify-content-end align-items-center h-100'
              >
                <div className='col-2'>
                  <a href={social.facebook} target={'_blank'}>
                    <button className='btn btn-outline-primary' type='button'>
                      {
                        <FaIcon
                          iconFill='white'
                          iconHeight={isMobile ? '30' : '52'}
                        />
                      }
                    </button>
                  </a>
                </div>
                <div className='col-2'>
                  <a href={social.instagram} target={'_blank'}>
                    <button className='btn btn-outline-primary' type='button'>
                      {
                        <IgIcon
                          iconFill='white'
                          iconHeight={isMobile ? '30' : '52'}
                        />
                      }
                    </button>
                  </a>
                </div>
                <div className='col-2'>
                  <a href={'mailto:' + email} target={'_blank'}>
                    <button className='btn btn-outline-primary' type='button'>
                      {
                        <EmailIcon
                          iconFill='white'
                          iconHeight={isMobile ? '30' : '52'}
                        />
                      }
                    </button>
                  </a>
                </div>
                <div
                  className={isMobile ? 'col-1' : 'col-5 pr-3'}
                  id='contactMail'
                >
                  <a href={'mailto:' + email} target={'_blank'}>
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div
            className='row align-items-center '
            style={{
              height: '100px',
            }}
          >
            <div className='col-md-3'>
              <p>Hacé tus envíos y pagalos a través de Mercado Pago</p>
            </div>
            <div className='col-md-3'>
              <div className='row align-items-center'>
                <div className='col-6'>
                  <img
                    className='img-fluid mediosDePago'
                    src={logoMercadoPago}
                  />
                </div>
                <div className='col-6'>
                  <img className='img-fluid mediosDePago' src={tarjetas} />
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <p>
                Integrá tu tienda nube y sumá una opción mas de envío a tu
                tienda
              </p>
            </div>
            <div className='col-md-3'>
              <img src={logoTiendaNube} className='img-fluid' />
            </div>
          </div>
        </div>
        <div className='container'>
          <div
            className='row align-items-center '
            style={{
              height: '100px',
            }}
          >
            <div id='address' className={isMobile ? 'col-6' : 'col-md-3'}>
              <img className='img-fluid mediosDePago' src={loogMalargueColor} />
            </div>
            <div className={isMobile ? 'col-6' : 'col-md-3'}>
              <p className='footerStrong'>{adress}</p>
            </div>
            <div className='col-md-6'>
              <p className='footerStrong'>
              <Link style={{ color: '#222222', textDecoration: 'none' }} to='/politica-privacidad'>Políticas de privacidad | Términos y condiciones</Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
