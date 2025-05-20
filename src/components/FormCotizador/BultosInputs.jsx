import TitleTextInput from '../TextInputs/TitleTextInput'
import TitleTextUnitInput from '../TextInputs/TitleTextUnitInput'

export default function BultosInputs({ form, setInForm }) {
  return (
    <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
        <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
          Bultos
        </h2>
        <div className='tw-flex tw-items-start tw-justify-between tw-gap-9 tw-w-full'>
          <TitleTextInput
            title='Cantidad'
            placeholder='Ej.: 2'
            input={form.destiny}
            setInput={(value) => setInForm('destiny', value)}
            mandatory
          />
            <TitleTextUnitInput
                title='Peso en KG unitario'
                input={form.width}
                unit='kg'
                placeholder='Ej.: 20'
                setInput={(value) => setInForm('width', value)}
                mandatory
            />
            <div className='tw-max-w-[160px] tw-w-full'>
            <TitleTextUnitInput
                title='Ancho unitario'
                input={form.width}
                unit='cm'
                placeholder='Ej.: 100'
                setInput={(value) => setInForm('width', value)}
                mandatory
                info='*250cm max'
            
            />
            </div>
            <div className='tw-max-w-[160px] tw-w-full'>
                <TitleTextUnitInput
                    title='Alto unitario'
                    input={form.width}
                    unit='cm'
                    placeholder='Ej.: 100'
                    setInput={(value) => setInForm('width', value)}
                    mandatory
                    info='*250cm max'
                />
            </div>
            <div className='tw-max-w-[160px] tw-w-full'>
            <TitleTextUnitInput
                title='Largo unitario'
                input={form.width}
                unit='cm'
                placeholder='Ej.: 1000'
                setInput={(value) => setInForm('width', value)}
                mandatory
                info='*1400 max'
            
            />
            </div>
        </div>
      </div>
  )
}