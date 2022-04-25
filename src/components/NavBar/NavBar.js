import React, { useState } from "react";
import { Container, Navbar, NavbarBrand, NavDropdown, Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/Logo";
import { links } from "./links";
import "./NavBar.scss";



export const NavBar = () => {
  const [navBar, setNavBar] = useState(false);



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
      expand="lg"
      variant="dark"
      id="NavBarHome"
      className={
        navBar
          ? "navbar navbar-expand-lg navbar-light bg-light fixed-top activeNav"
          : "navbar navbar-expand-lg navbar-light bg-light fixed-top"
      }
    >
      <Container>
        <Navbar.Brand href="/"> {<Logo />} </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav
              id="menuNavBar"
              className="align-items-center menuBar01"
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
                    <NavDropdown.Item
                        href={links.servicios.individuos.to}
                    >
                        {links.servicios.individuos.name}
                      
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href={links.servicios.empresas.to}
                      >
                        {links.servicios.empresas.name}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href={links.servicios.eCommerce.to}
                      >
                        {links.servicios.eCommerce.name}
                    </NavDropdown.Item>
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
              {/* <NavItem>
                <NavLink
                    to={links.blog.to}
                >
                    {links.blog.name}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                    to={links.envio.to}
                >
                    {links.envio.name}
                </NavLink>
              </NavItem> */}
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
