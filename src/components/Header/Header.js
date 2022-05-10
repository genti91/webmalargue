import React from 'react'
import './Header.scss'

const Header = ({ image, title, page }) => {
  return (
    <section id='Header'>
      <div
        className='hero-landing-1 '
        style={{
          backgroundImage: `url(${image})`,
          // background: `url(${image})`,
          // background: ` url(${image}) rgba(255, 0, 150, 0.3);`
        }}
      >
        <div className='container'>
          <div className='col-md-7 hero-title-big'>
            <div className='row'>
              <h1>{title[1]}</h1>
            </div>
            <div className='row mt-5'>
              <div className='col-md-4 d-grid'>
                <button className='btn btn-secondary' type='button'>
                  <a href='/cotiza'> Cotizá ahora</a>
                </button>
              </div>
              <div className='col-md-4 d-grid'>
                <button className='btn btn-primary' type='button'>
                  <a href='/genera'>Generá tu retiro</a>
                </button>
              </div>
              <div className='col-md-4 d-grid'>
                <button className='btn btn-primary' type='button'>
                  <a href='/tracking'> Seguí tu envío</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Header
