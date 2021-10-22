const SectionIcons = () => {
  return (
    <div className="container-fluid bg-primary">
      <div className="container">
        <div className="row  p-5">
          <div className="col-3">
            <div className="d-flex align-items-center justify-content-start">
              <img src={`assets/icon-envios.png`} alt="icon" />
              <span className="text-icon">Hacemos envíos a todo el país.</span>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex align-items-center justify-content-start">
              <img src={`assets/icon-atencion.png`} alt="icon" />
              <span className="text-icon">Atención personalizada.</span>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex align-items-center justify-content-start">
              <img src={`assets/icon-puerta-puerta.png`} alt="icon" />
              <span className="text-icon">Envíos puerta a puerta.</span>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex align-items-center justify-content-start">
              <img src={`assets/icon-seguimiento.png`} alt="icon" />
              <span className="text-icon">
                Hacé el seguimiento de tus envíos.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionIcons;
