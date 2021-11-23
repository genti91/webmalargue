import Form2 from "./Form2";
const HeroLanding2 = (props) => {
  return (
    <div
      className="hero-landing-1"
      style={{
        backgroundImage: 'url("assets/repartidor-header.jpg")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column">
            <img src={`assets/logo.svg`} alt="logo" className="hero-logo" />
            <span className="hero-title-small">Envía lo que necesites,</span>
            <span className="hero-title-big">
              Nosotros te lo llevamos. Puerta a puerta, así de simple!
            </span>
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
