import { Button } from 'react-bootstrap';
import { Warning } from '../Errores/Warning';
import RemitenteSection from './RemitenteSection';
import RetiroSection from './RetiroSection';
import { useGenera } from '../../context/GeneraContext';
import { formGeneraRemitente } from './formGenera';
import { useState } from 'react';

export const FormGeneraRemitente = ({ form, setInForm, datosPrevios, setCurrentStep }) => {
    const { setCotizacion } = useGenera();
    const [errors, setErrors] = useState({});
    const onSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setCurrentStep(1);
        }
    }
    const isFormValid = () => {
        return formGeneraRemitente.every(
            (input) => !input.required || !!form[input.name]
        );
    };

    const validate = () => {
        let newErrors = {};
        formGeneraRemitente.forEach((input) => {
            const value = form[input.name];
            if (input?.required && !value) {
                newErrors[input.name] = input.required;
            } else if (input.validate) {
                const error = input.validate(value, form);
                if (error) {
                    newErrors[input.name] = error;
                }
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div>
            <h2 className='tw-text-[#2F3394] tw-text-[28px] tw-mb-5'>Completá el formulario para solicitar el retiro</h2>
            <Warning boldText="¡ATENCIÓN! Los retiros se agendan hasta las 15:00hs." text="Luego, quedarán pendientes para programarse el día hábil posterior." />
            <div className='tw-mt-8'>
                <form onSubmit={onSubmit} method='POST' className='tw-flex tw-flex-col tw-gap-9'>
                    <RemitenteSection errors={errors} form={form} setInForm={setInForm} />
                    <RetiroSection errors={errors} form={form} setInForm={setInForm} datosPrevios={datosPrevios} />
                    <div className='md:tw-ml-auto tw-flex tw-flex-col md:tw-flex-row md:tw-gap-12 tw-gap-3 tw-mt-5'>
                        <Button
                            className='md:tw-w-[158px] tw-h-12 p-0 tw-bg-[#6C757D]'
                            style={{
                                backgroundColor: '#6C757D',
                                border: '1px solid #6C757D',
                            }}
                            onClick={() => {
                                setCurrentStep(0);
                                setCotizacion(null);
                            }}
                        >
                            Volver
                        </Button>
                        <Button
                            className='md:tw-w-[158px] tw-h-12 p-0'
                            type='submit'
                            disabled={!isFormValid()}
                        >
                            Continuar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
