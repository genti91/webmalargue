import { Button, Modal } from 'react-bootstrap'

const ModalConfirmarPago = ({ show, setShow }) => {
    const handleClose = () => {
        setShow(false)
    }
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>¿Queres continuar con el pago?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Al confirmar, irás a la pasarela de pago. Tené en cuenta que la orden de retiro sólo se generará si el pago se completa correctamente.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button className='tw-h-[38px] tw-w-[133px] p-0' style={{ backgroundColor: '#198754', border: '1px solid #198754' }}>
                    Confirmar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalConfirmarPago
