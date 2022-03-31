import React, { useState } from "react";
import { Container, Navbar, NavbarBrand, NavDropdown, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/Logo";
import "./NavBar.scss";



export const NavBar = () => {
  const [navBar, setNavBar] = useState(false);

  const links ={
    home:{
      to: "/",
      name: "Home",
    },
    servicios:{
      name:"Servicios",
      individuos:{
        to: "/individuosserv",
        name: "Individuos",
      },
      empresas:{
        to: "/empresasserev",
        name: "Empresas",
      },
      eCommerce:{
        to: "/ecommerceserv",
        name: "E-Commerce",
      },
    },
    nosotros:{
      to: "/nosotros",
      name: "Nosotros",
    },
    tracking:{
      to: "/tracking",
      name: "Seguimiento",
    },
    cotiza:{
      to: "/cotiza",
      name: "Cotiza",
    },
    contacto:{
      to: "/contacto",
      name: "Contacto",
    },
    
  }


  const changeBacground = () => {
    //https://www.youtube.com/watch?v=JMsNslI8KoY
    if (window.scrollY >= 110) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBacground);

  return (
    
    <Navbar
      variant="dark"
      id="NavBarHome"
      className={
        navBar
          ? "navbar navbar-expand-lg navbar-light bg-light fixed-top activeNav"
          : "navbar navbar-expand-lg navbar-light bg-light fixed-top"
      }
    >
      <Container>
        <div
        className=" ">
          <a className="navbar-brand" href="/">
            {<Logo />}
          </a>
        </div>
        <Navbar.Toggle 
         
          aria-controls="navbar-dark-example" 
        />
          <Navbar.Collapse id="navbar-dark-example"
            className="d-flex justify-content-end "
          >
            <Nav
              className="d-flex align-items-center "
            >
              <NavItem>
                <NavLink
                    to={links.home.to}
                >
                    {links.home.name}
                </NavLink>
              </NavItem>
              <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={links.servicios.name}
                    menuVariant="dark"
                  >
                    <NavDropdown.Item>
                      <NavLink
                        to={links.servicios.individuos.to}
                      >
                        {links.servicios.individuos.name}
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <NavLink
                        to={links.servicios.empresas.to}
                      >
                        {links.servicios.empresas.name}
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <NavLink
                        to={links.servicios.eCommerce.to}
                      >
                        {links.servicios.eCommerce.name}
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
              <NavItem>
                <NavLink
                    to={links.nosotros.to}
                >
                    {links.nosotros.name}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                    to={links.tracking.to}
                >
                    {links.tracking.name}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                    to={links.cotiza.to}
                >
                    {links.cotiza.name}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                    to={links.contacto.to}
                >
                    {links.contacto.name}
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
