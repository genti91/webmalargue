import { useState, useRef } from 'react';
import './FormTenesCotizacion.scss';
import { Button } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha';
import { getOportunidad } from './services/getOportunidad'
import { getProspecto } from './services/getProspecto'
import TitleTextInput from '../TextInputs/TitleTextInput'

import { useLoading } from '../../context/LoadingContext';
import { useGenera } from '../../context/GeneraContext';
import { postCotizacion, putLead, putProspecto } from '../FormCotizador/services/getCotizacion';
import { sendCotizacionEmail } from './services/sendCotizacionEmail';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const Form = ({ form, setInForm, setError, disableInputs }) => {
    const recaptchaRef = useRef(null);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [errors, setErrors] = useState({});
    const { setLoading } = useLoading();
    const { setCotizacion } = useGenera();

    let validarValorCotizacion = async (cotizacion) => {
        console.log('cotizacion', cotizacion)
        let datosCot = JSON.parse(cotizacion.observaciones)
        let newCotizacion = await postCotizacion(datosCot)
        console.log('newCotizacion', newCotizacion)
        console.log('old datosCot', datosCot)
        if (newCotizacion && newCotizacion.valorizo) {
            if (newCotizacion.valorizo != cotizacion.importeCotizado) {
                let newProspecto = await putProspecto(datosCot)
                let newLead = await putLead(datosCot, newProspecto, newCotizacion)
                console.log('newProspecto', newProspecto)
                console.log('newLead', newLead)
                sendCotizacionEmail(newLead.observaciones, newLead.res)
                return { cotizacion: newCotizacion, lead: newLead.res, oldCotizacion: cotizacion, observaciones: newLead.observaciones }
            }
        }
        return false
    }

    let storeCotizacion = async (cotizacion) => {
        let datosCot = JSON.parse(cotizacion.observaciones)
        let cleanCotizacion = {
            ...datosCot,
            id: cotizacion.idLead,
            precioFinal: cotizacion.importeCotizado.toLocaleString('de-DE', {
                maximumFractionDigits: 2
            }),
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

        let oldCotizacionID = localStorage.getItem('cotizacion_id')
        if (oldCotizacionID) {
            oldCotizacionID = await JSON.parse(oldCotizacionID)
            if (oldCotizacionID !== cleanCotizacion.id) {
                localStorage.removeItem('cotizacion_forms');
            }
        }


        localStorage.setItem('cotizacion', JSON.stringify(cleanCotizacion))
        localStorage.setItem('cotizacion_id', cleanCotizacion.id)
        setCotizacion(cleanCotizacion)
    }

    const submitForm = async (e) => {
        e.preventDefault()
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
            await storeCotizacion(oportunidad.data[0])
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
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
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
