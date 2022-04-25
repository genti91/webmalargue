import React from 'react';
import { cotizaIMG } from '../../assets';
import { BannerHeader } from '../../components/BannerHeader/BannerHeader';





const Cotiza = () => {

    return (
        <BannerHeader   lineaPrincipal =  'Cotizaciones'
                        lineaSecundaria = '' // Si no hay linea enviar ''
                        image = {cotizaIMG}
                        
        />
    
        )};

export default Cotiza;
