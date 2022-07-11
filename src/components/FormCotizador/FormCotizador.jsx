import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { useForm } from '../../hooks'
import TextInput from '../TextInput'
import TextInputArea from '../TextInputArea'
import { formCotiza } from './formCotiza'
import '../../pages/Cotiza/Cotiza.scss'
import TableComponent from '../TableComponent/TableComponent'
import { tableCotizaDictionary } from '../../pages/Cotiza/tableCotizaDictionary'
import FormAddBulto from './FormAddBulto'
import { tableTemplateGenerator } from '../../helpers/tableGenerator'
const { Check } = Form

const FormCotizacion = (props) => {
  const [bultos, setBultos] = useState([])
  const [seguro, setSeguro] = useState(false)
  const [selectedBultos, setSelectedBultos] = useState([])

  const { form, setInForm, resetForm } = useForm({
    origin: '',
    destiny: '',
    originCP: '',
    destinyCP: '',
    name: '',
    email: '',
    message: '',
    service: '',
    pago: '',
    tel: '',
    tableTemplate: '',
  })
  const navigate = useNavigate()

  const addBultoHandler = (newBulto) => {
    if (bultos.length === 10)
      return Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Límite alcanzado',
        text: 'Solo se pueden ingresar 10 bultos por cotización, por favor, de ser necesario realice otra.',
        showConfirmButton: false,
        timer: 1500,
      })
    setBultos([...bultos, newBulto])
  }

  const removeBultoHandler = () => {
    setBultos(bultos.filter((_bulto, index) => !selectedBultos.includes(index)))
    setSelectedBultos([])
  }

  const validate = () => {
    const isInvalid = formCotiza.some((input) => {
      if (!input.inputProps?.required) return false
      return !form[input.inputProps?.name]
    })
    if (isInvalid) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Por favor completa todos los campos',
        showConfirmButton: false,
        timer: 1500,
      })
      return false
    }
    if (!bultos.length) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Por favor, es necesario cargar al menos un bulto',
        showConfirmButton: false,
        timer: 1500,
      })
      return false
    }
    return true
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (validate()) {
      const tableTemplate = tableTemplateGenerator({
        columns: tableCotizaDictionary,
        dataSource: bultos,
      })
      form.page = 'Individuos'
      emailjs
        .send(
          'service_lv636bu',
          'template_kpseg54',
          {
            ...form,
            seguro: seguro ? 'Si' : 'No',
            tableTemplate,
          },
          'fRtOuVBrm3PpHzBca'
        )
        .then(
          () => {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title:
                'Recibirás una cotización dentro de las próximas 24hs hábiles',
              showConfirmButton: false,
              timer: 1500,
            })
            navigate('/gracias')
            resetForm()
          },
          (err) => {
            Swal.fire({
              position: 'top',
              icon: 'error',
              title: 'Error al enviar el formulario',
              showConfirmButton: false,
              timer: 1500,
            })
            console.log('FAILED...', err)
          }
        )
    }
  }
  return (
    <section>
      <Row>
        <Container>
          <form id='contact-form' onSubmit={submitForm} method='POST'>
            <Row className='justify-content-md-center'>
              <Col md={10}>
                <Row>
                  <Col xs={12} md={9}>
                    <h2>
                      Completá el formulario y te enviaremos la cotización
                    </h2>
                  </Col>
                  {formCotiza.map((item, index) => (
                    <Col {...item?.colSize} key={index}>
                      {item?.label && <label>{item.label}</label>}
                      {item.inputProps.type.match(/text|select|email|tel/) && (
                        <>
                          {item.inputProps.type !== 'textarea' ? (
                            <TextInput
                              {...item.inputProps}
                              setInForm={setInForm}
                              form={form}
                            />
                          ) : (
                            <TextInputArea
                              {...item.inputProps}
                              setInForm={setInForm}
                              form={form}
                            />
                          )}
                        </>
                      )}
                      {item.inputProps.type === 'table' && (
                        <>
                          <Row className='justify-content-end'>
                            <Col md={6}>
                              <Row
                                className='justify-content-around'
                                style={{
                                  marginRight: '10px',
                                  marginLeft: '10px',
                                }}
                              >
                                <FormAddBulto
                                  addBultoHandler={addBultoHandler}
                                />
                                <Button
                                  variant='danger'
                                  className='col-md-4'
                                  onClick={removeBultoHandler}
                                  style={{
                                    color: '#fff',
                                    backgroundColor: '#dc3545',
                                    borderColor: '#dc3545',
                                    marginTop: '10px',
                                  }}
                                >
                                  Quitar Bultos
                                </Button>
                              </Row>
                            </Col>
                          </Row>
                          <TableComponent
                            columns={{
                              seleccionar: (
                                <Check
                                  type='checkbox'
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      const selected = bultos.map(
                                        (_bulto, index) => index
                                      )
                                      setSelectedBultos(selected)
                                    } else setSelectedBultos([])
                                  }}
                                />
                              ),
                              ...tableCotizaDictionary,
                            }}
                            dataSource={bultos.map((row, index) => ({
                              ...row,
                              seleccionar: (
                                <Check
                                  type='checkbox'
                                  checked={selectedBultos.includes(index)}
                                  onChange={() => {
                                    if (selectedBultos.includes(index)) {
                                      const filteredBultos =
                                        selectedBultos.filter(
                                          (bulto) => bulto !== index
                                        )
                                      return setSelectedBultos(filteredBultos)
                                    }
                                    setSelectedBultos([
                                      ...selectedBultos,
                                      index,
                                    ])
                                  }}
                                />
                              ),
                            }))}
                          />
                        </>
                      )}
                      {item.inputProps.type.match(/radio|checkbox/) && (
                        <>
                          <Check
                            {...item.inputProps}
                            form={form}
                            onChange={(e) => setSeguro(e.target.checked)}
                          />
                          {seguro && (
                            <TextInput
                              type='text'
                              name='valorDeclarado'
                              placeholder='Valor Declarado'
                              required
                              setInForm={setInForm}
                              form={form}
                            />
                          )}
                        </>
                      )}
                      {item.inputProps.type === 'submit' && (
                        <input {...item.inputProps} />
                      )}
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </form>
          {/* <div dangerouslySetInnerHTML={{__html: tableTemplateGenerator({
              columns: tableCotizaDictionary,
              dataSource: bultos,
            })}} /> */}
        </Container>
      </Row>
    </section>
  )
}
export default FormCotizacion
