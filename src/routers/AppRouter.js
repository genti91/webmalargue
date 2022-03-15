import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/NavBar/NavBar";

import {
  Home,
  Servicios,
  Nosotros,
  Seguimiento,
  Cotiza,
  Contacto,
  Tracking,
  Landing_1,
  Landing_2,
  Landing_empresa_1,
  LandingEmpresa2,
  ThankYouPage,
} from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<NavBar />, <Home />, <Footer />]} />
        <Route
          path="/servicios"
          element={[<NavBar />, <Servicios />, <Footer />]}
        />
        <Route
          path="/nosotros"
          element={[<NavBar />, <Nosotros />, <Footer />]}
        />
        <Route
          path="/seguimiento"
          element={[<NavBar />, <Seguimiento />, <Footer />]}
        />
        <Route path="/cotiza" element={[<NavBar />, <Cotiza />, <Footer />]} />
        <Route
          path="/tracking"
          element={[<NavBar />, <Tracking />, <Footer />]}
        />
        <Route
          path="/contacto"
          element={[<NavBar />, <Contacto />, <Footer />]}
        />
        <Route path="/landing_1" element={<Landing_1 />} />
        <Route path="/landing_2" element={<Landing_2 />} />
        <Route path="/landing_empresa" element={<Landing_empresa_1 />} />
        <Route path="/landing_empresa_2" element={<LandingEmpresa2 />} />
        <Route path="/gracias" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
};
