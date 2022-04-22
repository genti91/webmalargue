import React from 'react';
import { acuerdos, cargasCompletas, empresasIMG, encomiendasImg, mudanzasImg, palet, paqueteria, serviciosIMG } from '../../assets';
import { BannerHeader } from '../../components/BannerHeader/BannerHeader';

import './Empresas.scss'


const Empresas = () => {


    return (
        <section id='encomiendas'>
            <BannerHeader   lineaPrincipal =  'Empresas'
                            lineaSecundaria = 'Servicios para' // Si no hay linea enviar ''
                            image = {empresasIMG}
                            
            />
            <div className='container-fluid'>
                <div id='Paletizadas' className='container contenidoEncomienda'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='row h-100 align-items-center'>
                                <div className='col'>
                                    <h2>
                                        Ventas <br/>Paletizadas
                                    </h2>
                                    <p>
                                        Nos especializamos en la atención a empresas adecuándonos a los requerimientos que, tanto las fábricas como los proveedores o clientes, puedan solicitar.<br/> 
                                        <br/>
                                        Expreso Malargüe cuenta con la flota adecuada para el transporte de pallets. Lo retiramos en el domicilio indicado independientemente de la cantidad a enviar. Los pallets, viajan asegurados y la compañía puede hacer el seguimiento de manera continua, ya que la empresa cuenta con scanners de última generación en todas las sucursales y depósitos. La documentación, se maneja con alta responsabilidad, siendo enviada de manera digital una vez que el receptor dio su conformidad.<br/> 
                                        <br/>
                                        Cotizá y pagá con transferencia, e cheqs, o mercado pago, programá el retiro y Malargüe se encarga que llegue a destino.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-6  text-end'
                        >
                            <img
                                className='img-fluid'
                                src={palet}
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
                                src={cargasCompletas}
                            />
                        </div>
                        <div className='col-md-5'
                        >
                            <div className='row h-100 align-items-center'

                            
                            >
                                <div className='col '>
                                    <h2>
                                        Cargas <br/>
                                        completas
                                    </h2>
                                    <p>
                                        Si tu empresa necesita enviar carga a otra localidad, expreso Malargüe cuenta con camiones de distintos tamaños para adecuarse a las necesidades de la compañía: semis, sider, furgones y chasis.<br/> 
                                        <br/>
                                        Nuestras unidades cuentan con comunicación permanente y auxilio en tránsito si fuera necesario. Los choferes tienen amplia experiencia en el manejo de cargas de diferentes industrias.<br/>
                                        <br/>
                                        Envianos un whatsapp y realiza el viaje punto a punto.
                                    </p>

                                </div>

                            </div>
                        </div>
                        <div className='col-md-6 d-block d-sm-block d-md-none'
                        >
                            <img
                                className='img-fluid'
                                src={cargasCompletas}
                            />
                        </div>
                        
                    </div>    
                </div>
            </div>
            <div className='container-fluid'>
                <div id='Encomiendas' className='container contenidoEncomienda'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='row h-100 align-items-center'>
                                <div className='col'>
                                    <h2>
                                        Paquetería <br />
                                        Encomiendas
                                    </h2>
                                    <p>
                                        La venta por internet ya llegó y, por lo tanto, los clientes pueden estar situados en localidades distantes de la sede central. El aumento de ventas online genera una nueva red de clientes en el interior y la logística es el punto crítico para escalar la venta. <br />
                                        <br />
                                        Expreso Malargüe posee un sistema de envíos a todo el país, a través de un proceso integral implementado para la logística del e-commerce. Nos integramos con las empresas para brindar un excelente servicio al consumidor final.<br /> 
                                        <br />
                                        Ya sea que vendes por internet o que envias materiales, muestras, repuestos o productos específicos a distintos puntos del país, escribinos por whatsapp que Malargüe te lo lleva.    
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-6  text-end'
                        >
                            <img
                                className='img-fluid'
                                src={paqueteria}
                            />
                        </div>
                    </div>    
                </div>
            </div>
            <div className='container-fluid bg-malargueBg'>
                <div id='Comerciales' className='container contenidoEncomienda'>
                    <div className='row'>
                        <div className='col-md-6 d-none d-md-block'
                        >
                            <img
                                className='img-fluid'
                                src={acuerdos}
                            />
                        </div>
                        <div className='col-md-5'
                        >
                            <div className='row h-100 align-items-center'       
                            >
                                <div className='col '>
                                    <h2>
                                        Acuerdos <br />
                                        Comerciales
                                    </h2>
                                    <p>
                                        Malargüe busca relaciones a largo plazo con sus clientes, si envias paquetería o encomiendas, logistica o pallets frecuentemente, escribinos por whatsapp porque tenemos condiciones interesantes para clientes de alto volumen de carga y frecuencia.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 d-block d-sm-block d-md-none'
                        >
                            <img
                                className='img-fluid'
                                src={acuerdos}
                            />
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    
        )};

export default Empresas;
