import React from 'react'
import { isMobile } from "react-device-detect";
import { LogoCarousel } from './LogoCarousel';
import { LogosMobile } from './LogosMobile';


export const DeviceDetect = () => {

    // const conmtent = ()=>{
    //     if (isMobile){
    //         return <h1>Mobile</h1>
    //     } else{
    //         return <LogoCarousel />
    //     }
    // }
    console.log(isMobile)
    return (

        <>
           {
               isMobile ? <LogosMobile />
                        : <LogoCarousel />
           }
        </>
    )

}

