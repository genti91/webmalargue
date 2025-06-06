import { Warning } from '../Errores/Warning'
import LineFormDivisor from '../LineFormDivisor/LineFormDivisor'
import { SuccessCheckIcon } from './utils/icons'
import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

export default function CotizacionExitosa({
  finalData,
  cotizacion,
  bultos,
  newQuoteHandler,
}) {
  const componentRef = useRef(null)

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
      // Add extra padding above
      window.scrollBy(0, -20)
    }
  }, [])


  // Let's solve for x (base value) in the equation:
  // x + (x * 0.01) + ((x + x*0.01) * 0.21) = total
  // x + 0.01x + 0.21x + 0.0021x = total
  // 1.2221x = total
  // x = total / 1.2221
  const rawValue = (cotizacion.valorizo / 1.2221).toLocaleString('es-AR', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
  const seguroValue = (
    Number(cotizacion.valorizo / 1.2221) * 0.01
  ).toLocaleString('es-AR', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
  const ivaValue = (
    (Number(cotizacion.valorizo / 1.2221) +
      Number(cotizacion.valorizo / 1.2221) * 0.01) *
    0.21
  ).toLocaleString('es-AR', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
  const finalValue = Number(cotizacion?.valorizo).toLocaleString('es-AR', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })

  return (
    <div
      ref={componentRef}
      className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'
    >
      {/* Mensaje de exito + nro de Cotizacion */}
      <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full'>
        <SuccessCheckIcon />
        <h2 className='tw-text-[#02542D] tw-text-center tw-mt-4 tw-text-[32px]'>
          Tu cotización se generó con éxito
        </h2>
        <span className='tw-text-[#02542D] tw-text-[28px] tw-text-center tw-mb-[46px] '>
          Número de cotización: <span className='tw-bg-[#02542D] tw-rounded-lg tw-text-white tw-px-2'>{cotizacion?.idLead}</span>
        </span>
      </div>

      <Warning boldText="Recordá que el valor es estimativo" text="ya que puede verse modificado al medir/pesar la mercadería en nuestro depósito." />
      
      <h3 className='tw-text-[#2F3394] tw-mb-9 tw-tw-text-[28px] tw-font-semibold tw-mt-9'>
        Resumen de tu cotización
      </h3>
      <LineFormDivisor />

      {/* Info del envio */}
      <div className='tw-flex tw-flex-col gap-4 tw-mb-9'>
        <span className='tw-text-[#2F3394] tw-text-2xl tw-font-semibold'>
          Información del envío
        </span>
        <span>
          <strong>Origen: </strong>
          {finalData?.origin}
        </span>
        <span>
          <strong>Destino: </strong>
          {finalData?.destiny}
        </span>
      </div>
      <LineFormDivisor />

      {/* Info de los bultos */}
      <div className='tw-flex tw-flex-col gap-4 tw-mb-9 tw-w-full'>
        <span className='tw-text-[#2F3394] tw-text-2xl tw-font-semibold'>
          Información de los bultos
        </span>
        <div className='tw-w-full tw-overflow-x-auto'>
          <table className='tw-w-full tw-border tw-bg-white tw-whitespace-nowrap lg:tw-whitespace-normal'>
            <thead>
              <tr className='tw-border-b tw-border-[#222]'>
                <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border tw-whitespace-nowrap lg:tw-whitespace-normal'>
                  Cantidad de bultos
                </th>
                <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border tw-whitespace-nowrap lg:tw-whitespace-normal'>
                  Peso unitario (kg)
                </th>
                <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border tw-whitespace-nowrap lg:tw-whitespace-normal'>
                  Ancho unitario (cm)
                </th>
                <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border tw-whitespace-nowrap lg:tw-whitespace-normal'>
                  Alto unitario (cm)
                </th>
                <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border tw-whitespace-nowrap lg:tw-whitespace-normal'>
                  Largo unitario (cm)
                </th>
              </tr>
            </thead>
            <tbody>
              {bultos.map((bulto, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'tw-bg-[#F5F5F5]' : ''}>
                  <td className='tw-py-2 tw-px-3 tw-border tw-whitespace-nowrap lg:tw-whitespace-normal'>
                    {bulto?.quantity}{' '}
                    {bulto?.quantity === '1' ? 'unidad' : 'unidades'}
                  </td>
                  <td className='tw-py-2 tw-px-3 tw-border tw-whitespace-nowrap lg:tw-whitespace-normal'>
                    {bulto?.weight}kg
                  </td>
                  <td className='tw-py-2 tw-px-3 tw-border tw-whitespace-nowrap lg:tw-whitespace-normal'>
                    {bulto?.width}cm
                  </td>
                  <td className='tw-py-2 tw-px-3 tw-border tw-whitespace-nowrap lg:tw-whitespace-normal'>
                    {bulto?.height}cm
                  </td>
                  <td className='tw-py-2 tw-px-3 tw-border tw-whitespace-nowrap lg:tw-whitespace-normal'>
                    {bulto?.length}cm
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <LineFormDivisor />

      {/* Detalle de la Tarifa */}
      <div className='tw-flex tw-flex-col gap-4 tw-mb-9'>
        <span className='tw-text-[#2F3394] tw-text-2xl tw-font-semibold'>
          Detalle de la tarifa
        </span>
        <span>
          <strong>Precio sin impuestos nacionales: </strong>ARS ${rawValue}
        </span>
        <span>
          <strong>Seguro: </strong>ARS ${seguroValue}
        </span>
        <span>
          <strong>IVA (21%): </strong>ARS ${ivaValue}
        </span>
      </div>

      {/* Precio final */}
      <div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full'>
        <div className='tw-flex tw-flex-col tw-w-[350px] tw-justify-center tw-items-center text-center tw-rounded-lg tw-border tw-border-[#707070] '>
          <span className='tw-text-[#2F3394] tw-text-2xl tw-font-semibold tw-py-2'>
            PRECIO FINAL
          </span>
          <span className='tw-w-full tw-text-white tw-text-2xl tw-font-semibold tw-bg-[#2F3394] tw-rounded-b-lg tw-py-2'>
            ARS ${finalValue}
          </span>
        </div>
      </div>

      {/* Botones Generar y Nueva Cotizacion */}
      <div className='tw-flex tw-w-full tw-flex-col lg:tw-flex-row lg:tw-justify-end lg:tw-items-center tw-gap-11 tw-mt-14'>
        <button
          onClick={newQuoteHandler}
          className='tw-self-end tw-bg-[#2F3394] tw-w-full lg:tw-w-fit tw-font-semibold tw-text-white tw-py-4 tw-px-5 tw-rounded-md'
        >
          Nueva cotización
        </button>
        <NavLink
          to={`/genera?email=${finalData.email}&numero_cotizacion=${cotizacion.idLead}`}
          className='lg:tw-self-end tw-bg-[#198754] tw-w-full lg:tw-w-fit self-center tw-text-center tw-font-semibold tw-text-white tw-py-4 tw-px-5 tw-rounded-md tw-no-underline'
        >
          Generar retiro
        </NavLink>
      </div>
    </div>
  )
}
