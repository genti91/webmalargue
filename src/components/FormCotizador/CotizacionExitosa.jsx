import { calculatePriceDetail } from '../CotizacionYRetiro/calculatePriceDetail'
import { FinalPriceBox } from '../CotizacionYRetiro/FinalPriceBox'
import { SavedBultosTable } from '../CotizacionYRetiro/SavedBultosTable'
import { TarifaDetail } from '../CotizacionYRetiro/TarifaDetail'
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

  const { noTaxPrice, seguroValue, ivaValue, finalValue } = calculatePriceDetail({ totalAPIPrice: cotizacion.cotizacion.valorizo })

  return (
    <div
      ref={componentRef}
      className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'
    >
      {/* Mensaje de exito + nro de Cotizacion */}
      <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full'>
        <SuccessCheckIcon />
        <h2 className='tw-text-[#02542D] font-bold tw-text-center tw-mt-4 tw-text-[32px]'>
          Tu cotización se generó con éxito
        </h2>
        <span className='tw-text-[#02542D] tw-text-[28px] tw-text-center tw-mb-[46px] '>
          Número de cotización: <span className='tw-bg-[#02542D] tw-rounded-lg tw-text-white tw-px-2'>{cotizacion?.lead.idLead}</span>
        </span>
      </div>

      <Warning boldText="Recordá que el valor es estimativo" text="ya que puede verse modificado al medir/pesar la mercadería en nuestro depósito." />
      
      <h3 className='tw-text-[#2F3394] tw-mb-9 tw-tw-text-[28px] tw-font-semibold tw-mt-9'>
        Resumen de tu cotización
      </h3>
      <LineFormDivisor />

      {/* Info del envio */}
      <div className='tw-flex tw-flex-col tw-gap-4 tw-mb-9'>
        <span className='tw-text-[#2F3394] tw-text-2xl tw-font-semibold'>
          Información del envío
        </span>
        <span>
          <strong>Origen: </strong>
          {finalData?.localidadOrigen}
        </span>
        <span>
          <strong>Destino: </strong>
          {finalData?.localidadDestino}
        </span>
      </div>
      <LineFormDivisor />

      {/* Info de los bultos */}
      <div className='tw-flex tw-flex-col gap-4 tw-mb-9 tw-w-full'>
        <span className='tw-text-[#2F3394] tw-text-2xl tw-font-semibold'>
          Información de los bultos
        </span>
        <SavedBultosTable bultos={bultos} />
      </div>
      <LineFormDivisor />

      {/* Detalle de la Tarifa */}
      <TarifaDetail noTaxPrice={noTaxPrice} seguroValue={seguroValue} ivaValue={ivaValue} /> 

      {/* Precio final */}
      <FinalPriceBox price={finalValue} />

      {/* Botones Generar y Nueva Cotizacion */}
      <div className='tw-flex tw-w-full tw-flex-col lg:tw-flex-row lg:tw-justify-end lg:tw-items-center tw-gap-4 lg:tw-gap-11 tw-mt-12'>
        <button
          onClick={newQuoteHandler}
          className='tw-self-end tw-bg-[#2F3394] tw-w-full lg:tw-w-fit tw-font-semibold tw-text-white tw-py-4 tw-px-5 tw-rounded-md'
        >
          Nueva cotización
        </button>
        <NavLink
          to={`/genera?email=${finalData.emailNotificacion}&numero_cotizacion=${cotizacion.lead.idLead}`}
          className='lg:tw-self-end tw-bg-[#198754] tw-w-full lg:tw-w-fit self-center tw-text-center tw-font-semibold tw-text-white tw-py-4 tw-px-5 tw-rounded-md tw-no-underline'
        >
          Generar retiro
        </NavLink>
      </div>
    </div>
  )
}
