import TitleTextInput from '../TextInputs/TitleTextInput'
import { useForm } from '../../hooks'
import OrigenSection from './OrigenSection'
import DestinoSection from './DestinoSection'
import BultosSection from './BultosSection'
import { useState, useEffect, useRef } from 'react'
import { getTarifa } from './services/getTarifa'
import { getCotizacion } from './services/getCotizacion'
import { formatCotizacionData } from './utils/cotizacionFormatter'
import { useFieldValidation } from '../../hooks/useFieldValidation'
import CotizacionExitosa from './CotizacionExitosa'
import emailjs from 'emailjs-com'
import { calculatePriceDetail } from '../CotizacionYRetiro/calculatePriceDetail'
import { ErrorTarifaCotizacion } from '../Errores/ErrorTarifaCotizacion'
import { Warning } from '../Errores/Warning'

export default function FormCotizacion() {
  const [errors, setErrors] = useState({
    bultos: 'Debés agregar al menos un bulto.',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [tarifa, setTarifa] = useState([])
  const [errorTarifa, setErrorTarifa] = useState(null)
  const [cotizacion, setCotizacion] = useState()
  const [finalData, setFinalData] = useState()

  const { form, setInForm, resetForm } = useForm({
    origin: '',
    destiny: '',
    originCP: '',
    destinyCP: '',
    email: '',
    message: '',
    valorDeclarado: '',
    originOption: {},
    destinyOption: {},
  })

  const [bultos, setBultos] = useState([])
  const { handleFieldChange } = useFieldValidation(setInForm, setErrors)
  const isMounted = useRef(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTarifa()
        if (isMounted.current) {
          setTarifa(res)
          setInForm('tarifa', Number(res.verTarifa.numero))
        }
      } catch (err) {
        console.error('Error fetching locations:', err)
      }
    }

    fetchData()

    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    if (bultos.length >= 1) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.bultos
        return newErrors
      })
    } else {
      setErrors((prev) => ({
        ...prev,
        bultos: 'Debés agregar al menos un bulto.',
      }))
    }
  }, [bultos])

  useEffect(() => {
    if (cotizacion || errorTarifa) {
      setTimeout(() => {
        window.scrollTo({ top: 200, behavior: 'smooth' })
      }, 0)
    }
  }, [cotizacion, errorTarifa])

  useEffect(() => {
    if (
      form.originCP &&
      form.destinyCP &&
      form.originCP === form.destinyCP &&
      form.origin === form.destiny
    ) {
      setErrors((prev) => ({
        ...prev,
        destinyMatch: 'El destino no puede ser igual al origen',
      }))
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.destinyMatch
        return newErrors
      })
    }
  }, [form.originCP, form.destinyCP])

  const onSubmit = async (e) => {
    e.preventDefault()

    if (bultos.length === 0) {
      setErrors((prev) => ({
        ...prev,
        bultos: 'Debés agregar al menos un bulto',
      }))
      return
    }

    if (!Object.values(errors).every((error) => error === null)) {
      const firstErrorField = Object.keys(errors)[0]
      const element = document.getElementById(firstErrorField)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setIsSubmitting(true)

    try {
      const formattedData = formatCotizacionData(form, bultos)
      setFinalData(formattedData)

      const result = await getCotizacion(formattedData)

      if (result?.cotizacion.msg && result.cotizacion.msg.includes('No tengo tarifa')) {
        setErrorTarifa({
          email: form.email,
          cotizacionId: result.lead.idLead,
          mensajeCristal: result.cotizacion.msg,
        })
        return
      }
      

      const totalAPIPrice = Number(result.cotizacion.valorizo) || 0
      const { noTaxPrice, ivaValue, finalValue } =
        calculatePriceDetail({
          totalAPIPrice,
        })
      const seguroValue = result.cotizacion.seguro.toLocaleString('es-AR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
      const tablaBultosHTML = bultos
        .map((bulto, index) => {
          const fondo = index % 2 === 0 ? '' : 'background:#f5f5f5;'
          return `
          <tr style="${fondo}">
            <td style="padding:8px 6px;border:1px solid #cccccc;">${
              bulto.quantity
            }&nbsp;unidad${bulto.cantidad > 1 ? 'es' : ''}</td>
            <td style="padding:8px 6px;border:1px solid #cccccc;">${
              bulto.weight
            }&nbsp;kg</td>
            <td style="padding:8px 6px;border:1px solid #cccccc;">${
              bulto.width
            }&nbsp;cm</td>
            <td style="padding:8px 6px;border:1px solid #cccccc;">${
              bulto.height
            }&nbsp;cm</td>
            <td style="padding:8px 6px;border:1px solid #cccccc;">${
              bulto.length
            }&nbsp;cm</td>
          </tr>`
        })
        .join('')

      try {
        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          'template_sv96d5d',
          {
            email: form.email,
            cotizacion_id: result.lead.idLead,
            origen: form.origin,
            destino: form.destiny,
            tabla_bultos: tablaBultosHTML,
            precio_base: noTaxPrice,
            seguro: seguroValue,
            iva: ivaValue,
            precio_final: finalValue,
            nueva_cotizacion_url: 'https://webmalargue.vercel.app/cotiza',
            generar_retiro_url: `https://webmalargue.vercel.app/genera?numero_cotizacion=${result.lead.idLead}&email=${form.email}`,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
      } catch (emailError) {
        console.error('Error enviando email:', emailError)
      }

      if (isMounted.current) {
        setCotizacion(result)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Error al cotizar. Por favor, intentá nuevamente.')
    } finally {
      if (isMounted.current) {
        setIsSubmitting(false)
      }
    }
  }

  if (errorTarifa) {
    return (
      <ErrorTarifaCotizacion
        email={errorTarifa.email}
        cotizacionId={errorTarifa.cotizacionId}
        mensajeCristal={errorTarifa.mensajeCristal}
      />
    )
  }

  if (cotizacion) {
    return (
      <CotizacionExitosa
        newQuoteHandler={() => {
          resetForm()
          setBultos([])
          setCotizacion('')
        }}
        finalData={finalData}
        cotizacion={cotizacion}
        bultos={bultos}
      />
    )
  }
  

  return (
    <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-9 tw-w-full'>
      <Warning
        boldText='¡ATENCIÓN!'
        text='Si necesitás cotizar pallets, equipos completos o mudanzas, escribinos a info@expresomalargue.com'
      />
      <h2 className='tw-text-[28px] tw-font-semibold tw-text-[#2F3394]'>
        Completá el formulario y cotizá en el momento
      </h2>

      <form
        onSubmit={onSubmit}
        className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-9 tw-w-full'
      >
        <TitleTextInput
          id='email'
          title='Email'
          placeholder='Ej.: email@dominio.com'
          input={form.email}
          setInput={(value) => handleFieldChange('email', value)}
          mandatory
          email
          error={errors.email}
        />

        <OrigenSection
          tarifaOrigen={tarifa?.locOrigen}
          form={form}
          setInForm={setInForm}
          locations={tarifa.locOrigen}
          errors={errors}
          onValidate={handleFieldChange}
        />

        <DestinoSection
          tarifaDestino={tarifa?.locDestino}
          form={form}
          setInForm={setInForm}
          locations={tarifa.locDestino}
          errors={errors}
          onValidate={handleFieldChange}
        />

        <BultosSection
          form={form}
          setInForm={setInForm}
          bultos={bultos}
          setBultos={setBultos}
          errors={errors}
          setErrors={setErrors}
          onValidate={handleFieldChange}
        />

        <button
          onClick={onSubmit}
          disabled={
            isSubmitting ||
            Object.values(errors).some((error) => error !== null) ||
            !form.origin ||
            !form.destiny ||
            !form.originCP ||
            !form.destinyCP ||
            !form.email ||
            !form.valorDeclarado
          }
          className='tw-self-end tw-mt-6 tw-w-full lg:tw-w-fit tw-bg-[#2F3394] tw-font-semibold tw-text-white tw-py-4 tw-px-12 tw-rounded-md disabled:tw-opacity-50'
        >
          {isSubmitting ? 'Cotizando...' : 'Cotizar'}
        </button>
      </form>
    </div>
  )
}
