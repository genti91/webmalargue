import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { links } from '../components/NavBar/links'
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
  Empresas,
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
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <ScrollToTop />
      <Routes>
        <Route
          path='/'
          element={<Layout><Home /></Layout>}
        />
        <Route
          path={links.servicios.individuos.to}
          element={<Layout><IndividuosSrv /></Layout>}
        />
        <Route
          path={links.servicios.empresas.to}
          element={<Layout><EmpresasSrv /></Layout>}
        />
        <Route
          path={links.servicios.eCommerce.to}
          element={<Layout><EComerceSrv /></Layout>}
        />
        <Route
          path={links.nosotros.to}
          element={<Layout><Nosotros /></Layout>}
        />
        <Route
          path={links.cotiza.to}
          element={<Layout><Cotiza /></Layout>}
        />
        <Route
          path={links.faq.to}
          element={<Layout><FAQPage /></Layout>}
        />
        <Route
          path={links.genera.to}
          element={<Layout><GeneraProvider><GeneraEnvio /></GeneraProvider></Layout>}
        />
        <Route
          path={links.generaExito.to}
          element={<Layout><GeneraProvider><GeneraConfirmacionExito /></GeneraProvider></Layout>}
        />
        <Route
          path={links.generaFallo.to}
          element={<Layout><GeneraProvider><GeneraConfirmacionFallo /></GeneraProvider></Layout>}
        />
        <Route
          path={links.tracking.to}
          element={<Layout><Tracking /></Layout>}
        />
        <Route
          path={links.blog.to}
          element={<Layout><BlogTips /></Layout>}
        />
        <Route
          path={links.envio.to}
          element={<Layout><Envio /></Layout>}
        />
        <Route
          path={links.privacyPolicy.to}
          element={<Layout><PrivacyPolicy /></Layout>}
        />
        <Route
          path={links.contacto.to}
          element={<Layout><Contacto /></Layout>}
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
