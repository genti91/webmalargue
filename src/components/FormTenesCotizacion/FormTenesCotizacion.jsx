import { useState, useEffect } from 'react';
import './FormTenesCotizacion.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form } from './Form'
import { useForm } from '../../hooks'
import { Warning } from '../Errores/Warning'
import { ErrorCotizacionEmail } from '../Errores/ErrorCotizacionEmail'
import { ErrorNoVigente } from '../Errores/ErrorNoVigente'
import ErrorModalValidarCot from '../Errores/ErrorModalValidarCot'
import { ErrorAPI } from '../Errores/ErrorAPI'
import { ErrorEnlaceManipulado } from '../Errores/ErrorEnlaceManipulado'

export const FormTenesCotizacion = ({ email, numeroCotizacion, flujo }) => {
    const [selectedOption, setSelectedOption] = useState(email && numeroCotizacion ? 'si' : 'no');
    const [error, setError] = useState({});
    const [show, setShow] = useState(false);
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const { form, setInForm } = useForm({
        numero_cotizacion: numeroCotizacion || '',
        email: email || '',
    })

    useEffect(() => {
        if (error.type === 'API CRISTAL' && flujo !== 'email' && flujo) {
            setShow(true);
        }
    }, [error]);

    if (error.type) {
        console.log('error', error)
        console.log('flujo', flujo)
        if (!flujo) {
            return (
                <ErrorCotizacionEmail setError={setError} />
            )
        }
        switch (error.type) {
            case 'NO VIGENTE':
                return <ErrorNoVigente email={form.email} id={form.numero_cotizacion} fecha={error.payload} />
            case 'ENLACE MANIPULADO':
                return <ErrorEnlaceManipulado email={form.email} id={form.numero_cotizacion} />
            case 'API CRISTAL':
                if (flujo == 'email') {
                    return <ErrorAPI email={form.email} id={form.numero_cotizacion} error={error.payload} />
                }
            default:
                break;
        }
    }

    return (
        <>
            <ErrorModalValidarCot show={show} setShow={setShow} emailForm={{ email: form.email, id: form.numero_cotizacion, error: error.payload }} />
            <Warning boldText="¡ATENCIÓN! Los retiros se agendan hasta las 15:00hs." text="Luego, quedarán pendientes para programarse el día hábil posterior." />
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
                            defaultChecked={selectedOption === 'si'}
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
                    <Form form={form} setInForm={setInForm} setError={setError} disableInputs={email && numeroCotizacion} />
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
        </>
    );
};
