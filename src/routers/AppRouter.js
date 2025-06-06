import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { links } from '../components/NavBar/links'
import { NavBar } from '../components/NavBar/NavBar'
import { WhatsAppChat } from '../components/WhatsAppChat/WhatsAppChat'
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
  GeneraEnvio,
  // Landing_2,
  Empresas,
  // LandingEmpresa2,
  ThankYouPage,
  BlogTips,
} from '../pages'
import TagManager from 'react-gtm-module'
import ScrollToTop from './ScrollToTop'
import Envio from '../pages/Envio/Envio'
import FAQPage from '../pages/FAQPage/FAQPage'
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy'
import { GeneraProvider } from '../context/GeneraContext'
import GeneraConfirmacionExito from '../pages/GeneraConfirmacion/GeneraConfirmacionExito'
import GeneraConfirmacionFallo from '../pages/GeneraConfirmacion/GeneraConfirmacionFallo'

const tagManagerArgs = {
  gtmId: 'GTM-KBPBZN4',
}

TagManager.initialize(tagManagerArgs)

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path='/'
          element={[<NavBar />, <Home />, <Footer />, <WhatsAppChat />]}
        />
        <Route
          path={links.servicios.individuos.to}
          element={[
            <NavBar />,
            <IndividuosSrv />,
            <Footer />,
            <WhatsAppChat />,
          ]}
        />
        <Route
          path={links.servicios.empresas.to}
          element={[<NavBar />, <EmpresasSrv />, <Footer />, <WhatsAppChat />]}
        />
        <Route
          path={links.servicios.eCommerce.to}
          element={[<NavBar />, <EComerceSrv />, <Footer />, <WhatsAppChat />]}
        />
        <Route
          path={links.nosotros.to}
          element={[<NavBar />, <Nosotros />, <Footer />, <WhatsAppChat />]}
        />
        <Route
          path={links.cotiza.to}
          element={[<NavBar />, <Cotiza />, <Footer />, <WhatsAppChat />]}
        />
        <Route
          path={links.faq.to}
          element={[<NavBar />, <FAQPage />, <Footer />, <WhatsAppChat />]}
        />
        <Route
          path={links.genera.to}
          element={[<NavBar />, <GeneraProvider><GeneraEnvio /></GeneraProvider>, <Footer />, <WhatsAppChat />]}
        />
        <Route
          path={links.generaExito.to}
          element={[<NavBar />, <GeneraProvider><GeneraConfirmacionExito /></GeneraProvider>, <Footer />, <WhatsAppChat />]}
        />
        <Route
          path={links.generaFallo.to}
          element={[<NavBar />, <GeneraProvider><GeneraConfirmacionFallo /></GeneraProvider>, <Footer />, <WhatsAppChat />]}
        />
        <Route
          path={links.tracking.to}
          element={[<NavBar />, <Tracking />, <Footer />, <WhatsAppChat />]}
        />
        <Route
          path={links.blog.to}
          element={[<NavBar />, <BlogTips />, <Footer />, <WhatsAppChat />]}
        />
        <Route
          path={links.envio.to}
          element={[<NavBar />, <Envio />, <Footer />, <WhatsAppChat />]}
        />
        <Route
          path={links.privacyPolicy.to}
          element={[<NavBar />, <PrivacyPolicy />, <Footer />, <WhatsAppChat />]}
        />
        <Route
          path={links.contacto.to}
          element={[<NavBar />, <Contacto />, <Footer />, <WhatsAppChat />]}
        />
        {/* Anuncios */}
        <Route path='/individuos' element={<Individuos />} />
        {/* <Route path="/landing_2" element={<Landing_2 />} /> */}
        <Route path='/empresas' element={<Empresas />} />
        {/* <Route path="/landing_empresa_2" element={<LandingEmpresa2 />} /> */}
        <Route path='/gracias' element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  )
}
