const FooterShipments = ({image, button}) => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        "backgroundImage": `url('/assets/${image}')`,
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        width: "100%",
        "minHeight": "433px",
      }}
    >
      <div className="footer-title">Seguí tu envio</div>
      <div className="col-8 col-md-4 my-4">
        <div className="footer-subtitle">
          Vas a poder hacer el seguimiento de tu envío en todo momento para tu
          mayor tranquilidad.
        </div>
      </div>
      <div className="col-10 col-md-5">
        <div className="d-flex align-items-center justify-content-center">
          <button type="button" className="step-button">
            <span>
              <i className="fa fa-circle text-secondary"></i>
            </span>
          </button>
          <div className="bs-stepper-line"></div>
          <button type="button" className="step-button">
            <span>
              <i className="fa fa-circle text-secondary"></i>
            </span>
          </button>
          <div className="bs-stepper-line"></div>
          <button type="button" className="step-button">
            <span>
              <i className="fa fa-circle text-secondary"></i>
            </span>
          </button>
          <div className="bs-stepper-line"></div>
          <button type="button" className="step-button">
            <span>
              <i className="fa fa-circle text-primary"></i>
            </span>
          </button>
        </div>
      </div>
      <span role="button" className={`btn-pill bg-${button.background}`}>
      {button.title}
        </span>
    </div>
  );
};
export default FooterShipments;
