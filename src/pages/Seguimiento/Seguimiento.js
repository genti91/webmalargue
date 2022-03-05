import React from 'react';
import { seguimientoIMG } from '../../assets';
import { BannerHeader } from '../../components/BannerHeader/BannerHeader';




const Seguimiento = () => {


    return (
        <BannerHeader   lineaPrincipal =  'Seguimiento'
                        lineaSecundaria = '' // Si no hay linea enviar ''
                        image = {seguimientoIMG}
                        
        />
        )};

export default Seguimiento;
