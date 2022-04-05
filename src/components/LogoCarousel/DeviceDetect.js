import React from 'react'
import { isMobile } from "react-device-detect";
import { LogoCarousel } from './LogoCarousel';
import { LogosMobile } from './LogosMobile';


export const DeviceDetect = () => {

    return (

        <>
           {
               isMobile ? <LogosMobile />
                        : <LogoCarousel />
           }
        </>
    )

}

