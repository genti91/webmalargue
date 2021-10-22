import SectionIcons from "../components/SectionIcons";
import MainDoor from "../components/MainDoor";
import MainTraffic from "../components/MainTraffic";
import MainTruck from "../components/MainTruck";
import FooterShipments from "../components/FooterShipments";
import FooterPaymentMethods from "../components/FooterPaymentMethods";
const Landing_1 = () => {
  return (
    <>
      <SectionIcons />
      <MainDoor />
      <MainTraffic />
      <MainTruck />
      <FooterShipments image='segui-tu-envio-red.jpg' button='primary'/>
      <FooterPaymentMethods />
    </>
  );
};
export default Landing_1;
