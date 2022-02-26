import React from 'react'

import {    
            novImg01,
            novImg02,
            novImg03,

} from '../../assets';

import './Novedades.scss'

export const Novedades = () => {
  return (
    <section id='Novedades'>
        <div className='container'>
                <h2>Novedades</h2>
                <div className="row row-cols-1 row-cols-md-3 g-1 d-flex align-items-stretch mb-5">
                    <div className="card d-flex align-items-stretch">
                        <div className="card-body d-flex flex-column">
                            <img
                                className='card-img-top'
                                src={novImg01}
                            />
                            <h5 className="card-title">Titulo de la nota del Blog.</h5>
                            <p className="card-text"><span className="text-muted">SubTitulo Nota</span></p>
                            <p className="card-text">
                                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual
                            </p>
                            <div className='h-100 d-flex align-items-end'>

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <button type="button" className="btn btn-outline-primary">Leer toda la Nota</button>
                            </div>
                        </div>
                    </div>
                    <div className="card d-flex align-items-stretch">
                        <div className="card-body d-flex flex-column">
                            <img
                                className='card-img-top'
                                src={novImg02}
                            />
                            <h5 className="card-title">Titulo de la nota del Blog.</h5>
                            <p className="card-text"><span className="text-muted">SubTitulo Nota</span></p>
                            <p className="card-text">
                                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual
                            </p>
                            <div className='h-100 d-flex align-items-end'>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <button type="button" className="btn btn-outline-primary">Leer toda la Nota</button>
                            </div>
                        </div>
                    </div>
                    <div className="card d-flex align-items-stretch">
                        <div className="card-body d-flex flex-column">
                            <img
                                className='card-img-top'
                                src={novImg03}
                            />
                            <h5 className="card-title">Titulo de la nota del Blog.</h5>
                            <p className="card-text"><span className="text-muted">SubTitulo Nota</span></p>
                            <p className="card-text">
                                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual
                            </p>
                            <div className='h-100 d-flex align-items-end'>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <button type="button" className="btn btn-outline-primary">Leer toda la Nota</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}
