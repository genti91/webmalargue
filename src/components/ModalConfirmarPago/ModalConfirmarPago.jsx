import { Button, Modal } from 'react-bootstrap'
import { initMercadoPago } from '@mercadopago/sdk-react';
import { useEffect, useState } from 'react';
import { postPreference } from './services/postPreference';
import { useFormProtection } from '../../context/FormContext';

initMercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY, {
    locale: 'es-AR',
});

const ModalConfirmarPago = ({ show, setShow, cotizacion, id, datosRemitente, datosDestinatario }) => {
    const handleClose = () => {
        setShow(false)
        setPreferenceURL(null);
    }
    const [loading, setLoading] = useState(true);
    const [preferenceURL, setPreferenceURL] = useState(null);
    const { setFormInactive } = useFormProtection();

    useEffect(() => {
        const obtenerPreference = async () => {
            if (show && cotizacion.precioFinal && id) {
                try {
                    setLoading(true);
                    const res = await postPreference(cotizacion.precioFinal, id);
                    setPreferenceURL(res.init_point);
                } catch (err) {
                    console.error('Error al obtener preferenceId', err);
                } finally {
                    setLoading(false);
                }
            }
        };

        obtenerPreference();
    }, [show, cotizacion.precioFinal, id]);

    const storeDatos = () => {
        setFormInactive();
        localStorage.setItem('datosEnvio', JSON.stringify({cotizacion, remitente: datosRemitente, destinatario: datosDestinatario}));
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>¿Queres continuar con el pago?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Al confirmar, irás a la pasarela de pago.{' '}
                    <strong>No cierres esta pestaña hasta que vuelvas automáticamente a la web del Expreso Malargüe.</strong>
                </p>
            </Modal.Body>
            <Modal.Footer>
                {!loading ? (
                    <a href={preferenceURL}>
                        <Button onClick={storeDatos} className='tw-h-[38px] tw-w-[133px] p-0' style={{ backgroundColor: '#198754', border: '1px solid #198754' }}>
                            Confirmar
                        </Button>
                    </a>
                ) : (
                    <Button className='tw-h-[38px] tw-w-[133px] p-0' style={{ backgroundColor: '#198754', border: '1px solid #198754' }}>
                        <div className="spinner-border tw-text-green-800 mt-1" style={{ height: '20px', width: "20px" }} role="status" />
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    )
}
export default ModalConfirmarPago
