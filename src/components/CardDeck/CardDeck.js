import React from 'react'
import { Row } from 'react-bootstrap';
import {    ecommerce,
            empresa,
            individuo,
            mas,
    } from '../../assets';
import { links } from '../NavBar/links';


import './CardDeck.scss'

const servicios = links.servicios


export const CardDeck = () => {

    
  return (
    <section id='CadrDeck' className='container'>
        <div
            id='deck' 
            className="row row-cols-1 row-cols-md-3 g-4 d-flex align-items-stretch mb-5">
            <div className="card d-flex align-items-stretch">
                <div className="card-body d-flex flex-column">
                    {/* <p className="card-text"><span className="text-muted">Servicios para</span></p> */}
                    <div className='col-md-12'>
                        <p className="card-text"><span className="text-muted">Servicios para</span></p>
                    </div>
                    <h5 className="card-title">Individuos</h5>
                    <ul className="card-text">
                        <li>Paquetería</li>
                        <li>Encomiendas</li>
                    </ul>
                    <div className='h-100 d-flex align-items-end Individuos'>
                            <img
                                alt='individuos'
                                className='card-img-bottom'
                                src={individuo}
                            />
                    </div>
                    <Row
                        className='justify-content-center pt-5'
                    >
                        <div className=" d-flex col-md-3 justify-content-center">
                            <button className="btn btn-primary" type="button">
                                <a href={servicios.individuos.to}>
                                    <img src={mas}/>
                                </a>
                            </button>  
                        </div>
                    </Row>
                </div>

            </div>
            <div  className="card d-flex align-items-stretch">
                <div className="card-body d-flex flex-column">
                    {/* <p className="card-text"><span className="text-muted">Servicios para</span></p> */}
                    <div className='col-md-12 '>
                        <p className="card-text"><span className="text-muted">Servicios para</span></p>
                    </div>
                    <div id='central'
                        style={{
                            
                        }}
                    >
                        <h5 className="card-title">Empresas</h5>
                        <ul className="card-text">
                            <li>Cargas completas</li>
                            <li>Venta paletizada</li>
                            <li>Paquetería/Encomienda</li>
                            <li>Acuerdos comerciales</li>
                        </ul>
                        <div className=' d-flex align-items-center Empresas'>
                                <img
                                    alt='empresa'
                                    className='card-img-bottom'
                                    src={empresa}
                                />
                        </div>
                    </div>
                    <Row
                        className='justify-content-center pt-5'
                    >
                        <div className=" d-flex justify-content-center col-md-4">
                            <button className="btn btn-primary" type="button">
                                <a href={servicios.empresas.to}>
                                    <img src={mas} alt={'servicios'}/>

                                </a>
                            </button>  
                        </div>
                    </Row>
                </div>

            </div>
            <div className="card d-flex align-items-stretch">
                <div className="card-body d-flex flex-column">
                    {/* <p className="card-text"><span className="text-muted">Servicios para</span></p> */}
                    <div className='col-md-12 '>
                        <p className="card-text"><span className="text-muted">Servicios para</span></p>
                    </div>
                    <h5 className="card-title">E-Commerce</h5>
                    <ul className="card-text">
                        <li>Logística para E-Commerce</li>
                        <li>Integrá tu Tienda Nube</li>
                    </ul>
                    <div className='h-100 d-flex align-items-end ECommerce'>
                            <img
                                alt='eComenerce'
                                className='card-img-bottom'
                                src={ecommerce}
                            />
                    </div>
                    <Row
                        className='justify-content-center pt-5'
                    >
                        <div className=" d-flex justify-content-center col-md-4">
                            <button className="btn btn-primary" type="button">
                                <a href={servicios.eCommerce.to}>
                                    <img src={mas} alt={''}/>

                                </a>
                            </button>  
                        </div>

                    </Row>
                </div>

            </div>

        </div>

    </section>

    
  )
}
