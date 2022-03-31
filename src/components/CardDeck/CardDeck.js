import React from 'react'
import {    ecommerce,
            empresa,
            individuo,
            mas,
            whatsAppCTA
    } from '../../assets';
import { links } from '../NavBar/links';


import './CardDeck.scss'

const servicios = links.servicios


export const CardDeck = () => {

    
  return (
    <section id='CadrDeck' className='container'>
        <div className='row justify-content-end'>
            <a
            href="https://wa.me/5491163622778?text=Hola Expreso Malargue, Estoy buscando información sobre encomiendas!"
                className="whatsapp"
                target="_blank"
                rel="noreferrer"
            >
                {" "}
                <img
                    alt='WhatsApp'
                    src={whatsAppCTA}
                />
            </a>

        </div>
        <div id='subTitle' className='container'>
            <div className='row '>
                <div className='col-md-4'>
                    <p className="card-text"><span className="text-muted">Servicios para</span></p>
                </div>
                <div className='col-md-4 '>
                    <p className="card-text"><span className="text-muted">Servicios para</span></p>
                </div>
                <div className='col-md-4 '>
                    <p className="card-text"><span className="text-muted">Servicios para</span></p>
                </div>
            </div>
         </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 d-flex align-items-stretch mb-5">
            <div className="card d-flex align-items-stretch">
                <div className="card-body d-flex flex-column">
                    {/* <p className="card-text"><span className="text-muted">Servicios para</span></p> */}
                    <h5 className="card-title">Individuos</h5>
                    <ul className="card-text">
                        <li>Paquetería</li>
                        <li>Encomiendas</li>
                    </ul>
                    <div className='h-100 d-flex align-items-end'>
                            <img
                                alt='individuos'
                                className='card-img-bottom'
                                src={individuo}
                            />
                    </div>
                </div>

            </div>
            <div id='central' className="card d-flex align-items-stretch">
                <div className="card-body d-flex flex-column">
                    {/* <p className="card-text"><span className="text-muted">Servicios para</span></p> */}
                    <h5 className="card-title">Empresas</h5>
                    <ul className="card-text">
                        <li>Cargas completas</li>
                        <li>Venta paletizada</li>
                        <li>Paquetería/Encomienda</li>
                        <li>Acuerdos comerciales</li>
                    </ul>
                    <div className='h-100 d-flex align-items-end'>
                            <img
                                alt='empresa'
                                className='card-img-bottom'
                                src={empresa}
                            />
                    </div>
                </div>

            </div>
            <div className="card d-flex align-items-stretch">
                <div className="card-body d-flex flex-column">
                    {/* <p className="card-text"><span className="text-muted">Servicios para</span></p> */}
                    <h5 className="card-title">E-Commerce</h5>
                    <ul className="card-text">
                        <li>Logística para E-Commerce</li>
                        <li>Integrá tu Tienda Nube</li>
                    </ul>
                    <div className='h-100 d-flex align-items-end'>
                            <img
                                alt='eComenerce'
                                className='card-img-bottom'
                                src={ecommerce}
                            />
                    </div>
                </div>

            </div>

        </div>
            
        <div className='row pb-5'>
            <div className=" d-flex justify-content-center col-md-4">
                <button className="btn btn-primary" type="button">
                    <a href={servicios.individuos.to}>
                        <img src={mas}/>

                    </a>
                </button>  
            </div>
            <div className=" d-flex justify-content-center col-md-4">
                <button className="btn btn-primary" type="button">
                    <a href={servicios.empresas.to}>
                        <img src={mas}/>

                    </a>
                </button>  
            </div>
            <div className=" d-flex justify-content-center col-md-4">
                <button className="btn btn-primary" type="button">
                    <a href={servicios.eCommerce.to}>
                        <img src={mas}/>

                    </a>
                </button>  
            </div>
        </div>

    </section>

    
  )
}
