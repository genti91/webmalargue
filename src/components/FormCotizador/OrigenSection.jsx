import LineFormDivisor from '../LineFormDivisor/LineFormDivisor'
import TitleSelectInput from '../TextInputs/TitleSelectInput'
import TitleTextInput from '../TextInputs/TitleTextInput'

export default function OrigenSection({ form, setInForm, provincias = [] }) {
  return (
    <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'>
      <LineFormDivisor />
      <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
        <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
          Origen
        </h2>
        <div className='tw-flex tw-items-center tw-justify-between tw-gap-9 tw-w-full'>
          <TitleTextInput
            title='Localidad de origen'
            placeholder='Ej.: Chacarita'
            input={form.origin}
            setInput={(value) => setInForm('originOption', value)}
            mandatory
          />
          <TitleTextInput
            title='Codigo postal'
            placeholder='Ej.: 1417'
            input={form.originCP}
            setInput={(value) => setInForm('originCP', value)}
            zipCode
            mandatory
          />
          <TitleSelectInput
            title="Provincia de origen"
            input={form.provincia}
            setInput={(value) => setInForm('provincia', value)}
            mandatory={true}
            placeholder="Seleccioná la provincia"
            options={provincias}
          />
        </div>
      </div>
    </div>
  )
}
