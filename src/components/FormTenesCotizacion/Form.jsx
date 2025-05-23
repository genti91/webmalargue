import { useState, useRef } from 'react';
import './FormTenesCotizacion.scss';
import { Button } from 'react-bootstrap';
import TextInput from '../TextInput'
import { Col, Row } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha';
import { getOportunidad } from './services/getOportunidad'
import { getProspecto } from './services/getProspecto'

import { useLoading } from '../../context/LoadingContext';
import { useGenera } from '../../context/GeneraContext';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const Form = ({ form, setInForm, setError, disableInputs }) => {
    const recaptchaRef = useRef(null);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [errors, setErrors] = useState({});
    const { setLoading } = useLoading();
    const { setCotizacion } = useGenera();

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

    let storeCotizacion = async (cotizacion) => {
        cotizacion = {
            "idLead": 4924,
            "importeCotizado": 12300.3199999999997089616954326629638671875,
            "observaciones": "{\"provOrigen\":\"Buenos Aires\",\"provDestino\":\"Buenos Aires\",\"locOrigen\":\"(1619) GARIN\",\"locDestino\":\"(1640) MARTINEZ\",\"cpOrigen\":1619,\"cpDestino\":1640,\"kilosReales\":1,\"metrosCubicos\":0.0017,\"bultos\":1,\"valorDeclarado\":\"5000\"}",
        }
        let datosCot = JSON.parse(cotizacion.observaciones)
        let cleanCotizacion = {
            id: cotizacion.idLead,
            precioFinal: cotizacion.importeCotizado.toLocaleString('de-DE', {
                maximumFractionDigits: 2
            }),
            remitente: {
                provincia: datosCot.provOrigen,
                localidad: datosCot.locOrigen,
                cp: datosCot.cpOrigen,
            },
            destinatario: {
                provincia: datosCot.provDestino,
                localidad: datosCot.locDestino,
                cp: datosCot.cpDestino,
            },
            bultos: {
                //TODO: agregar lista de bultos y descripcion
                valorDeclarado: datosCot.valorDeclarado,
            }
        }

        let oldCotizacion = localStorage.getItem('cotizacion')
        if (oldCotizacion) {
            oldCotizacion = await JSON.parse(oldCotizacion)
            if (oldCotizacion.id !== cleanCotizacion.id) {
                localStorage.removeItem('cotizacion_forms');
            }
        }


        localStorage.setItem('cotizacion', JSON.stringify(cleanCotizacion))
        setCotizacion(cleanCotizacion)
    }

    const submitForm = async (e) => {
        e.preventDefault()
        if (!validate(form)) return
        storeCotizacion('')
        return
        try {
            setLoading(true)
            let oportunidad = await getOportunidad(form.numero_cotizacion)
            if (!oportunidad.data || oportunidad.data.length === 0) {
                setError({
                    type: 'ENLACE MANIPULADO',
                    payload: form.numero_cotizacion,
                })
                return
            }
            if (validarVigenciaCotizacion(oportunidad.data[0].creacion)) {
                setError({
                    type: 'NO VIGENTE',
                    payload: oportunidad.data.creacion,
                })
                return
            }
            let prospecto = await getProspecto(form.numero_cotizacion, form.email)
            if (!prospecto.data || prospecto.data.length === 0) {
                setError({
                    type: 'ENLACE MANIPULADO',
                    payload: form.numero_cotizacion,
                })
                return
            }
            storeCotizacion(oportunidad.data[0])
        } catch (error) {
            console.error('Error al obtener el prospecto:', error)
            setError({
                type: 'API CRISTAL',
                payload: JSON.stringify(error),
            })
            return
        } finally {
            setLoading(false)
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
                        <TextInput
                            disabled={disableInputs}
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
                            disabled={disableInputs}
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
