import { Modal, Button } from 'react-bootstrap';

export const ConfirmNavigationModal = ({ show, onHide, onConfirm, formType }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>¿Estás seguro de salir?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Vas a abandonar el formulario de {formType} y se perderá toda la información que ingresaste hasta ahora.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='tw-h-[38px] tw-w-[62px] p-0' style={{ backgroundColor: '#6C757D', border: '1px solid #6C757D' }} onClick={onConfirm}>
          Salir
        </Button>
        <Button className='tw-h-[38px] tw-w-[78px] p-0' onClick={onHide}>
          Seguir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};