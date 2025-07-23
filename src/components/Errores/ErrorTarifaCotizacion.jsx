import { Button } from 'react-bootstrap'
import emailjs from 'emailjs-com'

export const ErrorTarifaCotizacion = ({
  email,
  cotizacionId,
  mensajeCristal,
}) => {
    console.log(
        email,
        cotizacionId,
        mensajeCristal)
  const sendEmail = () => {
    emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
      'template_borvbgd',
      {
        email,
        id: cotizacionId,
        descripcion: mensajeCristal,
        titulo: 'ERROR: Tarifa cotización',
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
  }
  return (
    <div className='tw-text-center tw-w-full tw-flex tw-flex-col tw-gap-2 tw-text-[#2F3394] tw-items-center tw-justify-center'>
      <img
        src={`assets/icon-error.png`}
        alt='icon'
        className='tw-h-[48px] tw-w-[48px]'
      />
      <h2 className='tw-text-[#EB1C23] tw-text-[32px] tw-font-bold'>
        Algo salió mal con tu cotización
      </h2>
      <h3 className='tw-text-[#EB1C23] tw-text-[28px] '>
        Contactanos y te ayudaremos a solucionarlo
      </h3>
      <div className='tw-flex tw-flex-col sm:tw-flex-row md:tw-gap-12 tw-gap-3 tw-mb-20 tw-mt-11'>
        <Button
          onClick={() => window.location.reload()}
          className='tw-w-[158px] tw-h-12 p-0 tw-bg-[#6C757D]'
          style={{
            backgroundColor: '#6C757D',
            border: '1px solid #6C757D',
          }}
        >
          Nueva cotización
        </Button>
        <a href='https://wa.me/5491163622778' target='_blank' rel='noreferrer'>
          <Button
            className='tw-w-[158px] tw-h-12 p-0'
            onClick={() => {
              sendEmail()
              console.log('SE EFECUTO SEND MAIL')
            }}
          >
            Contactanos
          </Button>
        </a>
      </div>
    </div>
  )
}
