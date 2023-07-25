import { useState } from 'react'
import { Button, Modal, Col, Row, Container } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { useForm } from '../../hooks'
import TextInput from '../TextInput'
import { tableCotizaDictionary } from '../../pages/Cotiza/tableCotizaDictionary'

const unitCss = {backgroundColor: '#2F3394', marginBottom:'2rem', paddingLeft: '0.7rem', paddingRight:'0.7rem', color:'white', display:'flex', alignItems:'center'}

const FormAddBulto = ({ addBultoHandler, removeBultoHandler }) => {
  const { form, setInForm, resetForm } = useForm({})

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
    resetForm()
  }

  return (
    <Container>
        <Row md={12} className="justify-content-center">
          <Col xs={2}>
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
          <Col className='d-flex'  xs={2}>
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
          <Col className='d-flex'>
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
          <Col className='d-flex'>
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
          <Col className='d-flex'>
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
        <Row className="justify-content-center gap-3">
          <Button variant='primary' className='col-md-2' onClick={validateBulto} style={{ backgroundColor:'#419246', borderColor:'#419246', height:'3rem', lineHeight:'3rem', padding:'0'}}>
            AGREGAR BULTOS
          </Button>
          <Button
            variant='danger'
            className='col-md-2'
            onClick={removeBultoHandler}
            style={{
              color: '#fff',
              backgroundColor: '#dc3545',
              borderColor: '#dc3545',
              height:'3rem',
              lineHeight:'3rem',
              padding:'0'
            }}
          >
            QUITAR BULTOS
          </Button>
        </Row>
    </Container>
  )
}
export default FormAddBulto
