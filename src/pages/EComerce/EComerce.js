import React from 'react';
import { eComerceIMG, encomiendasImg, logosticaEcom, logoTiendaNubeCenter, logoTiendaNubeGrande, mudanzasImg, serviciosIMG } from '../../assets';
import { BannerHeader } from '../../components/BannerHeader/BannerHeader';
import { links } from '../../components/NavBar/links';


import './EComerce.scss'


const EComerce = () => {


    return (
        <section id='encomiendas'>
            <BannerHeader lineaPrincipal='E-Commerce'
                lineaSecundaria='Servicios para' // Si no hay linea enviar ''
                image={eComerceIMG}

            />
            <div className='container-fluid'>
                <div id='Paletizadas' className='container contenidoEncomienda'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='row h-100 align-items-center'>
                                <div className='col'>
                                    <h2>
                                        Logística para <br />
                                        E-Commerce
                                    </h2>
                                    <p>
                                        Malargüe te lleva todo tipo de paquetes o encomiendas que quieras enviar, puede ser grande, pesado o frágil. Nosotros tomamos el desafío de llegar en tiempo y forma. <br />
                                        <br />
                                        El servicio incluye el retiro en tu casa, oficina, lugar donde has comprado un producto o donde quieras. Lo llevamos a la ciudad de destino y entregamos en el domicilio indicado.<br />
                                        <br />
                                        Tus bienes viajarán asegurados y podes seguir el viaje desde <a href={links.tracking.to}>aquí.</a><br />
                                        <br />
                                        Cotizá, pagá con mercado pago, programá tu retiro y listo.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-6  text-end'
                        >
                            <img
                                className='img-fluid'
                                src={logosticaEcom}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-malargueBg'>
                <div id='Cargas' className='container contenidoEncomienda'>
                    <div className='row'>
                        <div className='col-md-6 d-none d-md-block'
                        >
                            <img
                                className='img-fluid'
                                src={logoTiendaNubeGrande}
                            />
                        </div>
                        <div className='col-md-5'
                        >
                            <div className='row h-100 align-items-center'


                            >
                                <div className='col '>
                                    <h2>
                                        Integrá tu<br />
                                        Tienda Nube
                                    </h2>
                                    <p>
                                        Al integrar tu tienda con Malargüe, podrás enviar paquetes de todo tamaño, hacer entregas dentro de CABA, GBA, Mendoza, Cordoba, Santa Fe, La Pampa, San Luís y muchos puntos más.
                                        <br />
                                        <br />
                                        Configurá tus rutas de envío para despachar más paquetes en un mismo envío, hacer seguimiento de tus envíos en tiempo real ¡y mucho más!
                                        <br />
                                        <br />
                                        Mandanos un mensaje de whastapp y un especialista se comunicará con vos.
                                        <br />
                                        <br />
                                        {/* <a
                                            href="https://wa.me/5491163622778?text=Hola Expreso Malargue, Quiero integrar mi tienda nube!"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Quiero integrar mi tienda nube!
                                        </a> */}
                                    </p>
                                    <div className='col-md-7 d-grid mb-4'>
                                        <button className='btn btn-primary' type='button'>
                                            <a
                                                href="https://wa.me/5491163622778?text=Hola Expreso Malargue, Quiero integrar mi tienda nube!"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Quiero integrar mi tienda nube!
                                            </a>
                                        </button>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className='col-md-6 d-flex d-sm-block d-md-none justify-content-center pt-3'
                        >
                            <img
                                width={'80%'}
                                className='img-fluid '
                                src={logoTiendaNubeCenter}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
};

export default EComerce;
