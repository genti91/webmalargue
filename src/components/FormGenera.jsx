import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { useForm } from '../hooks'
import TextInput from './TextInput'
import { form_shipment } from '../constant/forms'
import TextInputArea from './TextInputArea'
import '../pages/GeneraEnvio/Genera'

const FormGenera = (props) => {
  const { form, setInForm } = useForm({
    origin: '',
    destiny: '',
    name: '',
    email: '',
    message: '',
    service: '',
    pago: '',
    seguro: '',
  })
  let history = useNavigate()
  const resetForm = () => {
    setInForm({
      name: '',
      email: '',
      tel: '',
      origin: '',
      destiny: '',
      message: '',
      service: '',
      pago: '',
      seguro: '',
    })
  }
  const validate = (form) => {
    const {
      origin,
      destiny,
      name,
      email,
      tel,
      message,
      service,
      pago,
      seguro,
    } = form
    if (name.length === 0) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Debe ingresar un nombre',
        showConfirmButton: false,
        timer: 1500,
      })
      return false
    } else if (email.length === 0) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Debe ingresar un email',
        showConfirmButton: false,
        timer: 1500,
      })
      return false
    } else if (tel?.length === 0) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Debe ingresar un teléfono',
        showConfirmButton: false,
        timer: 1500,
      })
      return false
    } else if (message.length === 0) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Debe ingresar un mensaje',
        showConfirmButton: false,
        timer: 1500,
      })
      return false
    }
    return true
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (validate(form)) {
      form.page = 'Individuos'
      emailjs
        .send(
          'service_vv6p4ni',
          'template_0xseu89',
          form,
          'user_EpLgdCxfdM9GfQOvqBiSt'
        )
        .then(
          (response) => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Formulario enviado correctamente',
              showConfirmButton: false,
              timer: 1500,
            })
            history('/')
            resetForm()
          },
          (err) => {
            Swal.fire({
              position: 'center',
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
                      Completá el formulario y nos pondremos en contacto con vos
                    </h2>
                  </Col>
                  <Col md={6}>
                    <label>Nombre Remitente</label>
                    <TextInput
                      {...form_shipment[0]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={6}>
                    <label>Email</label>
                    <TextInput
                      {...form_shipment[1]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={6}>
                    <label>Teléfono Remitente</label>
                    <TextInput
                      {...form_shipment[2]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={6}>
                    <label>Origen</label>
                    <TextInput
                      {...form_shipment[3]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={6} >
                    <label>Destino</label>
                    <TextInput
                      {...form_shipment[4]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col xs={12}>
                    <label>Tipo de servicio</label>
                    <TextInput
                      {...form_shipment[9]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={6}>
                    <label>Horarios de retiro (Rangos)</label>
                    <TextInput
                      {...form_shipment[12]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={6}>
                    <label>Nombre Destinatario</label>
                    <TextInput
                      {...form_shipment[13]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={6}>
                    <label>Teléfono Destinatario</label>
                    <TextInput
                      {...form_shipment[14]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={6}>
                    <label>Bultos</label>
                    <TextInput
                      {...form_shipment[15]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={6}>
                    <label>Peso</label>
                    <TextInput
                      {...form_shipment[16]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={6}>
                    <label>Medidas</label>
                    <TextInput
                      {...form_shipment[17]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={6}>
                    <label>Valor declarado</label>
                    <TextInput
                      {...form_shipment[18]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={6}>
                    <label>Razón Social</label>
                    <TextInput
                      {...form_shipment[19]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={6} >
                    <label>Cuit</label>
                    <TextInput
                      {...form_shipment[20]}
                      setInForm={setInForm}
                      form={form}
                    />
                  </Col>
                  <Col md={12}>
                    <label>Tu mensaje</label>
                    <TextInputArea
                      {...form_shipment[form_shipment.length - 1]}
                      setInForm={setInForm}
                      form={form}
                    />
                    {/* <span className="helper_text">
                        *Recordá completar todos los campos del formulario.
                      </span> */}
                    <Row
                      className='justify-content-end'
                    >
                      <Col
                        md={2}
                      >
                        <input
                          type='submit'
                          className='btn btn-primary bg-primary'
                          value='Generá tu retiro'
                          style={{
                            outline: 'none',
                            border: 'none',
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        </Container>
      </Row>
    </section>
  )
}
export default FormGenera
