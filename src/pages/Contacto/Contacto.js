import React from 'react';
import { contactoIMG } from '../../assets';
import { BannerHeader } from '../../components/BannerHeader/BannerHeader';





const Contacto = () => {

    return (
        <BannerHeader   lineaPrincipal =  'CONTACTANOS'
                        lineaSecundaria = '' // Si no hay linea enviar ''
                        image = {contactoIMG}
                        
        />
    
        )};

export default Contacto;
