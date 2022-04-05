import React from 'react'

import {whatsAppCTA} from '../../assets'
import './WhatsAppChat.scss'


export const WhatsAppChat = () => {
  return (
    <div className='row justify-content-end'>
        <a
        href="https://wa.me/5491163622778?text=Hola Expreso Malargue, Estoy buscando información sobre encomiendas!"
            className="whatsapp"
            target="_blank"
            rel="noreferrer"
        >
            {" "}
            <img
                alt='WhatsApp'
                src={whatsAppCTA}
            />
        </a>

    </div>
  )
}
