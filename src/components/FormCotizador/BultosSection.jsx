import LineFormDivisor from '../LineFormDivisor/LineFormDivisor'
import TitleTextInput from '../TextInputs/TitleTextInput'
import TitleTextUnitInput from '../TextInputs/TitleTextUnitInput'
import BultosInputs from './BultosInputs'
import BultosTable from './BultosTable'

export default function BultosSection({ form, setInForm, provincias = [], bultos = [] }) {
  return (
    <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'>
      <LineFormDivisor />
      <BultosInputs form={form} setInForm={setInForm} />
      <button className='tw-mt-6 tw-self-center tw-bg-[#198754] tw-text-white tw-py-2 tw-px-3 tw-rounded-md' onClick={() => console.log("TODO: Bulto agregado")}>
        AGREGAR BULTOS
      </button>
      <BultosTable bultos={bultos} />
      <div className="tw-flex tw-items-start tw-gap-9 tw-w-full tw-mt-6">
        <div className="tw-w-[30%]">
          <TitleTextUnitInput
            title="Valor declarado total"
            input={form.width}
            unit="$"
            placeholder="Ej.: 10000"
            setInput={(value) => setInForm('width', value)}
            mandatory
          />
        </div>
        <div className="tw-w-full">
          <TitleTextInput
            title="Descripción de los bultos"
            placeholder="Indicá la descripción de los bultos"
            input={form.destiny}
            setInput={(value) => setInForm('destiny', value)}
            mandatory
          />
        </div>
      </div>
    </div>
  )
}
