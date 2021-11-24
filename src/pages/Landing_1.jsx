import HeroLanding1 from "../components/HeroLanding1";
import SectionIcons from "../components/SectionIcons";
import MainDoor from "../components/MainDoor";
import MainTraffic from "../components/MainTraffic";
import MainTruck from "../components/MainTruck";
import FooterShipments from "../components/FooterShipments";
import FooterPaymentMethods from "../components/FooterPaymentMethods";
const Landing_1 = () => {
  let icons = [
    { icon: "envios", text: "Hacemos envíos a todo el país." },
    { icon: "atencion", text: "Atención personalizada." },
    { icon: "puerta-puerta", text: "Envíos puerta a puerta." },
    { icon: "seguimiento", text: "Hacé el seguimiento de tus envíos." },
  ];
  return (
    <>
      <HeroLanding1
        image="assets/repartidor-header.jpg"
        title={[
          "Envía lo que necesites,",
          "Nosotros te lo llevamos. Puerta a puerta, así de simple!",
        ]}
      />
      <SectionIcons icons={icons} />
      <MainDoor
        button={{ background: "primary", title: "Cotizá tu Envío" }}
        title={[
          "Envíos Puerta a Puerta.",
          "y luego tu paquete o encomienda llega a la puerta de la dirección que nos hayas indicado.",
        ]}
        image="repartidor-chica"
      />
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
export default Landing_1;
