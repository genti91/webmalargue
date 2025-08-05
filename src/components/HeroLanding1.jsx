import { WhatsAppChatMainButton } from "./WhatsAppChat/WhatsAppCahtMainButon";
const HeroLanding1 = ({ image, title, page }) => {
  return (
    <div className={`${page ? "wrapper-hero" : "wrapper-hero-2"} bg-primary`}>
      <div
        className="hero-landing-1"
        style={{
          backgroundImage: `url(${image})`,
          height: "55vh",
        }}
      >
        <span className="hero-title-big">{title[1]}</span>
      </div>
      {/* {page ? <Form /> : <FormEmpresas />} */}
      <WhatsAppChatMainButton />
    </div>
  );
};
export default HeroLanding1;
