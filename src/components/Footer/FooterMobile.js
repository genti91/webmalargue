import React from 'react'
import { Col, Container, Row,} from 'react-bootstrap'

import { 
    tarjetas,
    logoMercadoPago,
    logoTiendaNube,
    loogMalargueColor,
    logoTiendaNubeGrande,
    logoTiendaNubeCenter

} from '../../assets'
import siteData from '../../assets/data'
import { EmailIcon } from '../../assets/EmailIcon'

import {FaIcon} from '../../assets/FaIcon'
import { IgIcon } from '../../assets/IgIcon'

import './FooterMobile.scss'

export const FooterMobile = () => {

    const{
        phone,
        adress,
        social,
        email,
        } = siteData

  return (

    <Row id='FooterMobile'>
        <Container>
            <Row>
                <div className='col-md-6'>
                <h2>
                    <a href=
                        {
                        'tel:'+phone.num
                        }                    
                        >{phone.display}
                    </a>
                </h2>
                    <p>
                    Contactanos por <strong>Whatsapp de Lunes a Viernes de 9 a 17 hs.</strong>
                    </p>
                </div>
            </Row>
            <Row 
                className='pb-1'
            >
                <Col
                    id='socialIcons'
                    xs={6}>
                    <Row>
                        <Col xs={4}>
                            <a
                                href={social.facebook}
                                target={'_blank'}> 
                                    <button className="btn btn-outline-primary" type="button">
                                        {<FaIcon  iconFill='#2F3394'  iconHeight= '40' />}
                                    </button>
                            </a>
                        </Col>
                        <Col xs={4}>
                            <a
                                href={social.facebook}
                                target={'_blank'}> 
                                    <button className="btn btn-outline-primary" type="button">
                                        {<IgIcon  iconFill='#2F3394'  iconHeight= '40' />}
                                    </button>
                            </a>
                        </Col>
                        <Col xs={4}>
                            <a
                                href={social.facebook}
                                target={'_blank'}> 
                                    <button className="btn btn-outline-primary" type="button">
                                        {<EmailIcon  iconFill='#2F3394'  iconHeight= '40' />}
                                    </button>
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col
                    id='contactMail'
                    xs={6}
                >
                    <Row
                        className='align-items-center h-100'
                    >
                        <Col>
                            <a 
                                href={'mailto:'+ email}
                                target={'_blank'}
                            >
                                {email}
                            </a>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
            <Row
                id='mediosDePago'
                className=''
            >
                <Row><p>Hacé tus envíos y pagalos a través de Mercado Pago</p></Row>
                <Row
                    className='align-items-center'
                >
                    <Col
                        xs={5}
                    >
                        <img
                            className='img-fluid'
                            src={logoMercadoPago}
                        />
                    </Col>
                    <Col
                        xs={7}
                    >
                        <img
                            className='img-fluid'
                            src={tarjetas}
                        />
                    </Col>
                </Row>
            </Row>
            <Row
                id='tiendaNube'
                className=' align-items-center'
            >
                
                    <Col
                        
                        xs={8}
                    >
                        <Col
                            
                        >
                            <p>
                                Integrá tu tienda nube y sumá una opción mas de envío a tu tienda
                            </p>
                        </Col>
                    </Col>
                    <Col
                        xs={4}
                    >
                        <img
                            className='img-fluid'
                            src={logoTiendaNubeCenter}
                        />
                    </Col>

            </Row>
            <Row
                id='address'
                className=' align-items-center'
            >              
                    <Col
                        
                        xs={6}
                    >
                        <Col
                            
                        >
                        <img
                            className='img-fluid'
                            src={loogMalargueColor}
                        />
                        </Col>
                    </Col>
                    <Col
                        xs={6}
                        >
                        <p>
                        Av. Garmendia 4805, C.A.B.A. (C1427ASB)
                        </p>
                    </Col>
            </Row>
            <Row
                id='terms'
            >
                <Col><p>Políticas de privacidad | Términos y condiciones</p></Col>
            </Row>
        </Container>
    </Row>
  )
}
