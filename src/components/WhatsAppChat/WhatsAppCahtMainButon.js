import React from "react";

import { whatsAppCTA } from "../../assets";
import "./WhatsAppCahtMainButon.scss";

export const WhatsAppChatMainButton = () => {
  return (
    <div className="row justify-content-center" id="whatsAppMain">
      <div className="col-md-8" id="whatsAppMain">
        <a
          href="https://wa.me/5491163622778?text=Hola Expreso Malargue, Estoy buscando información sobre encomiendas!"
          className="whatsappMain"
          class="whatsappMain"
          id="whatsAppMain"
          target="_blank"
          rel="noreferrer"
        >
          <div className="col-12 row justify-content-center align-items-center">
            <div className="col-3 whatsapp-icon">
              <img alt="WhatsAppMain" src={whatsAppCTA} />
            </div>
            <div className="col-9">
              <h1>Cotiza tu envío ahora mismo!</h1>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
