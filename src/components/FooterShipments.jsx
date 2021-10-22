const FooterShipments = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        "background-image": "url('/assets/segui-tu-envio-blue.jpg')",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        width: "100%",
        "min-height": "433px",
      }}
    >
      <div className="footer-title">Seguí tu envio</div>
      <div className="col-4 my-4">
        <div className="footer-subtitle">
          Vas a poder hacer el seguimiento de tu envío en todo momento para tu
          mayor tranquilidad.
        </div>
      </div>
      <div className="col-6">
        <div class="d-flex align-items-center justify-content-center">
          <button type="button" class="step-button">
            <span>
              <i class="fa fa-circle text-secondary"></i>
            </span>
          </button>
          <div class="bs-stepper-line"></div>
          <button type="button" class="step-button">
            <span>
              <i class="fa fa-circle text-secondary"></i>
            </span>
          </button>
          <div class="bs-stepper-line"></div>
          <button type="button" class="step-button">
            <span>
              <i class="fa fa-circle text-secondary"></i>
            </span>
          </button>
          <div class="bs-stepper-line"></div>
          <button type="button" class="step-button">
            <span>
              <i class="fa fa-circle text-primary"></i>
            </span>
          </button>
        </div>
      </div>
      <span role="button" class="btn-pill bg-secondary">
          Consultá por tu envío
        </span>
    </div>
  );
};
export default FooterShipments;
