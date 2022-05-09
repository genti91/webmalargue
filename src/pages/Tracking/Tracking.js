import React, { useEffect, useState } from "react";
import { nosotrosIMG, remitoIMG, seguimientoIMG } from "../../assets";
import { BannerHeader } from "../../components/BannerHeader/BannerHeader";
import Spinner from "react-bootstrap/Spinner";
import "./Tracking.scss";
import axios from "axios";
import { Bullet } from "./Bullet";
// import { GuiaNoEncontrada } from "./GuiaNoEncontrada";
import { SearchBox } from "./SearchBox";

const Tracking = () => {
  // const [loginToken, setLoginToken] = useState({});
  const [trackingData, setTrackingData] = useState([]);
  const [trackingID, setTrackingID] = useState("");
  const [loading, setLoading] = useState(false);

  // const Spinner = () => <div className="loader"></div>;

  // const data = `id=${trackingID}`;
  // const data = "id=0002-001500061757-S";
  var data = {
    documento: 19412,
    origen: "t",
  };
  var config = {
    method: "get",
    url: "https://www.softwarecristal.com/web/api/public/?o=getTracking&token=052bf68381ca31a797f2c0dbe8fdd67b6bd7a3e81215bb0adbb3e9ddcb28c94f",
    headers: {
      "Content-Type": "application/json",
      Cookie: "cristalWebDigitalExpress=mcjf346unv9f7pfmrp93k54hr7",
    },
    data: data,
  };

  useEffect(() => {
    setLoading(true);
    axios(config)
      .then((response) => {
        setTrackingData(response.data.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [trackingID]);

  // console.log(trackingData);

  return (
    <section id="Tracking">
      <BannerHeader
        lineaPrincipal="Seguimiento"
        lineaSecundaria="" // Si no hay linea enviar ''
        image={seguimientoIMG}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="heroTitle">
              En tu remito encontrarás el número de seguimiento
            </h1>
            <img className="img-fluid mt-4" src={remitoIMG} alt="remito" />
            <div>
              <h3>Ingresá el número de seguimiento </h3>
            </div>

            <SearchBox
              setTrackingId={setTrackingID}
              trackingSteps={trackingData}
              trackingInput={trackingID}
            />
            {/* <iframe
              src="https://www.softwarecristal.com.ar/web/tracking.php?empresa=malargue"
              title="Consulta ON LINE de carga"
              width="100%"
              height="500px"
            ></iframe> */}
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <div>
                {
                  trackingData.length !== 0 || trackingID === ""
                    ? trackingData.map(
                        ({ des, fecha, cod, guia, nRetiro, index }) => (
                          <div
                            key={cod}
                            className={"row align-items-center step"}
                            style={{}}
                          >
                            <Bullet fecha={fecha} order={index} />

                            <div className={"status col-10 d-flex flex-column"}>
                              <div className="title">{des}</div>
                              <div className="data">{fecha}</div>
                            </div>
                          </div>
                        )
                      )
                    : "Guia no encontrada"
                  // <GuiaNoEncontrada trackingSteps={trackingData} trackingInput={trackingID} />
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
