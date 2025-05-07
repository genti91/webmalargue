import { Button, Modal } from 'react-bootstrap'
import emailjs from 'emailjs-com'

const ErrorModal = ({ show, setShow, emailForm }) => {
    const handleClose = () => {
        setShow(false)
    }
    const sendEmail = () => {
        emailjs
            .send('service_lv636bu', 'template_v8q8x4j', emailForm, 'fRtOuVBrm3PpHzBca')
    }
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Algo salió mal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Tenemos problemas para validar tu cotización. Por favor escribinos para que podamos solucionar el inconveniente.</p>
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
export default ErrorModal
