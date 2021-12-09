import Form from "./Form";
import FormEmpresas from "./FormEmpresas";
const HeroLanding1 = ({ image, title, page }) => {
  return (
    <div className={`${page?'wrapper-hero':'wrapper-hero-2' } bg-primary`}>
      <div
        className="hero-landing-1"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <img src={`assets/logo.svg`} alt="logo" className="hero-logo" />
        <span className="hero-title-small">{title[0]}</span>
        <span className="hero-title-big">{title[1]}</span>
      </div>
      {page ? <Form /> : <FormEmpresas />}
    </div>
  );
};
export default HeroLanding1;
