import React from 'react'
import { isMobile } from "react-device-detect";
import { FooterDesk } from './FooterDesk';

import { FooterMobile } from './FooterMobile';


export const Footer = () => {
  return (
    
    <>
        {
            isMobile    ? <FooterMobile />
                        : <FooterDesk />
        }
    </>
  )
}
