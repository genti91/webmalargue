import HeroLanding1 from "../components/HeroLanding1";
import SectionIcons from "../components/SectionIcons";
import MainDoor from "../components/MainDoor";
import MainTraffic from "../components/MainTraffic";
import MainTruck from "../components/MainTruck";
import FooterShipments from "../components/FooterShipments";
import FooterPaymentMethods from "../components/FooterPaymentMethods";
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'
const Landing_1 = () => {
  return (
    <>
      <HeroLanding1 />
      <SectionIcons />
      <MainDoor button="primary" />
      <MainTraffic button="primary" background="main-bg-gradient-1" />
      <MainTruck button="primary" />
      <FooterShipments image="segui-tu-envio-red.jpg" button="primary" />
      <FooterPaymentMethods />
      <FloatingWhatsApp phone={+5491132556383} autoOpenTimeout={5000} popupMessage='Hola, ¿cómo podemos ayudarte?'/>
    </>
  );
};
export default Landing_1;
