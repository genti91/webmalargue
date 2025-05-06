import { useState } from 'react';
import './FormTenesCotizacion.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { useForm } from '../../hooks'
import TextInput from '../TextInput'
import { form_shipment } from '../../constant/forms'
import { Col, Row } from 'react-bootstrap'

export const FormTenesCotizacion = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const { form, setInForm } = useForm({
        numero_cotizacion: '',
        email: '',
    })
    
    const validate = (form) => {
        const { numero_cotizacion, email } = form
        if (numero_cotizacion.length === 0) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Debe ingresar un número de cotización',
                showConfirmButton: false,
                timer: 1500,
            })
            return false
        } else if (email.length === 0) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Debe ingresar un email',
                showConfirmButton: false,
                timer: 1500,
            })
            return false
        }
        return true
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (validate(form)) {
        }
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
                <div className='tw-mt-8' id='contactanos'>
                    <form id='contact-form' onSubmit={submitForm} method='POST'>
                        <Row className='justify-content-md-center lg:tw-w-5/12 md:tw-w-8/12'>
                            <Col md={12}>
                                <label>
                                    Ingresá el email que utilizas para cotizar<span>*</span>
                                </label>
                                <TextInput {...form_shipment[1]} setInForm={setInForm} form={form} placeholder='Ej: email@dominio.com' />
                            </Col>
                            <Col md={12}>
                                <label>
                                    Ingresá el número de cotización<span>*</span>
                                </label>
                                <TextInput name='numero_cotizacion' type='number' setInForm={setInForm} form={form} placeholder='Ej: 3822' />
                            </Col>
                        </Row>
                        <Button
                            className='tw-w-[158px] tw-h-12 p-0 tw-self-end'
                            type='submit'
                        >
                            Continuar
                        </Button>
                    </form>
                </div>
            }
            {selectedOption === 'no' &&
                <div className='tw-self-end'>
                    <Link to='/cotiza'>
                        <Button
                            className='tw-w-[158px] tw-h-12 p-0'
                        >
                            Cotizar
                        </Button>
                    </Link>
                </div>
            }
        </div>
    );
};
