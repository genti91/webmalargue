const ThankYouPage = (props) => {
  return (
    <div
      className="hero-landing-1"
      style={{
        backgroundImage: 'url("assets/repartidor-header.jpg")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex flex-column">
            <img src={`assets/logo.svg`} alt="logo" className="hero-logo" />
            <span className="hero-title-big">
              Gracias por completar el formulario, pronto recibirás una cotización en tu casilla de email
            </span>
          </div>     
        </div>
      </div>
    </div>
  );
};
export default ThankYouPage;
