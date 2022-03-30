import React, { useEffect, useState } from "react";
import { nosotrosIMG } from "../../assets";
import { BannerHeader } from "../../components/BannerHeader/BannerHeader";

import "./Tracking.scss";
import axios from "axios";
import { Bullet } from "./Bullet";
// import { GuiaNoEncontrada } from "./GuiaNoEncontrada";
import { SearchBox } from "./SearchBox";


const Tracking = () => {
  // const [loginToken, setLoginToken] = useState({});
  const [trackingData, setTrackingData] = useState([]);
  const [trackingID, setTrackingID] = useState("");

  const data = `id=${trackingID}` ;
  // const data = "id=0002-001500061757-S";
 
  
  useEffect(() => {

      var data2 = JSON.stringify({
        u: "malfredo",
        p: "123456",
      });

      var loginConfig = {
        method: "post",
        url: "https://www.softwarecristal.com/web/api/",
        headers: {
          Authorization: "d4fda7da-acfb-40b0-89ec-9e2b2898c2f2",
          "Content-Type": "application/json",
          Accept: "application/json",
          Cookie: "cristalWebDigitalExpress=mcjf346unv9f7pfmrp93k54hr7",
        },
        data: data2,
      };

      axios(loginConfig)
        .then(function (response) {
          const config = {
            method: "post",
            url: `https://www.softwarecristal.com/web/api/?o=tracking&token=${response.data.data[0].token}`,
            headers: {
              Authorization:  "Bearer d4fda7da-acfb-40b0-89ec-9e2b2898c2f2",
                              "Content-Type": "application/x-www-form-urlencoded",
              Accept: "application/json",
              Cookie: "cristalWebDigitalExpress=mcjf346unv9f7pfmrp93k54hr7",
            },
            data: `${data}`,
          };

          axios(config)
            .then(function (response) {
              setTrackingData(response.data.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch(function (error) {
          console.log(error);
        });
        
   
    }, [trackingID]);

    console.log(trackingData)

  return (
    <section id="Tracking">
      <BannerHeader
        lineaPrincipal="Seguimiento"
        lineaSecundaria="" // Si no hay linea enviar ''
        image={nosotrosIMG}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">

            <div><h3>Ingresá el número de seguimiento </h3></div>


            <SearchBox setTrackingId={ setTrackingID } trackingSteps={trackingData} trackingInput={trackingID} />


            <div>


              {
                  trackingData.length !== 0 || trackingID == '' ? (
                    trackingData.map(({des, fecha, cod, guia, nRetiro })=> 
                      <div
                        key={cod}
                        className={'row align-items-center step'}
                        style={{
                        }}
                      >
                        <Bullet fecha/>

                        <div 
                          className={'status col-10 d-flex flex-column'}
                        >
                              <div
                                className="title"
                              >
                                {des}
                              </div>                 
                              <div
                                className="data"
                              >
                                {fecha}
                              </div>                 
                        </div>

                      </div>)
                  ) :(
                    'Guia no encontrada'
                    // <GuiaNoEncontrada trackingSteps={trackingData} trackingInput={trackingID} />
                  )
              }
              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
