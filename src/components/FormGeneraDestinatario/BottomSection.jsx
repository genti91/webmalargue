import { useState } from 'react';
import LineFormDivisor from '../LineFormDivisor/LineFormDivisor'
import TitleSelectInput from '../TextInputs/TitleSelectInput'
import TitleTextInput from '../TextInputs/TitleTextInput'

export default function ObsSection({ errors, form, setInForm }) {
    const [disableTipoDoc, setDisableTipoDoc] = useState(false);
    const [disabledOptions, setDisabledOptions] = useState([]);
    const onTipoDeContribuyenteChange = (value) => {
        setInForm('tipo_de_contribuyente', value)
        console.log(value)
        if (value.value !== 'Consumidor Final') {
            setInForm('tipo_documento', {value:'CUIT', label:'CUIT'})
            setDisableTipoDoc(true);
        } else {
            setInForm('tipo_documento', '')
            setDisabledOptions(['CUIT']);
            setDisableTipoDoc(false);
        }
    }
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
                        <TitleSelectInput
                            title="Tipo de contribuyente"
                            input={form.tipo_de_contribuyente}
                            setInput={onTipoDeContribuyenteChange}
                            mandatory={true}
                            placeholder="Seleccioná una opción"
                            options={[{value:'Consumidor Final', label:'Consumidor Final'}, {value:'Responsable Inscripto', label:'Responsable Inscripto'}, {value:'Monotributista', label:'Monotributista'}]}
                            error={errors.tipo_de_contribuyente}
                        />
                    </div>
                    <div className='tw-flex tw-flex-col md:tw-flex-row tw-justify-between sm:tw-gap-9 tw-gap-6 tw-w-full'>
                        <TitleSelectInput
                            title="Tipo documento"
                            input={form.tipo_documento}
                            setInput={(value) => setInForm('tipo_documento', value)}
                            mandatory={true}
                            placeholder="Seleccioná"
                            options={[{value:'DNI', label:'DNI'}, {value:'CUIL', label:'CUIL'}, {value:'CUIT', label:'CUIT'}]}
                            disabled={disableTipoDoc}
                            disabledOptions={disabledOptions}
                        />
                        <TitleTextInput
                            title='Número de documento / CUIL'
                            placeholder='Ej.: 11222333 (sin puntos ni guiones)'
                            input={form.numero_documento}
                            setInput={(value) => setInForm('numero_documento', value)}
                            mandatory
                            error={errors.numero_documento}
                            numeric
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
                            setInput={(value) => {setInForm('notificacion', value)}}
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
