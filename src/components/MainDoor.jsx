const MainDoor = ({button}) => {
    return (
      <div className="container-fluid">
        <div className="section-door">
          <div className="section-door-container-text">
            <span className="section-door-text-title">Envíos Puerta a Puerta.</span>
            <span className="section-door-container-flex-text">
                <span className="section-door-number">1</span>
                <span className="section-door-text-paragraph">Te contactás con nosotros,</span>
            </span>
            <span className="section-door-container-flex-text">
                <span className="section-door-number">2</span>
                <span className="section-door-text-paragraph">cotizamos tu envió sin cargo,</span>
            </span>
            <span className="section-door-container-flex-text">
                <span className="section-door-number">3</span>
                <span className="section-door-text-paragraph">coordinamos el retiro del mismo con vos,</span>
            </span>
            <span className="section-door-container-flex-text">
                <span className="section-door-number">4</span>
                <span className="section-door-text-paragraph">lo pasamos a buscar para ahorrarte tiempo,</span>
            </span>
            <span className="section-door-container-flex-text mb-5">
                <span className="section-door-number">5</span>
                <span className="section-door-text-paragraph">y luego tu paquete o encomienda llega a la puerta de la dirección que nos hayas indicado.</span>
            </span>
            <span role="button" className={`btn-pill bg-${button}`}>Consultá por tu envío</span>
          </div>
          <div className="section-door-img">
            <img src={`assets/repartidor-chica.jpg`} alt="repartidor-chica" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  };
  export default MainDoor