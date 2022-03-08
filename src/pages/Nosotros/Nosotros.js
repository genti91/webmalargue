import React from 'react';
import { nosotrosIMG, quienesSomos } from '../../assets';
import { MisionIcon } from '../../assets/MisionIcon';
import { VisionIcon } from '../../assets/VisionIcon';
import { BannerHeader } from '../../components/BannerHeader/BannerHeader';

import './Nosotros.scss'



const Pag2 = () => {


    return (
        <section id='Nosostros'>
            <BannerHeader   lineaPrincipal =  'TRAYECTORIA'
                            lineaSecundaria = 'NUESTRA' // Si no hay linea enviar ''
                            image = {nosotrosIMG}
                            
            />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <img className='img-fluid'
                            src={quienesSomos}
                        />
                    </div>
                    <div className='col-md-6 content'>
                        <p className='subTitle'>Sobre Nosotros</p>
                        <h2>Quienes somos</h2>
                        <p>
                            Expreso Malargüe se fundó en 1946 con el fin de transportar productos entre Mendoza y Buenos Aires. En 2011 fue adquirido por el Grupo Codylsa transformándolo en una empresa de Soluciones Logísticas.<br/>
                            <br/>
                            Expreso Malargüe brinda un servicio integral a sus clientes. Desarrolló procesos de calidad para brindar una mejor prestación tanto a empresas como a particulares que desean enviar sus paquetes, comprar insumos o transportar producto terminado a distintos puntos del país.<br/> 
                            <br/>
                            Cuenta con una amplia red de sucursales propias ubicadas en las ciudades de Buenos Aires, Mendoza, Rosario, San Luis, San Rafael, Realicó, Tunuyán, Gral. Alvear y Malargüe. Sin embargo, llega a todo el país a través de su red de socios estratégicos.<br/> 
                            <br/>
                            Expreso Malargüe trabaja en un proceso de mejora continua, comprendiendo el desafío y la responsabilidad que es transportar los bienes de nuestros clientes.
                        </p>
                        <div className='row'>
                            <div className='col-md-6 mt-5'>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        {<MisionIcon iconWidth='28' iconFill='#EB1C23' iconHeight='25.71' />}   
                                    </div>
                                    <div className='col-md-10'>
                                        <h3>Misión</h3>
                                    </div>
                                </div>
                                <p>
                                    Incorporar todas rutas del país a través de socios estratégicos para ser el partner de empresas de e commerce, emprendedores, industrias e individuos.
                                </p>
                            </div>
                            <div className='col-md-6 mt-5'>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        {<VisionIcon iconWidth='28' iconFill='#EB1C23' iconHeight='25.71' />}   
                                    </div>
                                    <div className='col-md-10'>
                                        <h3>Visión</h3>
                                    </div>
                                </div>
                                <p>
                                    Ser una empresa de soluciones logísticas que brinde un servicio de calidad y excelencia sustentado en tecnología y con centro en la atención al cliente.
                                </p>
                            </div>



                        </div>
                    </div>


                </div>
            </div>
            
        </section>

        )};

export default Pag2;
