const MainTraffic = ({ button, background }) => {
  return (
    <div className="container-fluid section-traffic">
      <img src={`assets/trafic.jpg`} alt="trafic" className="main-trafic-img" />
      <div className={`${background}`}>
        <div className="section-trafic-text-container">
          <span className="section-trafic-text-title mb-3">
            Recorremos las rutas del paÍs llevando todos tus envÍos.
          </span>
          <span role="button" className={`btn-pill bg-${button} align-self-start`}>
          Consultá por tu envío
        </span>
        </div>

      </div>
    </div>
  );
};
export default MainTraffic;
