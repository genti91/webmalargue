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
import { Warning } from '../Errores/Warning'

export default function FormCotizacion() {
  const [errors, setErrors] = useState({
    bultos: "Debés agregar al menos un bulto."
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [tarifa, setTarifa] = useState([])
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
  const { handleFieldChange } = useFieldValidation(setInForm, setErrors);

  const isMounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTarifa();
        if (isMounted.current) {
          setTarifa(res);
          setInForm('tarifa', Number(res.verTarifa.numero));
        }
      } catch (err) {
        console.error('Error fetching locations:', err);
      }
    };

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (bultos.length >= 1) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.bultos;
        return newErrors;
      });
    } else {
      setErrors(prev => ({
        ...prev,
        bultos: "Debés agregar al menos un bulto."
      }));
    }
  }, [bultos]);

  // Add validation for origin and destination
  useEffect(() => {
    if (form.originCP && form.destinyCP && form.originCP === form.destinyCP && form.origin === form.destiny) {
      setErrors(prev => ({
        ...prev,
        destinyMatch: "El destino no puede ser igual al origen"
      }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.destinyMatch;
        return newErrors;
      });
    }
  }, [form.originCP, form.destinyCP]);

  const onSubmit = async (e) => {
    e.preventDefault()
    // Add validation for missing bultos
    if (bultos.length === 0) {
      setErrors(prev => ({
        ...prev,
        bultos: 'Debés agregar al menos un bulto'
      }))
      return
    }
    if (!Object.values(errors).every(error => error === null)) {
      // Scroll to the first error
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
      if (isMounted.current) { // Check if component is still mounted before setting state
        setCotizacion(result)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      if (isMounted.current) { // Check if component is still mounted before setting state
        setIsSubmitting(false)
      }
    }
  }

  return cotizacion ? (
    <CotizacionExitosa newQuoteHandler={()=>{resetForm();setBultos([]);setCotizacion('')}} finalData={finalData} cotizacion={cotizacion} bultos={bultos} />
  ) : (
    <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-9 tw-w-full'>
      <Warning boldText="¡ATENCIÓN!" text="Si necesitás cotizar pallets, equipos completos o mudanzas, escribinos a info@expresomalargue.com" />
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
          disabled={isSubmitting || Object.values(errors).some(error => error !== null) || !form.origin || !form.destiny || !form.originCP || !form.destinyCP || !form.email || !form.valorDeclarado}
          className='tw-self-end tw-mt-6 tw-bg-[#2F3394] tw-font-semibold tw-text-white tw-py-4 tw-px-12 tw-rounded-md disabled:tw-opacity-50'
        >
          {isSubmitting ? 'Cotizando...' : 'Cotizar'}
        </button>
      </form>
    </div>
  )
}