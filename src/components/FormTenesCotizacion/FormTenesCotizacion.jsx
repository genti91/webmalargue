import { useState, useEffect } from 'react';
import './FormTenesCotizacion.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form } from './Form'
import { Warning } from '../Errores/Warning'
import { ErrorCotizacionEmail } from '../Errores/ErrorCotizacionEmail'
import { ErrorNoVigente } from '../Errores/ErrorNoVigente'
import ErrorModalValidarCot from '../Errores/ErrorModalValidarCot'
import { ErrorAPI } from '../Errores/ErrorAPI'
import { ErrorEnlaceManipulado } from '../Errores/ErrorEnlaceManipulado'
import { ErrorCotizacionCambio } from '../Errores/ErrorCotizacionCambio';
import ErrorModalCotizacionEnSucursal from '../Errores/ErrorModalCotizacionEnSucursal.jsx';

export const FormTenesCotizacion = ({ email, numeroCotizacion, flujo, form, setInForm, savedCotizacion, setSavedCotizacion }) => {
    const [error, setError] = useState({});
    const [show, setShow] = useState(false);
    const [showModalDeposito, setShowModalDeposito] = useState(false);
    const handleChange = (value) => {
        setSavedCotizacion(value);
    };

    useEffect(() => {
        if (error.type === 'API CRISTAL' && flujo !== 'email' && flujo) {
            setShow(true);
        }
        if (error.type === 'DEPOSITO') {
            setShowModalDeposito(true);
        }
    }, [error, flujo]);

    if (error.type) {
        if (error.type === 'IMPORTE INVALIDO') {
            return <ErrorCotizacionCambio setError={setError} error={error.payload} />
        }
        if (!flujo && error.type !== 'DEPOSITO') {
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
                if (flujo === 'email') {
                    return <ErrorAPI email={form.email} id={form.numero_cotizacion} error={error.payload} />
                }
                break;
            default:
                break;
        }
    }

    return (
        <>
            <ErrorModalValidarCot show={show} setShow={setShow} emailForm={{ email: form.email, id: form.numero_cotizacion, error: error.payload }} />
            <ErrorModalCotizacionEnSucursal show={showModalDeposito} setShow={setShowModalDeposito} payload={error.payload} />
            <Warning boldText="¡ATENCIÓN! Los retiros se agendan hasta las 15:00hs." text="Luego, quedarán pendientes para programarse el día hábil posterior." />
            <div id='tenes-cotizacion' className='tw-flex tw-gap-6 tw-flex-col'>
                <h2 className='tw-text-[#2F3394] tw-font-[600] tw-text-[24px] tw-m-0' >¿Ya tenes una cotización?</h2>
                <div className='tw-flex tw-items-center tw-gap-7'>
                    <span className='tw-flex tw-items-center tw-gap-2'>
                        <input
                            type='radio'
                            name='cotizacion'
                            id='cotizacion-si'
                            value='si'
                            onChange={() => handleChange(true)}
                            defaultChecked={savedCotizacion === true}
                            disabled={email && numeroCotizacion}
                        />
                        <label
                            htmlFor='cotizacion-si'
                            className="tw-text-[#2F3394] tw-text-[16px]"
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
                            onChange={() => handleChange(false)}
                            disabled={email && numeroCotizacion}
                        />
                        <label
                            htmlFor='cotizacion-no'
                            className="tw-text-[#2F3394] tw-text-[16px]"
                        >
                            No
                        </label>
                    </span>
                </div>
                {savedCotizacion === true &&
                    <Form form={form} setInForm={setInForm} setError={setError} disableInputs={email && numeroCotizacion} />
                }
                {savedCotizacion === false &&
                    <div className='tw-self-end md:tw-w-[158px] tw-w-full' >
                        <Link to='/cotiza' className='md:tw-w-[158px] tw-w-full'>
                            <Button
                                className='md:tw-w-[158px] tw-w-full tw-h-12 p-0 tw-mt-[12px]'
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
