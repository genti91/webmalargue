import { useState, useRef } from 'react';
import './FormTenesCotizacion.scss';
import { Button } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha';
import { getOportunidad } from './services/getOportunidad'
import { getProspecto } from './services/getProspecto'
import TitleTextInput from '../TextInputs/TitleTextInput'
import { validateRecaptchaToken } from './services/validateRecaptcha';
import { useLoading } from '../../context/LoadingContext';
import { useGenera } from '../../context/GeneraContext';
import { postCotizacion, putLead, putProspecto } from '../FormCotizador/services/getCotizacion';
import { sendCotizacionEmail } from './services/sendCotizacionEmail';
import { useFormProtection } from '../../context/FormContext';
const { REACT_APP_RECAPTCHA_SITE_KEY } = process.env

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

export const Form = ({ form, setInForm, setError, disableInputs }) => {
    const recaptchaRef = useRef(null);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [errors, setErrors] = useState({});
    const { setLoading } = useLoading();
    const { setCotizacion } = useGenera();
    const { setFormActive } = useFormProtection();

    let validarValorCotizacion = async (cotizacion) => {
        try {
            let datosCot = JSON.parse(cotizacion.observaciones)
            let newCotizacion = await postCotizacion(datosCot)
            if (newCotizacion && newCotizacion.valorizo) {
                if ((newCotizacion.msg && newCotizacion.msg.includes('Ups!')) || newCotizacion.valorizo == 0) {
                    throw new Error('ERROR COTIZACION ' + newCotizacion.msg);
                }
                const valorNuevo = parseFloat(newCotizacion.valorizo).toFixed(2);
                const valorOriginal = parseFloat(cotizacion.importeCotizado).toFixed(2);
                if (valorNuevo !== valorOriginal) {
                    let newProspecto = await putProspecto(datosCot)
                    let newLead = await putLead(datosCot, newProspecto, newCotizacion)
                    sendCotizacionEmail(newLead.observaciones, newLead.res)
                    return { cotizacion: newCotizacion, lead: newLead.res, oldCotizacion: cotizacion, observaciones: newLead.observaciones }
                }
            }
            return false
        } catch (error) {
            throw new Error('OBSERVERCION PARSE ERROR ' + error);
        }
    }

    let validarDeposito = async (observaciones) => {
        observaciones = await JSON.parse(observaciones)
        return observaciones.localidadOrigen.toLowerCase().includes('sucursal') || observaciones.localidadOrigen.toLowerCase().includes('deposito')
    }

    let storeCotizacion = async (cotizacion) => {
        let datosCot = JSON.parse(cotizacion.observaciones)
        let cleanCotizacion = {
            ...datosCot,
            id: cotizacion.idLead,
            remitente: {
                provincia: datosCot.provinciaOrigen,
                localidad: datosCot.localidadOrigen,
                cp: datosCot.cpOrigen,
            },
            destinatario: {
                provincia: datosCot.provinciaDestino,
                localidad: datosCot.localidadDestino,
                cp: datosCot.cpDestino,
            },
            bultos: {
                valorDeclarado: datosCot.valorDeclarado,
                descripcion: datosCot.descripcionBultos,
                bultos: datosCot.arrayBultos
            }
        }
        setCotizacion(cleanCotizacion)
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            
            const recaptchaResult = await validateRecaptchaToken(recaptchaToken);
            
            if (!recaptchaResult.valid) {
                setError({
                    type: 'API CRISTAL',
                    payload: recaptchaResult.error || 'Error de validación de reCAPTCHA'
                });
                recaptchaRef.current?.reset();
                setRecaptchaToken(null);
                return;
            }

            let oportunidad = await getOportunidad(form.numero_cotizacion)
            if (!oportunidad.data || oportunidad.data.length === 0) {
                setError({
                    type: 'ENLACE MANIPULADO',
                    payload: form.numero_cotizacion,
                })
                return
            }
            if (!validarVigenciaCotizacion(oportunidad.data[0].creacion)) {
                setError({
                    type: 'NO VIGENTE',
                    payload: oportunidad.data.creacion,
                })
                return
            }
            let prospecto = await getProspecto(oportunidad.data[0].idProspecto, form.email)
            if (!prospecto.data || prospecto.data.length === 0) {
                setError({
                    type: 'ENLACE MANIPULADO',
                    payload: form.numero_cotizacion,
                })
                return
            }
            let nuevaCotizacion = await validarValorCotizacion(oportunidad.data[0])
            if (nuevaCotizacion) {
                setError({
                    type: 'IMPORTE INVALIDO',
                    payload: nuevaCotizacion,
                })
                return
            }
            let esDeposito = await validarDeposito(oportunidad.data[0].observaciones)
            if (esDeposito) {
                let obs = await JSON.parse(oportunidad.data[0].observaciones)
                setError({
                    type: 'DEPOSITO',
                    payload: {obs, leadId: form.numero_cotizacion},
                })
                return
            }
            setFormActive('solicitud de retiro');
            await storeCotizacion(oportunidad.data[0])
        } catch (error) {
            console.error('Error al obtener el prospecto:', error)
            if (error.message.includes('OBSERVERCION PARSE ERROR')) {
                setError({
                    type: 'OBSERVERCION PARSE ERROR',
                    payload: error.message,
                })
                return
            }
            setError({
                type: 'API CRISTAL',
                payload: JSON.stringify(error),
            })
            return
        } finally {
            setLoading(false)
        }
    }

    const setInformWithValidation = (key, value) => {
        setInForm(key, value)
        if (key === 'email' && !EMAIL_REGEX.test(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Ingresá un email válido (ej.: tuemail@dominio.com)'
            }))
        } else if (key === 'numero_cotizacion' && value.length < 4) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                numero_cotizacion: 'Tenes que ingresar al menos 4 números (ej. 3822)'
            }))
        } else {
            setErrors((prevErrors) => {
                const { [key]: _, ...rest } = prevErrors;
                return rest;
            });
        }
    }

    return (
        <div className='tw-mt-[12px]'>
            <form onSubmit={submitForm} method='POST' className='tw-flex tw-flex-col tw-gap-[36px]'>
                <Row className='justify-content-md-center tw-gap-[36px] lg:tw-w-5/12 md:tw-w-8/12'>
                    <Col md={12}>
                        <TitleTextInput
                            title='Ingresá el email que utilizas para cotizar'
                            placeholder='Ej: email@dominio.com'
                            input={form.email}
                            setInput={(value) => setInformWithValidation('email', value)}
                            mandatory
                            error={errors.email}
                            disabled={disableInputs}
                        />
                    </Col>
                    <Col md={12}>
                        <TitleTextInput
                            title='Ingresá el número de cotización'
                            placeholder='Ej: 3822'
                            input={form.numero_cotizacion}
                            setInput={(value) => setInformWithValidation('numero_cotizacion', value)}
                            mandatory
                            error={errors.numero_cotizacion}
                            numeric
                            disabled={disableInputs}
                        />
                    </Col>
                </Row>
                <ReCAPTCHA
                    sitekey={REACT_APP_RECAPTCHA_SITE_KEY}
                    onChange={token => setRecaptchaToken(token)}
                    ref={recaptchaRef}
                />
                <Button
                    className='tw-ml-auto md:tw-w-[158px] tw-w-full tw-h-12 p-0 tw-self-end tw-mt-[12px]'
                    type='submit'
                    disabled={!recaptchaToken || form.numero_cotizacion.length === 0 || form.email.length === 0 || errors.email || errors.numero_cotizacion}
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
