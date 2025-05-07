import { useState, useRef } from 'react';
import './FormTenesCotizacion.scss';
import { Button } from 'react-bootstrap';
import TextInput from '../TextInput'
import { Col, Row } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha';
import { getOportunidad } from './services/getOportunidad'
import { getProspecto } from './services/getProspecto'

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const Form = ({ form, setInForm, setError }) => {
    const recaptchaRef = useRef(null);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [errors, setErrors] = useState({});

    const validate = (form) => {
        const { numero_cotizacion, email } = form
        let errors = {}
        if (numero_cotizacion.length < 4) {
            errors.numero_cotizacion = 'Tenes que ingresar al menos 4 números (ej. 3822)'
        } else if (!EMAIL_REGEX.test(email)) {
            errors.email = 'Ingresá un email válido (ej.: tuemail@dominio.com)'
        }

        setErrors(errors)
        if (Object.keys(errors).length > 0) {
            return false
        }
        return true
    }

    const submitForm = async (e) => {
        e.preventDefault()
        if (!validate(form)) return
        try {
            // TODO: Agregar loading
            let oportunidad = await getOportunidad(form.numero_cotizacion)
            if (validarVigenciaCotizacion(oportunidad.data.creacion)) {
                setError(true)
                return
            }
            let prospecto = await getProspecto(form.numero_cotizacion, form.email)
            if (!prospecto.data) {
                setError(true)
                return
            }
            // TODO: Guardar el prospecto para usarlo en el siguiente paso
        } catch (error) {
            console.error('Error al obtener el prospecto:', error)
            // TODO: Mostrar modal con mensaje de error
            return
        }
    }

    return (
        <div className='tw-mt-8' id='contactanos'>
            <form id='contact-form' onSubmit={submitForm} method='POST' className='tw-flex tw-flex-col'>
                <Row className='justify-content-md-center lg:tw-w-5/12 md:tw-w-8/12'>
                    <Col md={12}>
                        <label>
                            Ingresá el email que utilizas para cotizar<span>*</span>
                        </label>
                        <TextInput value={form.email} error={errors.email} name="email" setInForm={setInForm} form={form} placeholder='Ej: email@dominio.com' />
                    </Col>
                    <Col md={12}>
                        <label>
                            Ingresá el número de cotización<span>*</span>
                        </label>
                        <TextInput value={form.numero_cotizacion} error={errors.numero_cotizacion} name='numero_cotizacion' type='number' setInForm={setInForm} form={form} placeholder='Ej: 3822' />
                    </Col>
                </Row>
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={token => setRecaptchaToken(token)}
                    ref={recaptchaRef}
                />
                <Button
                    className='tw-ml-auto tw-mt-7 tw-w-[158px] tw-h-12 p-0 tw-self-end'
                    type='submit'
                    disabled={!recaptchaToken || form.numero_cotizacion.length === 0 || form.email.length === 0}
                >
                    Continuar
                </Button>
            </form>
        </div>
    );
};

function validarVigenciaCotizacion(creacionStr) {
    function sumarDiasHabiles(fecha, diasHabiles) {
        let resultado = new Date(fecha);
        let sumados = 0;
        while (sumados < diasHabiles) {
            resultado.setDate(resultado.getDate() + 1);
            const dia = resultado.getDay();
            if (dia !== 0 && dia !== 6) sumados++;
        }
        return resultado;
    }
    const fechaCreacion = new Date(creacionStr.replace(' ', 'T'));
    const fechaLimite = sumarDiasHabiles(fechaCreacion, 7);
    const hoy = new Date();
    return hoy <= fechaLimite;
}
