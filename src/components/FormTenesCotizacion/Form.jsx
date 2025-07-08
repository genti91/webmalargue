import { useState, useRef } from 'react';
import './FormTenesCotizacion.scss';
import { Button } from 'react-bootstrap';
import TextInput from '../TextInput'
import { Col, Row } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha';
import { getOportunidad } from './services/getOportunidad'
import { getProspecto } from './services/getProspecto'
import TitleTextInput from '../TextInputs/TitleTextInput'

import { useLoading } from '../../context/LoadingContext';
import { useGenera } from '../../context/GeneraContext';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const Form = ({ form, setInForm, setError, disableInputs }) => {
    const recaptchaRef = useRef(null);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [errors, setErrors] = useState({});
    const { setLoading } = useLoading();
    const { setCotizacion } = useGenera();

    let storeCotizacion = async (cotizacion) => {
        cotizacion = {
            "idLead": cotizacion.id || '3822',
            "importeCotizado": 12300.3199999999997089616954326629638671875,
            "observaciones": "{\"provOrigen\":\"Buenos Aires\",\"provDestino\":\"Buenos Aires\",\"locOrigen\":\"(1619) GARIN\",\"locDestino\":\"(1640) MARTINEZ\",\"cpOrigen\":1619,\"cpDestino\":1640,\"kilosReales\":1,\"metrosCubicos\":0.0017,\"bultos\":1,\"valorDeclarado\":\"5000\"}",
        }
        let datosCot = JSON.parse(cotizacion.observaciones)
        let valorOriginal = (cotizacion.importeCotizado / 1.2221)
        let cleanCotizacion = {
            id: cotizacion.idLead,
            precioFinal: cotizacion.importeCotizado.toLocaleString('de-DE', {
                maximumFractionDigits: 2
            }),
            //TODO: poner porcentaje de IVA como variable de entorno y validar el seguro
            iva: (valorOriginal * 0.21).toLocaleString('de-DE', {
                maximumFractionDigits: 2
            }),
            seguro: (valorOriginal * 0.01).toLocaleString('de-DE', {
                maximumFractionDigits: 2
            }),
            valorOriginal: valorOriginal.toLocaleString('de-DE', {
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
                descripcion: 'descripcion del bulto',
                bultos: [{cantBultos:'1', peso: '21', ancho: '11', alto: '34', profundidad: '22'},
                    {cantBultos:'2', peso: '12', ancho: '31', alto: '22', profundidad: '12'},
                ],
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
        storeCotizacion({id: form.numero_cotizacion})
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
