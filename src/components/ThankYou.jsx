const ThankYouPage = (props) => {
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
              Gracias por completar el formulario, pronto recibirás una
              cotización en tu casilla de email
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ThankYouPage
