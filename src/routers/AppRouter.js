import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { links } from "../components/NavBar/links";
import { NavBar } from "../components/NavBar/NavBar";



import {
  Home,
  IndividuosSrv,
  EmpresasSrv,
  EComerceSrv,
  Nosotros,
  Cotiza,
  Contacto,
  Tracking,
  Individuos,
  // Landing_2,
  Empresas,
  // LandingEmpresa2,
  ThankYouPage,
} from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<NavBar />, <Home />, <Footer />]} />
        <Route
          path={links.servicios.individuos.to}
          element={[<NavBar />, <IndividuosSrv />, <Footer />]}
        />
        <Route
          path={links.servicios.empresas.to}
          element={[<NavBar />, <EmpresasSrv />, <Footer />]}
        />
        <Route
          path={links.servicios.eCommerce.to}
          element={[<NavBar />, <EComerceSrv/>, <Footer />]}
        />
        <Route
          path={links.nosotros.to}
          element={[<NavBar />, <Nosotros />, <Footer />]}
        />
        {/* <Route
          path="/seguimiento"
          element={[<NavBar />, <Seguimiento />, <Footer />]}
        /> */}
        <Route 
          path={links.cotiza.to}
          element={[<NavBar />, <Cotiza />, <Footer />]} />
        <Route
          path={links.tracking.to}
          element={[<NavBar />, <Tracking />, <Footer />]}
        />
        <Route
          path={links.contacto.to}
          element={[<NavBar />, <Contacto />, <Footer />]}
        />
        {/* Anuncios */}
        <Route path="/individuos" element={<Individuos />} />
        {/* <Route path="/landing_2" element={<Landing_2 />} /> */}
        <Route path="/empresas" element={<Empresas />} />
        {/* <Route path="/landing_empresa_2" element={<LandingEmpresa2 />} /> */}
        <Route path="/gracias" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
};
