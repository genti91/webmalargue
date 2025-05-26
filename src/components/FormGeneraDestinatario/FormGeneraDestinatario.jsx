import { Button } from 'react-bootstrap';
import { Warning } from '../Errores/Warning';
import RemitenteSection from '../FormGeneraRemitente/RemitenteSection';
import RetiroSection from '../FormGeneraRemitente/RetiroSection';
import BottomSection from './BottomSection';
import { useState } from 'react';
import { formGeneraRemitente } from './formGenera';

export const FormGeneraDestinatario = ({ form, setInForm, datosPrevios, setCurrentStep }) => {
    const [errors, setErrors] = useState({});
        const onSubmit = (e) => {
            e.preventDefault();
            if (validate()) {
                setCurrentStep(2);
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
            <Warning boldText="Tené en cuenta que la información para efectivizar la entrega, quedará sujeta a los datos oficiales del remito." text=" Cualquier observación, por favor realizala sobre el mismo de forma clara y legible." />
            <div className='tw-mt-8'>
                <form onSubmit={onSubmit} method='POST' className='tw-flex tw-flex-col tw-gap-9'>
                    <RemitenteSection form={form} setInForm={setInForm} destinatario errors={errors} />
                    <RetiroSection form={form} setInForm={setInForm} datosPrevios={datosPrevios} envio errors={errors} />
                    <BottomSection form={form} setInForm={setInForm} errors={errors} />
                    <div className='md:tw-ml-auto tw-flex tw-flex-col md:tw-flex-row md:tw-gap-12 tw-gap-3 tw-mt-5'>
                        <Button
                            className='md:tw-w-[158px] tw-h-12 p-0 tw-bg-[#6C757D]'
                            style={{
                                backgroundColor: '#6C757D',
                                border: '1px solid #6C757D',
                            }}
                            onClick={() => {
                                setCurrentStep(0);
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
