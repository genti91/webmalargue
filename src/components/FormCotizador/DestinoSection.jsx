import LineFormDivisor from '../LineFormDivisor/LineFormDivisor'
import TitleSelectInput from '../TextInputs/TitleSelectInput'
import TitleTextInput from '../TextInputs/TitleTextInput'

export default function DestinoSection({ form, setInForm, provincias = [] }) {
  return (
    <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'>
      <LineFormDivisor />
      <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
        <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
          Destino
        </h2>
        <div className='tw-flex tw-items-center tw-justify-between tw-gap-9 tw-w-full'>
          <TitleTextInput
            title='Localidad de destino'
            placeholder='Ej.: Tortuguitas'
            input={form.destiny}
            setInput={(value) => setInForm('destiny', value)}
            mandatory
          />
          <TitleTextInput
            title='Codigo postal'
            placeholder='Ej.: 1667'
            input={form.destinyCP}
            setInput={(value) => setInForm('destinyCP', value)}
            zipCode
            mandatory
          />
          <TitleSelectInput
            title="Provincia de origen"
            input={form.provincia}
            setInput={(value) => setInForm('destinyOption', value)}
            mandatory={true}
            placeholder="Seleccioná la provincia"
            options={provincias}
          />
        </div>
      </div>
    </div>
  )
}
