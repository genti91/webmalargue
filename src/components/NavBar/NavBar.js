import React from "react"
import { NavLink } from "react-router-dom"
import { Logo } from "../../assets/Logo"
import './NavBar.scss'



export const NavBar = () => {

    const links = [
      {
          to: '/',
          name: 'Home'
      },
      {
          to: '/servicios',
          name: 'Servicios'
      },
      {
          to: '/nosotros',
          name: 'Nosotros'
      },
      {
          to: '/seguimiento',
          name: 'Seguimiento'
      },
      {
          to: '/cotiza',
          name: 'Cotiza'
      },
      {
          to: '/contacto',
          name: 'Contacto'
      },
    ]

  return (
      <nav
        id="NavBarHome"
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            {<Logo  />}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse
                          navbar-collapse
                          flex-end
                          d-flex 
                          justify-content-end
                          " 
                id="navbarNav"
          >
            <ul className="navbar-nav">
            {links.map(({to, name })=> (
              <li
                key={name}
              >
                <NavLink
                  to={to}
                >
                  {name}

                </NavLink>
              </li>

            ))} 
            </ul>
          </div>
        </div>
      </nav>
  )
}
