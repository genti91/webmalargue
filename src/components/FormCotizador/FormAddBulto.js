import { useEffect, useState } from 'react'
import { Button, Modal, Col, Row, Container } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { useForm } from '../../hooks'
import TextInput from '../TextInput'
import { tableCotizaDictionary } from '../../pages/Cotiza/tableCotizaDictionary'

const unitCss = {backgroundColor: '#2F3394', marginBottom:'2rem', paddingLeft: '0.7rem', paddingRight:'0.7rem', color:'white', display:'flex', alignItems:'center'}
const maxUnitCss = {color:'#2F3394',marginTop:'-2rem', marginLeft:'0.5rem', fontSize:'0.8rem'}

const FormAddBulto = ({ addBultoHandler, removeBultoHandler }) => {
  const { form, setInForm, resetForm } = useForm({})
  const [bulto, setBulto] = useState({cantBultos:'', peso:'', ancho:'', alto:'', profundidad:''})
  const maxProfundidad = 1400;
  const maxAnchoAlto = 250;


  const validateBulto = () => {
    const isInvalid = Object.keys(tableCotizaDictionary).some((key) => {
      if (key === 'seleccionar') return false
      console.log(key)
      return form?.[key] ? (isNaN(form?.[key]) ? true : (((key === 'alto' || key === 'ancho') && form?.[key] > maxAnchoAlto) || (key === 'profundidad' && form?.[key] > maxProfundidad) ? true : false)) : true
    })
    if (isInvalid)
      return Swal.fire({
        position: 'middle',
        icon: 'error',
        title: 'Por favor, ingrese valores válidos',
        text: `Todos los son requeridos, númericos y no pueden contener letras`,
        showConfirmButton: false,
        timer: 2500,
      })
    addBultoHandler(form)
    resetForm()
    setBulto({cantBultos:'', peso:'', ancho:'', alto:'', profundidad:''})
  }

  useEffect(() => {
    setBulto({...bulto, ...form})
  }, [form])

  return (
    <Container>
        <Row sm={12} className="justify-content-center">
          <Col sm={3}>
            <TextInput
              type='text'
              validation={/^[0-9]+$/}
              required
              name='cantBultos'
              placeholder='cantidad'
              value={bulto.cantBultos}
              setInForm={setInForm}
              form={form}
            />
          </Col>
          <Col className='d-flex' sm={3}>
            <TextInput
              type='text'
              validation={/^[0-9]+$/}
              required
              name='peso'
              placeholder='Peso en KG unitario'
              value={bulto.peso}
              setInForm={setInForm}
              form={form}
            />
            <div style={unitCss}>kg</div>
          </Col>
          <Col sm={2}>
            <div className='d-flex'>
              <TextInput
                type='text'
                validation={/^[0-9]+$/}
                required
                name='ancho'
                placeholder='Ancho unitario'
                value={bulto.ancho}
                setInForm={setInForm}
                form={form}
              />
              <div style={unitCss}>cm</div>
            </div>
            <div style={maxUnitCss}>*250 cm max.</div>
          </Col>
          <Col sm={2}>
            <div className='d-flex'>
              <TextInput
                type='text'
                validation={/^[0-9]+$/}
                required
                name='alto'
                placeholder='Alto unitario'
                value={bulto.alto}
                setInForm={setInForm}
                form={form}
              />
              <div style={unitCss}>cm</div>
            </div>
            <div style={maxUnitCss}>*250 cm max.</div>
          </Col>
          <Col>
            <div className='d-flex' sm={2}>
              <TextInput
                type='text'
                validation={/^[0-9]+$/}
                required
                name='profundidad'
                placeholder='Largo unitario'
                value={bulto.profundidad}
                setInForm={setInForm}
                form={form}
              />
              <div style={unitCss}>cm</div>
            </div>
            <div style={maxUnitCss}>*1400 cm max.</div>
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
