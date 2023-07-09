import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { useForm } from '../../hooks'
import TextInput from '../TextInput'
import { tableCotizaDictionary } from '../../pages/Cotiza/tableCotizaDictionary'

const TituloGuia = {marginTop:"10px" , marginBottom:"-15px"};

const FormAddBulto = ({ addBultoHandler }) => {
  const [show, setShow] = useState(false)
  const { form, setInForm, resetForm } = useForm({})

  const handleClose = () => {
    resetForm()
    setShow(false)
  }
  const handleShow = () => setShow(true)

  const validateBulto = () => {
    const isInvalid = Object.keys(tableCotizaDictionary).some((key) => {
      if (key === 'seleccionar') return false
      return form?.[key] ? isNaN(form?.[key]) : true
    })
    if (isInvalid)
      return Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Por favor, ingrese valores válidos',
        text: `Todos los son requeridos, númericos y no pueden contener letras`,
        showConfirmButton: false,
        timer: 2500,
      })
    addBultoHandler(form)
    handleClose()
  }

  return (
    <>
      <Button variant='primary' className='col-md-4' onClick={handleShow}>
        Agregar Bulto
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div style={TituloGuia}>Cantidad de Bultos</div>
          <TextInput
            type='text'
            validation={/^[0-9]+$/}
            required
            name='cantBultos'
            placeholder='Cant. Bultos'
            value={form.cantBultos || ''}
            setInForm={setInForm}
            form={form}
          />
          <div style={TituloGuia}>Alto en cm</div>
          <TextInput
            type='text'
            validation={/^[0-9]+$/}
            required
            name='alto'
            placeholder='Alto (En CM, ej: 80cm)'
            value={form.alto || ''}
            setInForm={setInForm}
            form={form}
          />
          <div style={TituloGuia}>Ancho en cm</div>
          <TextInput
            type='text'
            validation={/^[0-9]+$/}
            required
            name='ancho'
            placeholder='Ancho (En CM, ej: 80cm)'
            value={form.ancho || ''}
            setInForm={setInForm}
            form={form}
          />
          <div style={TituloGuia}>Profundidad en cm</div>
          <TextInput
            type='text'
            validation={/^[0-9]+$/}
            required
            name='profundidad'
            placeholder='Profundidad (En CM, ej: 80cm)'
            value={form.profundidad || ''}
            setInForm={setInForm}
            form={form}
          />
          <div style={TituloGuia}>Peso en kg</div>
          <TextInput
            type='text'
            validation={/^[0-9]+$/}
            required
            name='peso'
            placeholder='Peso por bulto (KG)'
            value={form.peso || ''}
            setInForm={setInForm}
            form={form}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant='primary' onClick={validateBulto}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default FormAddBulto
