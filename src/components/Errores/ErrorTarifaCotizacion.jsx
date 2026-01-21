import { Button } from 'react-bootstrap'
import emailjs from 'emailjs-com'
import { Link } from 'react-router-dom'

export const ErrorTarifaCotizacion = ({
  email,
  cotizacionId,
  mensajeCristal,
  datosObservacion,
  redirectToCotiza = false,
}) => {
  const sendEmail = () => {
    emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
      'template_borvbgd',
      {
        email,
        id: !cotizacionId ? '-' : cotizacionId,
        descripcion: JSON.stringify(mensajeCristal),
        titulo: 'ERROR: Tarifa cotización',
        datosObservacion: formatDatosObservacion(datosObservacion)
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
        {redirectToCotiza ? 
          <Link to={`/cotiza`}>
            <Button
              className='tw-w-[158px] tw-h-12 p-0 tw-bg-[#6C757D]'
              style={{
                backgroundColor: '#6C757D',
                border: '1px solid #6C757D',
              }}
            >
              Nueva cotización
            </Button>
          </Link>
          :
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
        }
        <a href='https://wa.me/5491163622778' target='_blank' rel='noreferrer'>
          <Button
            className='tw-w-[158px] tw-h-12 p-0'
            onClick={() => {
              sendEmail()
            }}
          >
            Contactanos
          </Button>
        </a>
      </div>
    </div>
  )
}

const formatDatosObservacion = (obs) => {

  const listaBultos = obs.arrayBultos.map((bulto, index) => {
    const isLastBulto = index === obs.arrayBultos.length - 1;
    return `<li dir="ltr" aria-level="3">
    <p dir="ltr" role="presentation">cantidad​ de Bultos:​ ${bulto.cantidadBultos}</p>
    </li>
    <li dir="ltr" aria-level="3">
    <p dir="ltr" role="presentation">peso:​ ${bulto.peso}​ kg</p>
    </li>
    <li dir="ltr" aria-level="3">
    <p dir="ltr" role="presentation">alto:​ ${bulto.alto}​ cm</p>
    </li>
    <li dir="ltr" aria-level="3">
    <p dir="ltr" role="presentation">ancho:​ ${bulto.ancho}​ cm</p>
    </li>
    <li dir="ltr" aria-level="3">
    <p dir="ltr" role="presentation">larg​o:​ ${bulto.largo}​&nbsp; cm${isLastBulto ? '' : '<br><br>================'}</p>
    </li>`
  }).join('')

  return `<li dir="ltr" aria-level="1">
  <p dir="ltr" role="presentation">​Par&aacute;metros de la cotizaci&oacute;n:</p>
  <ul>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">​email:​ ${obs.emailNotificacion}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">localidad​ de Orige​n:​ ${obs.localidadOrigen}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">cp​ de Origen: ${obs.cpOrigen}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">provincia​ de Origen​:​ ${obs.provinciaOrigen}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">localidad​ de Destino​: ${obs.localidadDestino}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">cp​ de Destino​:​ ${obs.cpDestino}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">provincia​ de Destino​:​ ${obs.provinciaDestino}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">​Sucursal​ de Origen (Canalizadora​):​ ${obs.sucursalCanalizadoraNombre}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">​Sucursal​ de Destino​:​ ${obs.sucursalDestinoNombre}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">Bultos:</p>
  <ul>
  ${listaBultos}
  </ul>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">Tarifa​:​ ${obs.tarifa}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">Kilos​ Reales:​ ${obs.kilosReales}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">Metros​ Cubicos:​ ${obs.metrosCubicos}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">Bultos​ Total:​ ${obs.bultosTotal}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">Valor​ Declarado:​ ${obs.valorDeclarado}</p>
  </li>
  <li dir="ltr" aria-level="2">
  <p dir="ltr" role="presentation">Descripci&oacute;n​ Bultos​: ${obs.descripcionBultos}</p>
  </li>
  </ul>
  <strong id="docs-internal-guid-03abf199-7fff-c6eb-bd36-b3a3407a190b"></strong></li>`
};