import HeroLanding2 from "../components/HeroLanding2";
import SectionIcons from "../components/SectionIcons";
import MainDoor from "../components/MainDoor";
import MainTraffic from "../components/MainTraffic";
import MainTruck from "../components/MainTruck";
import FooterShipments from "../components/FooterShipments";
import FooterPaymentMethods from "../components/FooterPaymentMethods";

const Landing_empresa_2 = () => {
  return (
    <>
      <HeroLanding2
        image="assets/header.jpg"
        title={[
          "Pensaste en vender en otras ciudades?",
          "Llevamos tu producto a tus clientes, así de simple!",
        ]}
      />
      <SectionIcons />
      <MainDoor button="secondary" />
      <MainTraffic button="secondary" background="main-bg-gradient" />
      <MainTruck button="secondary" />
      <FooterShipments image="segui-tu-envio-blue.jpg" button="secondary" />
      <FooterPaymentMethods />
      <a
        href="https://wa.me/5491163622778?text=Hola Expreso Malargue, Estoy buscando información sobre encomiendas!"
        class="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>{" "}
    </>
  );
};
export default Landing_empresa_2;
