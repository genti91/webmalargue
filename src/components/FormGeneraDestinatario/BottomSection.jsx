import LineFormDivisor from '../LineFormDivisor/LineFormDivisor'
import TitleSelectInput from '../TextInputs/TitleSelectInput'
import TitleTextInput from '../TextInputs/TitleTextInput'

export default function ObsSection({ form, setInForm }) {
    return (
        <>
            <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'>
                <LineFormDivisor />
                <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
                    <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
                        Observaciones
                    </h2>
                    <div className='tw-flex tw-items-center tw-justify-between tw-gap-9 tw-w-full'>
                        <TitleTextInput
                            title='Observaciones'
                            placeholder='Ingresá las observaciones que consideres necesarias.'
                            input={form.observaciones}
                            setInput={(value) => setInForm('observaciones', value)}
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
                    <div className='tw-flex tw-items-center tw-justify-between tw-gap-9 tw-w-full'>
                        <TitleSelectInput
                            title="Factura a nombre de"
                            input={form.factura_a_nombre_de}
                            setInput={(value) => setInForm('factura_a_nombre_de', value)}
                            mandatory={true}
                            placeholder="Seleccioná una opción"
                            options={[{value:'Remitente', label:'Remitente'}, {value:'Destinatario', label:'Destinatario'}]}
                        />
                        <TitleSelectInput
                            title="Tipo de contribuyente"
                            input={form.tipo_de_contribuyente}
                            setInput={(value) => setInForm('tipo_de_contribuyente', value)}
                            mandatory={true}
                            placeholder="Seleccioná una opción"
                            options={[{value:'Responsable inscripto', label:'Responsable inscripto'}, {value:'Exento', label:'Exento'}, {value:'Consumidor final', label:'Consumidor final'}, {value:'Monotributista', label:'Monotributista'}]}
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
                    <div className='tw-flex tw-items-center tw-justify-between tw-gap-9 tw-w-full'>
                        <TitleSelectInput
                            title="Persona que recibirá la confirmación del retiro"
                            input={form.notificacion}
                            setInput={(value) => setInForm('notificacion', value)}
                            mandatory={true}
                            placeholder="Seleccioná una opción"
                            options={[{value:'Remitente', label:'Remitente'}, {value:'Destinatario', label:'Destinatario'}]}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
