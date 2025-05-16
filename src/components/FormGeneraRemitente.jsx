import { Button } from 'react-bootstrap';
import TextInput from './TextInput'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import { Warning } from './Errores/Warning';

export const FormGeneraRemitente = ({ form, setForm, datosPrevios }) => {
    const [errors, setErrors] = useState({
        email: false,
        numero_cotizacion: false
    });
    const setInForm = (name, value) => {
        setForm({
            ...form,
            [name]: value
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log('Formulario enviado:', form);
    }
    return (
        <div>
            <h2 className='tw-text-[#2F3394] tw-text-[28px] tw-mb-5'>Completá el formulario para solicitar el retiro</h2>
            <Warning boldText="¡ATENCIÓN! Los retiros se agendan hasta las 15:00hs." text="Luego, quedarán pendientes para programarse el día hábil posterior." />
            <div className='tw-mt-8' id='contactanos'>
                <form id='contact-form' onSubmit={onSubmit} method='POST' className='tw-flex tw-flex-col'>
                    <Row className='justify-content-md-center lg:tw-w-5/12 md:tw-w-8/12'>
                        <Col md={12}>
                            <label>
                                Ingresá el email que utilizas para cotizar<span>*</span>
                            </label>
                            <TextInput
                                value={form.email}
                                error={errors.email}
                                name="email"
                                setInForm={setInForm}
                                form={form}
                                placeholder='Ej: email@dominio.com'
                            />
                        </Col>
                        <Col md={12}>
                            <label>
                                Ingresá el número de cotización<span>*</span>
                            </label>
                            <TextInput
                                value={form.numero_cotizacion}
                                error={errors.numero_cotizacion}
                                name='numero_cotizacion'
                                type='number'
                                setInForm={setInForm}
                                form={form}
                                placeholder='Ej: 3822'
                            />
                        </Col>
                    </Row>
                    <div className='lg:tw-ml-auto tw-flex tw-flex-col sm:tw-flex-row md:tw-gap-12 tw-gap-3 tw-mt-5'>
                        <Button
                            className='tw-w-[158px] tw-h-12 p-0 tw-bg-[#6C757D]'
                            style={{
                                backgroundColor: '#6C757D',
                                border: '1px solid #6C757D',
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
