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
        
        
        <span className="hero-title-big">{title[1]}</span>
      </div>
      {page ? <Form /> : <FormEmpresas />}
    </div>
  );
};
export default HeroLanding1;
