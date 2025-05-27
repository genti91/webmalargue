import TitleTextInput from '../TextInputs/TitleTextInput'
import { useForm } from '../../hooks'
import OrigenSection from './OrigenSection'
import DestinoSection from './DestinoSection'
import BultosSection from './BultosSection'

export default function FormCotizacion() {
  const { form, setInForm, resetForm } = useForm({
    origin: '',
    destiny: '',
    originId: '',
    destinyId: '',
    originCP: '',
    destinyCP: '',
    name: '',
    email: '',
    message: '',
    service: '',
    pago: '',
    tel: '',
    tableTemplate: '',
    valorDeclarado: '',
    originOption: {},
    destinyOption: {},
    provincia: '', // BORRAR ESTE
    width: '', // BORRAR ESTE
  })

  // Provincias de Argentina
  const provincias = [
    { value: 'buenos_aires', label: 'Buenos Aires' },
    { value: 'catamarca', label: 'Catamarca' },
    { value: 'chaco', label: 'Chaco' },
    { value: 'chubut', label: 'Chubut' },
    { value: 'cordoba', label: 'Córdoba' },
    { value: 'corrientes', label: 'Corrientes' },
    { value: 'entre_rios', label: 'Entre Ríos' },
    { value: 'formosa', label: 'Formosa' },
    { value: 'jujuy', label: 'Jujuy' },
    { value: 'la_pampa', label: 'La Pampa' },
    { value: 'la_rioja', label: 'La Rioja' },
    { value: 'mendoza', label: 'Mendoza' },
    { value: 'misiones', label: 'Misiones' },
    { value: 'neuquen', label: 'Neuquén' },
    { value: 'rio_negro', label: 'Río Negro' },
    { value: 'salta', label: 'Salta' },
    { value: 'san_juan', label: 'San Juan' },
    { value: 'san_luis', label: 'San Luis' },
    { value: 'santa_cruz', label: 'Santa Cruz' },
    { value: 'santa_fe', label: 'Santa Fe' },
    { value: 'santiago_del_estero', label: 'Santiago del Estero' },
    { value: 'tierra_del_fuego', label: 'Tierra del Fuego' },
    { value: 'tucuman', label: 'Tucumán' },
  ];

  return (
    <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-9 tw-w-full'>
      <h2 className='tw-text-[28px] tw-font-semibold tw-text-[#2F3394]'>
        Completá el formulario y cotizá en el momento
      </h2>
      {/* Aquí va el formulario */}
      <TitleTextInput
        title='Email'
        placeholder='Ej.: email@dominio.com'
        input={form.email}
        setInput={(value) => setInForm('email', value)}
        mandatory
        email
      />

      <OrigenSection
        form={form}
        setInForm={setInForm}
        provincias={provincias}
      />

      <DestinoSection
        form={form}
        setInForm={setInForm}
        provincias={provincias}
      />

      <BultosSection
        form={form}
        setInForm={setInForm}
        provincias={provincias}
      />

      <button className='tw-self-end tw-mt-6 tw-bg-[#2F3394] tw-font-semibold tw-text-white tw-py-4 tw-px-12 tw-rounded-md'>
        Cotizar
      </button>
    </div>
  )
}
