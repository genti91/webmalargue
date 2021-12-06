const SectionIcons = ({ icons }) => {
  return (
    <div className="container-fluid bg-primary py-5">
      <div className="container">
        <div className="row">
          {icons.map(({icon, text}, index) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 my-3" key={index}>
                <div className="d-flex align-items-center justify-content-start">
                  <img src={`assets/icon-${icon}.png`} alt="icon" />
                  <span className="text-icon">{text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SectionIcons;
