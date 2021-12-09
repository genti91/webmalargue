const MainDoor = ({ button, title, image }) => {
  return (
    <div className="container-fluid">
      <div className="section-door">
        <div className="section-door-container-text">
          <span className="section-door-text-title">{title[0]}</span>
          <span className="section-door-container-flex-text">
            <span className="section-door-number">1</span>
            <span className="section-door-text-paragraph">
              Te contactás con nosotros,
            </span>
          </span>
          <span className="section-door-container-flex-text">
            <span className="section-door-number">2</span>
            <span className="section-door-text-paragraph">
              cotizamos tu envió sin cargo,
            </span>
          </span>
          <span className="section-door-container-flex-text">
            <span className="section-door-number">3</span>
            <span className="section-door-text-paragraph">
              coordinamos el retiro del mismo con vos,
            </span>
          </span>
          <span className="section-door-container-flex-text">
            <span className="section-door-number">4</span>
            <span className="section-door-text-paragraph">
              lo pasamos a buscar para ahorrarte tiempo,
            </span>
          </span>
          <span className="section-door-container-flex-text mb-5">
            <span className="section-door-number">5</span>
            <span className="section-door-text-paragraph">{title[1]}</span>
          </span>
          <span
            role="button"
            className={`btn-pill bg-${button.background}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            {button.title}
          </span>
        </div>
        <div
          className="section-door-container-img img-fluid"
          style={{
            backgroundImage: `url(assets/${image}.jpg)`,
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
            minheight: '500px'
          }}
        ></div>
      </div>
    </div>
  );
};
export default MainDoor;
