import HeroLanding2 from "../components/HeroLanding2";
import SectionIcons from "../components/SectionIcons";
import MainDoor from "../components/MainDoor";
import MainTraffic from "../components/MainTraffic";
import MainTruck from "../components/MainTruck";
import FooterShipments from "../components/FooterShipments";
import FooterPaymentMethods from "../components/FooterPaymentMethods";

const LandingEmpresa2 = () => {
  let icons = [
    { icon: "envios", text: "Hacemos envíos a todo el país." },
    { icon: "atencion", text: "Atención personalizada." },
    { icon: "camion", text: "Envíos punto a punto." },
    { icon: "seguimiento", text: "Hacé el seguimiento de tus envíos." },
  ];
  return (
    <>
      <HeroLanding2
        image="assets/header.jpg"
        title={[
          "Pensaste en vender en otras ciudades?",
          "Llevamos tu producto a tus clientes, así de simple!",
        ]}
        page={false}
      />
      <SectionIcons icons={icons} />
      <MainDoor
        button={{
          background: "secondary",
          title: "Consultá por acuerdos comerciales",
        }}
        title={[
          "Envíos punto a punto.",
          "y luego la carga llega directo al punto que nos hayas indicado.",
        ]}
        image="Envios"
      />
      <MainTraffic
        button={{
          background: "secondary",
          title: "Consultá por acuerdos comerciales",
        }}
        background="main-bg-gradient"
      />
      <MainTruck
        button={{
          background: "secondary",
          title: "Consultá por acuerdos comerciales",
        }}
      />
      <FooterShipments
        image="segui-tu-envio-blue.jpg"
        button={{
          background: "secondary",
          title: "Consultá por acuerdos comerciales",
        }}
      />
      <FooterPaymentMethods />
      <a
        href="https://wa.me/5491163622778?text=Hola Expreso Malargue, Estoy buscando información sobre servicios de encomiendas para empresas!"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >       
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </>
  );
};
export default LandingEmpresa2;
