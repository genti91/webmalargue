import HeroLanding1 from "../components/HeroLanding1";
import SectionIcons from "../components/SectionIcons";
import MainDoor from "../components/MainDoor";
import MainTraffic from "../components/MainTraffic";
import MainTruck from "../components/MainTruck";
import FooterShipments from "../components/FooterShipments";
import FooterPaymentMethods from "../components/FooterPaymentMethods";
const Landing_empresa_1 = () => {
  return (
    <>
      <HeroLanding1 />
      <SectionIcons />
      <MainDoor button="primary" />
      <MainTraffic button="primary" background="main-bg-gradient-1" />
      <MainTruck button="primary" />
      <FooterShipments image="segui-tu-envio-red.jpg" button="primary" />
      <FooterPaymentMethods />
      <a
        href="https://wa.me/5491163622778?text=Hola Expreso Malargue, Estoy buscando información sobre encomiendas!"
        class="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </>
  );
};
export default Landing_empresa_1;
