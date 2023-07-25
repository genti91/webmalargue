import React, { useState, useEffect, useLayoutEffect } from 'react'
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
import { useSearchParams } from 'react-router-dom'
import { getCotizacion } from './services/getCotizacion'
import { validateInputs } from './validateInputs'
import LocationSelect from '../LocationSelect/LocationSelect'
import { getTarifa } from './services/getTarifa'
import ResultadoCotizado from '../ResultadoCotizado/ResultadoCotizado'
const { Check } = Form

const FormCotizacion = (props) => {
  const [bultos, setBultos] = useState([])
  const [seguro, setSeguro] = useState(true)
  const [selectedBultos, setSelectedBultos] = useState([])
  const [searchParams] = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErorrs] = useState({})
  const [cotizacion, setCotizacion] = useState('')

  const ads = () => {
    if (searchParams.get('ads')) return true
  }

  const { form, setInForm, resetForm } = useForm({
    origin: '',
    destiny: '',
    originId: '',
    destinyId: '',
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

  const [tarifa, setTarifa] = useState([])

  useLayoutEffect(async () => {
    try {
      let res = await getTarifa()
      console.log(res)
      setTarifa(res)
    } catch (err) {
      console.log(err)
    }
  }, [])

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
    var isInvalid = formCotiza.some((input) => {
      if (!input.inputProps?.required) return false
      console.log(input.inputProps.name)
      console.log(form[input.inputProps?.name])
      return !form[input.inputProps?.name]
    })

    console.log(isInvalid)

    // si el form esta completo chequea que los campos sean validos
    if (!isInvalid){
      let errors = validateInputs(form)
      console.log('errors:',errors)
      setErorrs(errors)
      if (Object.keys(errors).length !== 0) isInvalid = true
    }

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

  const submitForm = async (e) => {
    e.preventDefault()
      console.log('form:',form)
    
    if (validate()) {
      setIsSubmitting(true)
      const tableTemplate = tableTemplateGenerator({
        columns: tableCotizaDictionary,
        dataSource: bultos,
      })
      form.page = 'Individuos'

      
      // llamada a la api de cotizacion y navegacion a la pagina de gracias con el mensaje de cotizacion
      getCotizacion({
        origen: form.originId,
        destino: form.destinyId,
        valorDeclarado: form?.valorDeclarado,
        ...tableTemplate
      })
      .then(
        (res) => {
            emailjs
              .send(
                'service_lv636bu',
                'template_kj69e2x',
                {
                  ...form,
                  seguro: seguro ? 'Si' : 'No',
                  ads: ads(),
                  tableTemplate,
                  cotizacion: res.msg,
                },
                'fRtOuVBrm3PpHzBca'
              )
            // Swal.fire({
            //   position: 'top',
            //   icon: 'success',
            //   title:
            //     'Recibirás una cotización dentro de las próximas 24hs hábiles',
            //   showConfirmButton: false,
            //   timer: 1500,
            // })
            setIsSubmitting(false)
            // envia por parametro el mensaje de cotizacion a el componente ThankYou.jsx
            setCotizacion(res.valorizo)
            //navigate('/gracias?type=cotizacion&msg=' + res.msg)
            //  resetForm()
          },
          (err) => {
            Swal.fire({
              position: 'top',
              icon: 'error',
              title: 'Error al enviar el formulario',
              showConfirmButton: false,
              timer: 1500,
            })
            setIsSubmitting(false)
            console.log('FAILED...', err)
          }
        )
    }
  }
  return (
    <section>
      <Row>
        <Container>
        { !cotizacion ? 
          <form id='contact-form' onSubmit={submitForm} method='POST' className='shadow form-container'>
            <Row className='justify-content-md-center'>
              <Col md={10}>
                <Row>
                  <Col xs={12} md={12} className='text-center'>
                    <h2>
                      Completá el formulario y te enviaremos la cotización
                    </h2>
                  </Col>
                  {formCotiza.map((item, index) => (
                    <Col {...item?.colSize} key={index}>
                      { item.inputProps.type === 'divisor' && <Col style={item.inputProps?.css}><label style={item.inputProps?.labelCss}>{item.name}</label></Col>}
                      {/* {item?.label && <label style={item.inputProps?.labelCss}>{item.label}</label>} */}
                      {item.inputProps.type.match(/text|select|email|tel/) && (
                        <>
                          {item.inputProps.name === 'origin' || item.inputProps.name === 'destiny' ? 
                            <LocationSelect
                              {...item.inputProps}
                              locations={item.inputProps.name === 'origin' ? tarifa.locOrigen : tarifa.locDestino}
                              setInForm={setInForm}
                              error={errors[item.inputProps.name]}
                              placeholder={item.label}
                            />
                            :
                            <>
                              {item.inputProps.type !== 'textarea' ? (
                                <TextInput
                                  {...item.inputProps}
                                  placeholder={item.label}
                                  setInForm={setInForm}
                                  form={form}
                                  setErorrs={setErorrs}
                                  errors={errors}
                                />
                              ) : (
                                <TextInputArea
                                  {...item.inputProps}
                                  setInForm={setInForm}
                                  form={form}
                                />
                              )}
                            </>
                          }
                        </>
                      )}
                      {item.inputProps.type === 'table' && (
                        <>
                          <Row className='justify-content-end'>
                            <Col md={12}>
                              <Row>
                                <FormAddBulto
                                  addBultoHandler={addBultoHandler}
                                  removeBultoHandler={removeBultoHandler}
                                />
                              </Row>
                            </Col>
                          <Col md={12}>
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
                          </Col>
                          </Row>
                        </>
                      )}
                      {item.inputProps.type.match(/radio|checkbox/) && (
                        <>
                          {/* <Check
                            {...item.inputProps}
                            form={form}
                            onChange={(e) => setSeguro(e.target.checked)}
                          /> */}
                          {true && (
                            <div className='d-flex'>
                            <TextInput
                              type='text'
                              name='valorDeclarado'
                              placeholder='Valor Declarado'
                              required
                              setInForm={setInForm}
                              form={form}
                            />
                            <div style={{backgroundColor: '#2F3394', marginBottom:'2rem', paddingLeft: '0.7rem', paddingRight:'0.7rem', color:'white', display:'flex', alignItems:'center'}}>$</div>
                            </div>
                          )}
                        </>
                      )}
                      {item.inputProps.type === 'submit' && (
                        <Row md={12} className='justify-content-center mt-2'>
                          <Col md={2}>
                            <input
                              {...item.inputProps}
                              disabled={isSubmitting}
                              style={{height:'3rem', lineHeight:'3rem', padding:'0', width:'100%'}}
                              value={
                                isSubmitting ? 'Cargando...' : item.inputProps.value
                              }
                            />
                          </Col>
                        </Row>
                      )}
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </form> :                           
          <ResultadoCotizado goBack={()=>{resetForm();setBultos([]);setCotizacion('')}} form={form} cotizacion={cotizacion} bultos={bultos} />
          }
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
