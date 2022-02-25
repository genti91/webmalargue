import React from 'react'
import {    ecommerce,
            empresa,
            individuo,
    } from '../../assets';

import './CardDeck.scss'



export const CardDeck = () => {
  return (
      <div id='CadrDeck' className='container'>
        <div class="row row-cols-1 row-cols-md-3 g-4">

            <div className='col'>
                <div class="card ">
                    <div class="card-body">
                        <p class="card-text"><span class="text-muted">Servicios para</span></p>
                        <h5 class="card-title">Individuos</h5>
                        <ul class="card-text">
                            <li>Paquetería</li>
                            <li>Encomiendas</li>
                            <li></li>
                            <li></li>
                        </ul>
                        <div className='d-flex flex-column justify-content-end h-100'
                        >
                            <div className='d-flex'>
                                <img
                                    className='card-img-bottom'
                                    src={individuo}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div class="card ">
                    <div class="card-body">
                        <p class="card-text"><span class="text-muted">Servicios para</span></p>
                        <h5 class="card-title">Empresas</h5>
                        <ul class="card-text">
                            <li>Paquetería</li>
                            <li>Encomiendas</li>
                            <li>Encomiendas</li>
                            <li>Encomiendas</li>
                        </ul>
                        <div className='d-flex flex-column justify-content-end h-100'
                        >
                            <div className='d-flex'>
                                <img
                                    className='card-img-bottom'
                                    src={empresa}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div class="card">
                    <div class="card-body">
                        <p class="card-text"><span class="text-muted">Servicios para</span></p>
                        <h5 class="card-title">E-Commerce</h5>
                        <ul class="card-text">
                            <li>Paquetería</li>
                            <li>Encomiendas</li>
                            <li></li>
                            <li></li>
                        </ul>
                        <div className='d-flex flex-column justify-content-end h-100'
                        >
                            <div className='d-flex'>
                                <img
                                    className='card-img-bottom'
                                    src={ecommerce}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

      </div>
  )
}
