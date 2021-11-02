import HeroLanding2 from "../components/HeroLanding2";
import SectionIcons from "../components/SectionIcons";
import MainDoor from "../components/MainDoor";
import MainTraffic from "../components/MainTraffic";
import MainTruck from "../components/MainTruck";
import FooterShipments from "../components/FooterShipments";
import FooterPaymentMethods from "../components/FooterPaymentMethods";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'
const Landing_2 = () => {
  return (
    <>
      <HeroLanding2 />
      <SectionIcons />
      <MainDoor button="secondary" />
      <MainTraffic button="secondary" background="main-bg-gradient" />
      <MainTruck button="secondary" />
      <FooterShipments image="segui-tu-envio-blue.jpg" button="secondary" />
      <FooterPaymentMethods />
      <FloatingWhatsApp phone={+5491132556383} autoOpenTimeout={5000} popupMessage='Hola, ¿cómo podemos ayudarte?'/>
    </>
  );
};
export default Landing_2;
