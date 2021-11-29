const MainTruck = ({ button }) => {
  return (
    <div className="container-fluid">
      <div className="section-door">
        <div className="section-truck-container-text my-auto">
          <span className="section-truck-text mb-5">
            Contamos con más de{" "}
            <span className="section-truck-text-bold mb-5">
              75 años de trayectoria
            </span>
            , destacándonos por la seguridad y calidad del servicio.
          </span>
          <span
            role="button"
            className={`btn-pill bg-${button.background} d-inline-block align-self-start`}
            onClick={()=> window.scrollTo(0, 0)}
          >
            {button.title}
          </span>
        </div>
        <div
          class="section-door-container-img img-fluid"
          style={{
            backgroundImage: `url(assets/camion.jpg)`,
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </div>
  );
};
export default MainTruck;
