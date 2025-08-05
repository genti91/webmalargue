import { useState } from "react";
import { Container, Navbar, NavDropdown, Nav, NavItem } from "react-bootstrap";
import { Logo } from "../../assets/Logo";
import { links } from "./links";
import "./NavBar.scss";
import { ProtectedNavLink } from "./NavLink";
import { ProtectedBrand } from "./ProtectedBrand";
import { ProtectedDropdownItem } from "./ProtectedDropdownItem";


export const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  const [expanded, setExpanded] = useState(true);


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
        <ProtectedBrand> {<Logo />} </ProtectedBrand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav

            id="menuNavBar"
            className="align-items-center menuBar01"
          >
            <NavItem>
              <ProtectedNavLink
                to={links.home.to}

              // onClick={() => setExpand(true)}
              >
                {links.home.name}
              </ProtectedNavLink>
            </NavItem>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={links.servicios.name}
              menuVariant="dark"
            >
              <ProtectedDropdownItem to={links.servicios.individuos.to}>
                {links.servicios.individuos.name}
              </ProtectedDropdownItem>
              <ProtectedDropdownItem to={links.servicios.empresas.to}>
                {links.servicios.empresas.name}
              </ProtectedDropdownItem>
              <ProtectedDropdownItem to={links.servicios.eCommerce.to}>
                {links.servicios.eCommerce.name}
              </ProtectedDropdownItem>
            </NavDropdown>
            <NavItem>
              <ProtectedNavLink
                to={links.nosotros.to}
              >
                {links.nosotros.name}
              </ProtectedNavLink>
            </NavItem>
            <NavItem>
              <ProtectedNavLink
                to={links.tracking.to}
              >
                {links.tracking.name}
              </ProtectedNavLink>
            </NavItem>
            <NavItem>
              <ProtectedNavLink
                to={links.faq.to}
              >
                {links.faq.name}
              </ProtectedNavLink>
            </NavItem>
            <NavItem>
              <ProtectedNavLink
                to={links.cotiza.to}
              >
                {links.cotiza.name}
              </ProtectedNavLink>
            </NavItem>
            {/* <NavItem>
                <ProtectedNavLink
                    to={links.blog.to}
                >
                    {links.blog.name}
                </ProtectedNavLink>
              </NavItem>
              <NavItem>
                <ProtectedNavLink
                    to={links.envio.to}
                >
                    {links.envio.name}
                </ProtectedNavLink>
              </NavItem> */}
            <NavItem>
              <ProtectedNavLink
                to={links.contacto.to}
              >
                {links.contacto.name}
              </ProtectedNavLink>
            </NavItem>
            <NavItem>
              <a
                href='tel:08101122020'
              >
                0810-112-2020
              </a>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
