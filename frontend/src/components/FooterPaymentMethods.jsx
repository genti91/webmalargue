const FooterPaymentMethods = () => {
  return (
    <div className="container-fluid footer-border-bottom-blue">
      <div className="section-door">
        <div className="section-footer-container-text">
          <span className="footer-title-payments">
            Hace tus envíos y págalos a través de Mercado Pago
          </span>
        </div>
        <div className="section-door-img">
          <img
            src={`assets/mediosdepago.jpg`}
            alt="medios de pago"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};
export default FooterPaymentMethods;
