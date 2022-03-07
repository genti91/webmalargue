import React from 'react';
import { encomiendasImg, mudanzasImg, serviciosIMG } from '../../assets';
import { BannerHeader } from '../../components/BannerHeader/BannerHeader';

import './Servicios.scss'


const Servicios = () => {


    return (
        <section id='encomiendas'>
            <BannerHeader   lineaPrincipal =  'Individuos'
                            lineaSecundaria = '' // Si no hay linea enviar ''
                            image = {serviciosIMG}
                            
            />
            <div className='container-fluid'>
                <div id='' className='container contenidoEncomienda'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='row h-100 align-items-center'>
                                <div className='col'>
                                    <h2>
                                        Encomiendas<br/>Paquetes
                                    </h2>
                                    <p>
                                        Malargüe te lleva todo tipo de paquetes o encomiendas que quieras enviar, puede ser grande, pesado o frágil. Nosotros tomamos el desafío de llegar en tiempo y forma.<br/>
                                        <br/>
                                        El servicio incluye el retiro en tu casa, oficina, lugar donde has comprado un producto o donde quieras. Lo llevamos a la ciudad de destino y entregamos en el domicilio indicado.<br/>
                                        <br/>
                                        Tus bienes viajarán asegurados y podes seguir el viaje desde <a href='#'>aquí.</a><br/>
                                        <br/>
                                        Cotizá, pagá con mercado pago, programa tu retiro y listo.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-6  text-end'
                        >
                            <img
                                src={encomiendasImg}
                            />
                        </div>
                    </div>    
                </div>
            </div>
            <div className='container-fluid bg-malargueBg'>
                <div id='' className='container contenidoEncomienda'>
                    <div className='row'>
                        <div className='col-md-6'
                        >
                            <img
                                src={mudanzasImg}
                            />
                        </div>
                        <div className='col-md-5'
                        >
                            <div className='row h-100 align-items-center'

                            
                            >
                                <div className='col '>
                                    <h2>
                                        Mudanzas
                                    </h2>
                                    <p>
                                        ¿Te mudás de ciudad?, nosotros te lo llevamos.<br/>
                                        <br/>
                                        Sabemos que una mudanza es un momento de mucho stress, nosotros nos ocupamos de que tus muebles lleguen a tu nueva casa.<br/>
                                        <br/>
                                        Mandanos un mensaje de whastapp y un especialista se comunicará con vos.<br/>
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    
        )};

export default Servicios;
