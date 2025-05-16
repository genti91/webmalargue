import TitleTextInput from '../TextInputs/TitleTextInput'
import OrigenSection from './OrigenSection'
import { useForm } from '../../hooks'
import TitleSelectInput from '../TextInputs/TitleSelectInput'
import DestinoSection from './DestinoSection'
import TitleTextUnitInput from '../TextInputs/TitleTextUnitInput'

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

      <TitleTextUnitInput
        title='Ancho unitario'
        input={form.width}
        setInput={(value) => setInForm('width', value)}
        mandatory
      />
    </div>
  )
}
