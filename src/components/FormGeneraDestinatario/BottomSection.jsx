import LineFormDivisor from '../LineFormDivisor/LineFormDivisor'
import TitleSelectInput from '../TextInputs/TitleSelectInput'
import TitleTextInput from '../TextInputs/TitleTextInput'

export default function ObsSection({ errors, form, setInForm }) {
    return (
        <>
            <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'>
                <LineFormDivisor />
                <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
                    <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
                        Observaciones
                    </h2>
                    <div className='tw-flex tw-items-center tw-justify-between sm:tw-gap-9 tw-gap-6 tw-w-full'>
                        <TitleTextInput
                            title='Observaciones'
                            placeholder='Ingresá las observaciones que consideres necesarias.'
                            input={form.observaciones}
                            setInput={(value) => setInForm('observaciones', value)}
                            error={errors.observaciones}
                            textarea={true}
                            rows={3}
                        />
                    </div>
                </div>
            </div>
            <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'>
                <LineFormDivisor />
                <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
                    <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
                        Facturación
                    </h2>
                    <div className='tw-flex tw-flex-col md:tw-flex-row tw-justify-between sm:tw-gap-9 tw-gap-6 tw-w-full'>
                        <TitleSelectInput
                            title="Factura a nombre de"
                            input={form.factura_a_nombre_de}
                            setInput={(value) => setInForm('factura_a_nombre_de', value)}
                            mandatory={true}
                            placeholder="Seleccioná una opción"
                            options={[{value:'Remitente', label:'Remitente'}, {value:'Destinatario', label:'Destinatario'}]}
                            error={errors.factura_a_nombre_de}
                        />
                        <TitleTextInput
                            title='Tipo de contribuyente'
                            input={form.tipo_de_contribuyente}
                            mandatory
                            disabled
                        />
                    </div>
                </div>
            </div>
            <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'>
                <LineFormDivisor />
                <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
                    <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
                        Notificación
                    </h2>
                    <div className='tw-flex tw-items-center tw-justify-between sm:tw-gap-9 tw-gap-6 tw-w-full'>
                        <TitleSelectInput
                            title="Persona que recibirá la confirmación del retiro"
                            input={form.notificacion}
                            setInput={(value) => {console.log(value);setInForm('notificacion', value)}}
                            mandatory={true}
                            placeholder="Seleccioná una opción"
                            options={[{value:'Remitente', label:'Remitente'}, {value:'Ambos (Remitente y Destinatario)', label:'Ambos (Remitente y Destinatario)'}]}
                            error={errors.notificacion}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
