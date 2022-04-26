import React from 'react';
import {Col, Container, Image, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';


import { seguirEnvioIMG, seguirTuto01, seguirTuto02, seguirTuto03, seguirTuto04 } from '../../assets';
import { BannerHeader } from '../../components/BannerHeader/BannerHeader';
import { links } from '../../components/NavBar/links';

import './Envio.scss'





const Envio = () => {

    return (
        <section
            id='seguirEnvio'
        >
            <BannerHeader   lineaPrincipal =  'Envío'
                            lineaSecundaria = 'Cómo seguir tu' // Si no hay linea enviar ''
                            image = {seguirEnvioIMG}
        />
            <Container>
                <Row>
                    <Col
                        md={8} xs={12}
                        className='col-md-8'
                    >
                        <h2>
                            Te explicamos paso a paso como seguir tu envío
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col
                        md={7} xs={12}
                    >
                        <h3>
                            Paso 1
                        </h3>
                        <p>
                            Ingresando en la web, hacé click en el botón <span>‘‘Seguí tu envío’’</span>
                            o haciendo <a href={links.tracking.to}>Click aquí</a>.
                        </p>
                    </Col>
                    <Col
                        md={5} xs={12}
                    >
                        <Image
                            fluid 
                            alt={'Seguir envio paso01'}
                            src={seguirTuto01}
                        />
                    </Col>
                </Row>
                <hr/>  
                <Row
                    className={ isMobile ? ('d-flex flex-column-reverse') : ('')}
                >
                    <Col
                        md={7} xs={12}
                    >
                        <Image
                            fluid 
                            alt={'Seguir envio paso02'}
                            src={seguirTuto02}
                        />
                    </Col>
                    <Col
                        md={5} xs={12}         
                    >
                        <h3>
                            Paso 2
                        </h3>
                        <p>
                            En tu remito, identificá tu número de seguimiento /tracking
                        </p>
                    </Col>
                </Row>
                <hr/>  
                <Row>
                    <Col
                        md={7} xs={12}
                    >
                        <h3>
                            Paso 3
                        </h3>
                        <p>
                        Ingresá en el campo respetando los números y letras sin espacio y sin guión.
                        </p>
                    </Col>
                    <Col
                        md={5} xs={12}
                    >
                        <Image
                            fluid 
                            alt={'Seguir envio paso01'}
                            src={seguirTuto03}
                        />
                    </Col>
                </Row>
                <hr/>  
                <Row
                    className={ isMobile ? ('d-flex flex-column-reverse mb-5') : ('mb-5')}
                >
                    <Col
                        md={7} xs={12}
                    >
                        <Image
                            fluid 
                            alt={'Seguir envio paso02'}
                            src={seguirTuto04}
                        />
                    </Col>
                    <Col
                        md={5} xs={12}
                    >
                        <h3>
                            Paso 4
                        </h3>
                        <p>
                            ¡Listo, revisá donde está tu pedido!
                        </p>
                    </Col>
                </Row>
            </Container>

        </section>
    
        )};

export default Envio;

/*
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}>Third, but second</Col>

*/
