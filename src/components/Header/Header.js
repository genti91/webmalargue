import React from "react";
import './Header.scss'


const Header = ({ image, title, page }) => {
  return (
    <section
      id="Header"
      className='bg-primary'
    >
      <div
        className="hero-landing-1 "
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="container">
          <div className="col-md-7 hero-title-big"
           
          >

            <div className="row">
              <h1>{title[1]}</h1>
            </div>
            <div className="row mt-5">
              <div className="col-md-4 d-grid">
                <button className="btn btn-secondary" type="button">Cotizá tu envío</button>
              </div>
              <div className="col-md-4 d-grid">
                <button className="btn btn-primary" type="button">Generá tu envío</button>
              </div>
              <div className="col-md-4 d-grid">
                <button className="btn btn-primary" type="button">Seguí tu envío</button>
              </div>

            </div>
          </div>
        </div>
        
        
      </div>
     
    </section>
  );
};
export default Header;
