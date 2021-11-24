import HeroLanding1 from "../components/HeroLanding1";
import SectionIcons from "../components/SectionIcons";
import MainDoor from "../components/MainDoor";
import MainTraffic from "../components/MainTraffic";
import MainTruck from "../components/MainTruck";
import FooterShipments from "../components/FooterShipments";
import FooterPaymentMethods from "../components/FooterPaymentMethods";
const Landing_empresa_1 = () => {
  let icons = [
    { icon: "envios", text: "Hacemos envíos a todo el país." },
    { icon: "atencion", text: "Atención personalizada." },
    { icon: "camion", text: "Envíos punto a punto." },
    { icon: "seguimiento", text: "Hacé el seguimiento de tus envíos." },
  ];
  return (
    <>
      <HeroLanding1
        image="assets/header.jpg"
        title={[
          "Pensaste en vender en otras ciudades?",
          "Llevamos tu producto a tus clientes, así de simple!",
        ]}
      />
      <SectionIcons icons={icons} />
      <MainDoor
        button={{
          background: "primary",
          title: "Consultá por acuerdos comerciales",
        }}
        title={[
          "Envíos punto a punto.",
          "y luego la carga llega directo al punto que nos hayas indicado.",
        ]}
        image="Envios"
      />
      <MainTraffic button="primary" background="main-bg-gradient-1" />
      <MainTruck button="primary" />
      <FooterShipments image="segui-tu-envio-red.jpg" button="primary" />
      <FooterPaymentMethods />
      <a
        href="https://wa.me/5491163622778?text=Hola Expreso Malargue, Estoy buscando información sobre servicios de encomiendas para empresas!"
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
