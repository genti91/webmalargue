import TitleTextInput from '../TextInputs/TitleTextInput'

export default function RemitenteSection({ form, setInForm, destinatario }) {
    return (
        <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full md:tw-flex-row'>
            <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
                <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
                    Datos del {destinatario ? 'destinatario' : 'remitente'}
                </h2>
                <div className='tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-gap-9 tw-w-full'>
                    <TitleTextInput
                        title='Nombre y apellido / Razón social'
                        placeholder='Ej.: María López'
                        input={form.nombre}
                        setInput={(value) => setInForm('nombre', value)}
                        mandatory
                    />
                    <TitleTextInput
                        title='Email'
                        placeholder='Ej.: email@dominio.com'
                        input={form.email}
                        setInput={(value) => setInForm('email', value)}
                        mandatory
                    />
                </div>
                <div className='tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-gap-9 tw-w-full'>
                        <TitleTextInput
                            title='Tipo documento'
                            input={form.tipo_documento}
                            setInput={(value) => setInForm('tipo_documento', value)}
                            mandatory
                            zipCode
                        />
                    <TitleTextInput
                        title='Número de documento / CUIT'
                        placeholder='Ej.: 11222333 (sin puntos ni guiones)'
                        input={form.numero_documento}
                        setInput={(value) => setInForm('numero_documento', value)}
                        mandatory
                    />
                    <TitleTextInput
                        title='Código de área'
                        placeholder='Ej.: 11'
                        input={form.codigo_area}
                        setInput={(value) => setInForm('codigo_area', value)}
                        mandatory
                        zipCode
                    />
                    <TitleTextInput
                        title='Número de teléfono'
                        placeholder='Ej.: 44445555'
                        input={form.telefono}
                        setInput={(value) => setInForm('telefono', value)}
                        mandatory
                    />
                </div>
            </div>
        </div>
    )
}
