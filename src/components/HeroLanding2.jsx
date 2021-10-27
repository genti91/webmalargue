import Form from "./Form";
const HeroLanding1 = (props) => {
  return (
    <div
      className="hero-landing-1"
      style={{
        backgroundImage: 'url("assets/repartidor-header.jpg")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`assets/logo.svg`} alt="logo" className="hero-logo" />
            <span className="hero-title-small">Envía lo que necesites,</span>
            <span className="hero-title-big">
              Nosotros te lo llevamos. Puerta a puerta, así de simple!
            </span>
          </div>
          <div className="col-md-6">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroLanding1;
