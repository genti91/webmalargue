import { useState } from 'react'
import { Button, Modal, Col, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { useForm } from '../../hooks'
import TextInput from '../TextInput'
import { tableCotizaDictionary } from '../../pages/Cotiza/tableCotizaDictionary'

const TituloGuia = {marginTop:"10px" , marginBottom:"-15px"};
const unitCss = {backgroundColor: '#2F3394', marginBottom:'2rem', paddingLeft: '0.7rem', paddingRight:'0.7rem', color:'white', display:'flex', alignItems:'center'}

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
      {/* <Button variant='primary' className='col-md-5' onClick={handleShow} style={{padding: '15px'}}>
        Agregar Bulto
      </Button> */}
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Body> */}
        <Row className="justify-content-center">
          <Col md={2}>
            {/* <div style={TituloGuia}>Cantidad de Bultos</div> */}
            <TextInput
              type='text'
              validation={/^[0-9]+$/}
              required
              name='cantBultos'
              placeholder='cantidad'
              value={form.cantBultos || ''}
              setInForm={setInForm}
              form={form}
            />
          </Col>
          <Col md={2} className='d-flex'>
            {/* <div style={TituloGuia}>Peso en kg</div> */}
            <TextInput
              type='text'
              validation={/^[0-9]+$/}
              required
              name='peso'
              placeholder='Peso en KG'
              value={form.peso || ''}
              setInForm={setInForm}
              form={form}
            />
            <div style={unitCss}>kg</div>
          </Col>
          <Col md={2} className='d-flex'>
            {/* <div style={TituloGuia}>Ancho en cm</div> */}
            <TextInput
              type='text'
              validation={/^[0-9]+$/}
              required
              name='ancho'
              placeholder='Ancho'
              value={form.ancho || ''}
              setInForm={setInForm}
              form={form}
            />
            <div style={unitCss}>cm</div>
          </Col>
          <Col md={2} className='d-flex'>
            {/* <div style={TituloGuia}>Alto en cm</div> */}
            <TextInput
              type='text'
              validation={/^[0-9]+$/}
              required
              name='alto'
              placeholder='Alto'
              value={form.alto || ''}
              setInForm={setInForm}
              form={form}
            />
            <div style={unitCss}>cm</div>
          </Col>
          <Col md={2} className='d-flex'>
            {/* <div style={TituloGuia}>Profundidad en cm</div> */}
            <TextInput
              type='text'
              validation={/^[0-9]+$/}
              required
              name='profundidad'
              placeholder='Largo'
              value={form.profundidad || ''}
              setInForm={setInForm}
              form={form}
            />
            <div style={unitCss}>cm</div>
          </Col>
        </Row>
        <Button variant='primary' className='col-md-5' onClick={validateBulto} style={{padding: '15px'}}>
          Agregar Bulto
        </Button>
        {/* </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={validateBulto}>
            Guardar
            </Button>
            <Button variant='secondary' onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  )
}
export default FormAddBulto
