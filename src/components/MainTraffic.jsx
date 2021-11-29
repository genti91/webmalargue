const MainTraffic = ({ button, background }) => {
  return (
    <div className="container-fluid section-traffic">
      <img src={`assets/trafic.jpg`} alt="trafic" className="main-trafic-img" />
      <div className={`${background}`}>
        <div className="section-trafic-text-container">
          <span className="section-trafic-text-title mb-3">
            Recorremos las rutas del país llevando todos tus envíos.
          </span>
          <span
            role="button"
            className={`btn-pill bg-${button.background}`}
            onClick={()=> window.scrollTo(0, 0)}
          >
            {button.title}
          </span>
        </div>
      </div>
    </div>
  );
};
export default MainTraffic;
