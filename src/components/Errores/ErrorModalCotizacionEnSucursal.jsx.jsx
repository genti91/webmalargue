import { Button, Modal } from 'react-bootstrap'
import { sendEmailCotiSucursal } from '../FormCotizador/services/sendEmailCotiSucursal'

const ErrorModalCotizacionEnSucursal = ({ show, setShow, payload }) => {
    const handleClose = () => {
        setShow(false)
    }
    const sendEmail = () => {
        sendEmailCotiSucursal(payload.obs, payload.leadId)
    }
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>No es posible generar el retiro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>La cotización ingresada tiene origen en una sucursal o depósito. En estos casos, no se coordina el retiro, debés llevar el bulto personalmente. Si tenés dudas, escribinos y te ayudamos.</p>
            </Modal.Body>
            <Modal.Footer>
                <a
                    href='https://wa.me/5491163622778'
                    target='_blank'
                    rel='noreferrer'
                >
                    <Button className='tw-h-[38px] tw-w-[133px] p-0' onClick={sendEmail}>
                        Contactanos
                    </Button>
                </a>
            </Modal.Footer>
        </Modal>
    )
}
export default ErrorModalCotizacionEnSucursal
