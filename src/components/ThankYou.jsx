import { useSearchParams } from "react-router-dom"

const paragraphByType = {
  //cotizacion: 'Muchas gracias por su contacto.  Estaremos enviando la cotización a la brevedad',
  cotizacion: '',
  retiro: 'Gracias por solicitar el retiro. ¡Estaremos coordinando el mismo a la brevedad!'
}

const ThankYouPage = (props) => {
  const [searchParams] = useSearchParams();
  return (
    <div
      className='hero-landing-1'
      style={{
        background: '#2f3394',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12 d-flex flex-column'>
            <img src={`assets/logo.svg`} alt='logo' className='hero-logo' />
            <span
              className='hero-title-big'
              style={{ fontSize: '48px', lineHeight: '1.2em' }}
            >
              {paragraphByType[searchParams.get('type')]}
              {searchParams.get('type') === 'cotizacion' ? searchParams.get('msg') : null}
              {/* Gracias por realizar una cotización. Recibirás una cotización
              dentro de las próximas 24hs hábiles en tu casilla de correo
              electrónico */}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ThankYouPage
