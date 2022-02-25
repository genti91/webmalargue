import React from "react";


import Header from "../components/Header/Header";
import HeroLanding1 from "../components/HeroLanding1";
import SectionIcons from "../components/SectionIcons";
import MainDoor from "../components/MainDoor";
import MainTraffic from "../components/MainTraffic";
import MainTruck from "../components/MainTruck";
import FooterShipments from "../components/FooterShipments";
import FooterPaymentMethods from "../components/FooterPaymentMethods";
import { CardDeck } from "../components/CardDeck/CardDeck";
import { bgHome } from "../assets";



// import { IoHome } from "react-icons/io5";
const Home = () => {
  let icons = [
    { icon: "envios", text: "Hacemos envíos a todo el país." },
    { icon: "atencion", text: "Atención personalizada." },
    { icon: "puerta-puerta", text: "Envíos puerta a puerta." },
    { icon: "seguimiento", text: "Hacé el seguimiento de tus envíos." },
  ];
  return (
    <>
      <Header
        image={bgHome}
        title={[
          "Envía lo que necesites,",
          "Nosotros te lo llevamos. Puerta a puerta, así de simple!",
        ]}
        page={true}
      />
      <CardDeck/>
      <MainTraffic
        button={{ background: "primary", title: "Consultá por tu envío" }}
        background="main-bg-gradient-1"
      />
      <MainTruck button={{ background: "primary", title: "Consultá por tu envío" }} />
      <FooterShipments
        image="segui-tu-envio-red.jpg"
        button={{ background: "primary", title: "Consultá por tu envío" }}
      />
      <FooterPaymentMethods />
      <a
        href="https://wa.me/5491163622778?text=Hola Expreso Malargue, Estoy buscando información sobre encomiendas!"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </>
  );
};
export default Home;
