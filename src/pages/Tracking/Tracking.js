import React, { useEffect, useState } from "react";
import { contactoIMG } from "../../assets";
import { EmailIcon } from "../../assets/EmailIcon";
import { WhatsAppIcon } from "../../assets/WhatsAppIcon";
import { BannerHeader } from "../../components/BannerHeader/BannerHeader";
import siteData from "../../assets/data";

import "./Tracking.scss";
import { IgIcon } from "../../assets/IgIcon";
import { FaIcon } from "../../assets/FaIcon";
import { Sucursales } from "../../components/Sucursales/Sucursales";
import axios from "axios";

const Tracking = () => {
  const { phone, adress, social, email } = siteData;
  const [loginToken, setLoginToken] = useState({});
  const [trackingData, setTrackingData] = useState({});
  const [trackingID, setTrackingID] = useState("");

  const iconSize = "42";
  const iconColor = "#EB1C23";

  const data = "id=0002-001500061757-S";

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
            Authorization: "Bearer d4fda7da-acfb-40b0-89ec-9e2b2898c2f2",
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
  }, []);

  console.log(trackingData);

  return (
    <section id="Tracking">
      <BannerHeader
        lineaPrincipal="Tracking"
        lineaSecundaria="" // Si no hay linea enviar ''
        image={contactoIMG}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Envianos tu consulta</h2>
            <form action={setTrackingID}>
              <div>
                <label for="uname">Elige un nombre de usuario: </label>
                <input type="text" id="uname" name="name" />
              </div>
              <div>
                <button>Enviar</button>
              </div>
            </form>
            <div>
              {trackingData &&
                trackingData.map((dat) => (
                  <p>
                    {dat.des} {dat.fecha}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
