import { Button } from 'react-bootstrap';
import { Warning } from '../Errores/Warning';
import RemitenteSection from './RemitenteSection';
import RetiroSection from './RetiroSection';
import { useGenera } from '../../context/GeneraContext';

export const FormGeneraRemitente = ({ form, setInForm, datosPrevios, setCurrentStep }) => {
    const { setCotizacion } = useGenera();
    const onSubmit = (e) => {
        e.preventDefault();
        setCurrentStep(1);
    }
    return (
        <div>
            <h2 className='tw-text-[#2F3394] tw-text-[28px] tw-mb-5'>Completá el formulario para solicitar el retiro</h2>
            <Warning boldText="¡ATENCIÓN! Los retiros se agendan hasta las 15:00hs." text="Luego, quedarán pendientes para programarse el día hábil posterior." />
            <div className='tw-mt-8'>
                <form onSubmit={onSubmit} method='POST' className='tw-flex tw-flex-col tw-gap-9'>
                    <RemitenteSection form={form} setInForm={setInForm} />
                    <RetiroSection form={form} setInForm={setInForm} datosPrevios={datosPrevios} />
                    <div className='lg:tw-ml-auto tw-flex tw-flex-col sm:tw-flex-row md:tw-gap-12 tw-gap-3 tw-mt-5'>
                        <Button
                            className='tw-w-[158px] tw-h-12 p-0 tw-bg-[#6C757D]'
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
                            className='tw-w-[158px] tw-h-12 p-0'
                            type='submit'
                        >
                            Continuar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
