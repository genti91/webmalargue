import TitleSelectInput from '../TextInputs/TitleSelectInput'
import TitleTextInput from '../TextInputs/TitleTextInput'

export default function RemitenteSection({ errors, form, setInForm, destinatario }) {
    return (
        <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full md:tw-flex-row'>
            <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
                <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
                    Datos del {destinatario ? 'destinatario' : 'remitente'}
                </h2>
                <div className='tw-flex tw-flex-col md:tw-flex-row tw-justify-between sm:tw-gap-9 tw-gap-6 tw-w-full'>
                    <TitleTextInput
                        title='Nombre y apellido / Razón social'
                        placeholder='Ej.: María López'
                        input={form.nombre}
                        setInput={(value) => setInForm('nombre', value)}
                        mandatory
                        error={errors.nombre}
                    />
                    <TitleTextInput
                        title='Email'
                        placeholder='Ej.: email@dominio.com'
                        input={form.email}
                        setInput={(value) => setInForm('email', value)}
                        mandatory
                        error={errors.email}
                    />
                </div>
                <div className='tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-gap-6 md:tw-gap-9 tw-w-full'>
                    <TitleTextInput
                        title='Código de área'
                        placeholder='Ej.: 11'
                        input={form.codigo_de_area}
                        setInput={(value) => setInForm('codigo_de_area', value)}
                        mandatory
                        zipCode
                        error={errors.codigo_de_area}
                        numeric
                    />
                    <TitleTextInput
                        title='Número de teléfono'
                        placeholder='Ej.: 44445555'
                        input={form.telefono}
                        setInput={(value) => setInForm('telefono', value)}
                        mandatory
                        error={errors.telefono}
                        numeric
                    />
                </div>
            </div>
        </div>
    )
}
