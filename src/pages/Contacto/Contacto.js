import React from 'react';
import { contactoIMG } from '../../assets';
import { EmailIcon } from '../../assets/EmailIcon';
import { WhatsAppIcon } from '../../assets/WhatsAppIcon';
import { BannerHeader } from '../../components/BannerHeader/BannerHeader';
import siteData from '../../assets/data'

import './Contacto.scss'
import { IgIcon } from '../../assets/IgIcon';
import { FaIcon } from '../../assets/FaIcon';
import { Sucursales } from '../../components/Sucursales/Sucursales';





const Contacto = () => {

    const{
        phone,
        adress,
        social,
        email,
        } = siteData;

    const iconSize = '42';
    const iconColor ='#EB1C23'

    return (

        <section id='contactanos'>
            <BannerHeader   lineaPrincipal =  'CONTACTANOS'
                            lineaSecundaria = '' // Si no hay linea enviar ''
                            image = {contactoIMG}                        
            />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'><h2>Envianos tu consulta</h2></div>
                    <div className='col-md-6'>
                        form
                    </div>
                    <div className='col-md-6 mt-3 pb-5'
                    >
                        <div className='row'>
                            <div className="col-md-1">
                                <a 
                                    href={'https://wa.me/'+ phone.num}
                                    target={'_blank'}>
                                        <button 
                                            className="btn btn-outline-primary" 
                                            type="button"   
                                        >
                                                {<WhatsAppIcon iconWidth={iconSize} iconFill={iconColor} iconHeight={iconSize} />}
                                        </button>  
                                </a>
                            </div>
                            <div className='col-md-10 '>
                                <h3>Teléfono</h3>
                                <p>{phone.display}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-1">
                                <a 
                                    href={email}
                                    target={'_blank'}>
                                        <button 
                                            className="btn btn-outline-primary" 
                                            type="button"   
                                        >
                                                {<EmailIcon iconWidth={iconSize} iconFill={iconColor} iconHeight={iconSize} />}
                                        </button>  
                                </a>
                            </div>
                            <div className='col-md-10 '>
                                <h3>Correo</h3>
                                <p>{email}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-1">
                                <a 
                                    href={social.instagram}
                                    target={'_blank'}>
                                        <button 
                                            className="btn btn-outline-primary" 
                                            type="button"   
                                        >
                                                {<IgIcon iconWidth={iconSize} iconFill={iconColor} iconHeight={iconSize} />}
                                        </button>  
                                </a>
                            </div>
                            <div className='col-md-10 '>
                                <h3>Seguinos</h3>
                                <p>{social.istagramDisplay}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-1">
                                <a 
                                    href={social.facebook}
                                    target={'_blank'}>
                                        <button 
                                            className="btn btn-outline-primary" 
                                            type="button"   
                                        >
                                                {<FaIcon iconWidth={iconSize} iconFill={iconColor} iconHeight={iconSize} />}
                                        </button>  
                                </a>
                            </div>
                            <div className='col-md-10 '>
                                <p>{social.faceDisplay}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sucursales titulo='Nos podes encontrar en' />
        </section>

    
        )};

export default Contacto;
