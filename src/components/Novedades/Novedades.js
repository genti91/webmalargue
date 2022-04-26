import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {    
            novImg01,
            novImg02,
            novImg03,
            seguiTuPedido,

} from '../../assets';

import {links} from '../NavBar/links'

import './Novedades.scss'

export const Novedades = () => {
  return (
    <Container fluid id='Novedades'>
        <Container>
                <h2>Novedades</h2>
                <div className="row row-cols-1 row-cols-md-3 g-1 d-flex align-items-stretch mb-5">
                    <div className="card d-flex align-items-stretch">
                        <div className="card-body d-flex flex-column">
                            <img
                                className='card-img-top'
                                src={novImg01}
                            />
                            <h5 className="card-title">Cómo embalar tu paquete</h5>
                            <p className="card-text"><span className="text-muted">SubTitulo Nota</span></p>
                            <p className="card-text">
                                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual
                            </p>
                            <div className='h-100 d-flex align-items-end'>

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <Link type="button" className="btn btn-outline-primary"
                                      to={links.blog.to}  
                                >
                                    Leer toda la Nota
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card d-flex align-items-stretch">
                        <div className="card-body d-flex flex-column">
                            <img
                                className='card-img-top'
                                src={seguiTuPedido}
                            />
                            <h5 className="card-title">Cómo seguir tu envío</h5>
                            <p className="card-text"><span className="text-muted">SubTitulo Nota</span></p>
                            <p className="card-text">
                                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual
                            </p>
                            <div className='h-100 d-flex align-items-end'>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <Link   type="button" className="btn btn-outline-primary"
                                        to={links.envio.to}
                            >
                                Leer toda la Nota
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card d-flex align-items-stretch">
                        <div className="card-body d-flex flex-column">
                            <img
                                className='card-img-top'
                                src={novImg03}
                            />
                            <h5 className="card-title">Cómo generar tu presupuesto</h5>
                            <p className="card-text"><span className="text-muted">SubTitulo Nota</span></p>
                            <p className="card-text">
                                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual
                            </p>
                            <div className='h-100 d-flex align-items-end'>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <Link   type="button" className="btn btn-outline-primary"
                                        to={'/'}
                                >Leer toda la Nota
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    </Container>
  )
}
