import HeroLanding1 from "../components/HeroLanding1";
import SectionIcons from "../components/SectionIcons";
import MainDoor from "../components/MainDoor";
import MainTraffic from "../components/MainTraffic";
import MainTruck from "../components/MainTruck";
import FooterShipments from "../components/FooterShipments";
import FooterPaymentMethods from "../components/FooterPaymentMethods";
const Landing_2 = () => {
  return (
    <>
      <HeroLanding1 />
      <SectionIcons />
      <MainDoor button="secondary" />
      <MainTraffic button="secondary" background="main-bg-gradient" />
      <MainTruck button="secondary" />
      <FooterShipments image="segui-tu-envio-blue.jpg" button="secondary" />
      <FooterPaymentMethods />
    </>
  );
};
export default Landing_2;
