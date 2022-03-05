import React from 'react';
import { nosotrosIMG } from '../../assets';
import { BannerHeader } from '../../components/BannerHeader/BannerHeader';

import './Nosotros.scss'



const Pag2 = () => {


    return (
        <BannerHeader   lineaPrincipal =  'TRAYECTORIA'
                        lineaSecundaria = 'NUESTRA' // Si no hay linea enviar ''
                        image = {nosotrosIMG}
                        
        />
        )};

export default Pag2;
