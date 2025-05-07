import { useState } from 'react';
import './FormTenesCotizacion.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form } from './Form'
import { useForm } from '../../hooks'

export const FormTenesCotizacion = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [error, setError] = useState(false);
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const { form, setInForm } = useForm({
        numero_cotizacion: '',
        email: '',
    })

    if (error) {
        return (
            <div className='tw-text-center tw-flex tw-flex-col tw-gap-2 tw-text-[#2F3394] tw-items-center tw-justify-center'>
                <img src={`assets/icon-no-cotizacion.png`} alt="icon" className="tw-h-[48px] tw-w-[48px]" />
                <h2 className='tw-text-[28px]'>No encontramos una cotización vigente</h2>
                <h3 className='tw-text-[21px] tw-w-8/12'>Puede ser que el email que ingresaste no sea donde recibiste la cotización
                    o que la cotización ya no se encuentre vigente.</h3>
                <div className='lg:tw-ml-auto tw-flex tw-flex-col sm:tw-flex-row md:tw-gap-12 tw-gap-3 tw-mb-20 tw-mt-5'>
                    <Button
                        className='tw-w-[158px] tw-h-12 p-0 tw-bg-[#6C757D]'
                        style={{ 
                            backgroundColor: '#6C757D',
                            border: '1px solid #6C757D',
                        }}
                        onClick={() => setError(false)}
                    >
                        Volver
                    </Button>
                    <Link to='/cotiza'>
                        <Button
                            className='tw-w-[158px] tw-h-12 p-0'
                        >
                            Cotizar
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div id='tenes-cotizacion' className='tw-flex tw-flex-col tw-pb-14'>
            <h2>¿Ya tenes una cotización?</h2>
            <div className='tw-flex tw-items-center tw-gap-7'>
                <span className='tw-flex tw-items-center tw-gap-2'>
                    <input
                        type='radio'
                        name='cotizacion'
                        id='cotizacion-si'
                        value='si'
                        onChange={handleChange}
                    />
                    <label
                        htmlFor='cotizacion-si'
                        className="tw-text-[#2F3394] tw-text-xl"
                    >
                        Sí
                    </label>
                </span>
                <span className='tw-flex tw-items-center tw-gap-2'>
                    <input
                        type='radio'
                        name='cotizacion'
                        id='cotizacion-no'
                        value='no'
                        onChange={handleChange}
                    />
                    <label
                        htmlFor='cotizacion-no'
                        className="tw-text-[#2F3394] tw-text-xl"
                    >
                        No
                    </label>
                </span>
            </div>
            {selectedOption === 'si' &&
                <Form form={form} setInForm={setInForm} setError={setError} />
            }
            {selectedOption === 'no' &&
                <div className='tw-self-end'>
                    <Link to='/cotiza'>
                        <Button
                            className='tw-w-[158px] tw-h-12 p-0 tw-mt-7'
                        >
                            Cotizar
                        </Button>
                    </Link>
                </div>
            }
        </div>
    );
};
