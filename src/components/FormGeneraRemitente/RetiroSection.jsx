import LineFormDivisor from '../LineFormDivisor/LineFormDivisor'
import TitleTextInput from '../TextInputs/TitleTextInput'

export default function RetiroSection({ errors, form, setInForm, datosPrevios, envio}) {
    return (
        <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'>
            <LineFormDivisor />
            <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
                <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
                    Datos para el {envio ? 'envío' : 'retiro'}
                </h2>
                <div className='tw-flex tw-justify-between tw-flex-col md:tw-flex-row  tw-gap-9 tw-w-full'>
                    <TitleTextInput
                        title='Provincia'
                        input={datosPrevios.provincia}
                        mandatory
                        disabled
                    />
                    <TitleTextInput
                        title='Localidad'
                        input={datosPrevios.localidad}
                        mandatory
                        disabled
                    />
                    <TitleTextInput
                        title='Código postal'
                        input={datosPrevios.cp}
                        mandatory
                        zipCode
                        disabled
                    />
                </div>
                <div className='tw-flex tw-justify-between tw-flex-col md:tw-flex-row tw-gap-9 tw-w-full'>
                    <TitleTextInput
                        title='Calle'
                        placeholder='Ej.: Av. Garmendia'
                        input={form.calle}
                        setInput={(value) => setInForm('calle', value)}
                        mandatory
                        error={errors.calle}
                    />
                    <TitleTextInput
                        title='Número'
                        placeholder=' Ej.: 4805'
                        input={form.numero}
                        setInput={(value) => setInForm('numero', value)}
                        mandatory
                        zipCode
                        error={errors.numero}
                        numeric
                    />
                    <TitleTextInput
                        title='Piso'
                        placeholder='Ej.: 11'
                        input={form.piso}
                        setInput={(value) => setInForm('piso', value)}
                        zipCode
                        error={errors.piso}
                        numeric
                    />
                    <TitleTextInput
                        title='Departamento'
                        placeholder='Ej.: A'
                        input={form.dpto}
                        setInput={(value) => setInForm('dpto', value)}
                        zipCode
                        error={errors.dpto}
                    />
                </div>
            </div>
        </div>
    )
}
