import Form from "./Form";
const HeroLanding1 = ({image,title}) => {
  return (
    <div className="wrapper-hero bg-primary">
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
      <Form/>
    </div>
  );
};
export default HeroLanding1;
