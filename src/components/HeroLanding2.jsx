import Form2 from "./Form2";
const HeroLanding2 = ({ image, title }) => {
  return (
    <div
      className="hero-landing-1"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column">
            <img src={`assets/logo.svg`} alt="logo" className="hero-logo" />
            <span className="hero-title-small">{title[0]}</span>
            <span className="hero-title-big">{title[1]}</span>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Form2 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroLanding2;
