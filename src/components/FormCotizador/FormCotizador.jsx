import React, { useState, useEffect } from 'react'
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
import { set } from 'lodash'
const { Check } = Form

const FormCotizacion = (props) => {
  const [bultos, setBultos] = useState([])
  const [seguro, setSeguro] = useState(true)
  const [selectedBultos, setSelectedBultos] = useState([])
  const [searchParams] = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErorrs] = useState({})
  const [cotizacion, setCotizacion] = useState('')
  const [duplicateCP, setDuplicateCP] = useState([])
  const [showLocations, setShowLocations] = useState({})

  const ads = () => {
    if (searchParams.get('ads')) return true
  }

  const scrollTo = (id) => {
    var element = document.getElementById(id);
    var headerOffset = 150;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
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
    valorDeclarado: '',
    originOption: {},
    destinyOption: {},
  })

  const [tarifa, setTarifa] = useState([])

  useEffect(async () => {
    try {
      let res = await getTarifa()
      setTarifa(res)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const addBultoHandler = (newBulto) => {
    if (bultos.length === 10)
      return Swal.fire({
        position: 'middle',
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
    let emptyInputId = ''
    var isInvalid = formCotiza.some((input) => {
      if (!input.inputProps?.required) return false
      if (!form[input.inputProps?.name]) {
        setErorrs({[input.inputProps?.name]: 'Campo requerido' })
        emptyInputId = input.inputProps?.name
      }
      return !form[input.inputProps?.name]
    })

    let locationError = false;
    if (!isInvalid){
      let errors = validateInputs(form)
      setErorrs(errors)
      if (Object.keys(errors).length !== 0) isInvalid = true;
      let locationErrors = {destiny:'', destinyCP:'', origin:'', originCP:''}
      if (form.destinyId === '') {locationErrors = {...locationErrors, destiny: 'Campo requerido', destinyCP: 'Campo requerido' }; locationError = true; emptyInputId = 'destiny'}
      if (form.destinyCP != form.destinyOption.codigoPostal) {locationErrors = {...locationErrors, destiny: 'Campo requerido', destinyCP: 'Campo requerido' }; locationError = true; emptyInputId = 'destiny'}
      if (form.originId === '') {locationErrors = { ...locationErrors, origin: 'Campo requerido', originCP: 'Campo requerido' }; locationError = true; emptyInputId = 'origin'}
      if (form.originCP != form.originOption.codigoPostal) {locationErrors = { ...locationErrors, origin: 'Campo requerido', originCP: 'Campo requerido' }; locationError = true; emptyInputId = 'origin'}
      setErorrs({...errors, ...locationErrors})
    }

    if (isInvalid || locationError) {
      Swal.fire({
        position: 'middle',
        icon: 'error',
        title: locationError ? 'Por favor ingrese una localidad valida' : 'Por favor completa todos los campos',
        showConfirmButton: false,
        timer: 1500,
      })
      setTimeout(() => {
        scrollTo(emptyInputId)
      }, 1700);
      return false
      
    }
    if (!bultos.length) {
      Swal.fire({
        position: 'middle',
        icon: 'error',
        title: 'Por favor, es necesario cargar al menos un bulto',
        showConfirmButton: false,
        timer: 1500,
      })
      setTimeout(() => {
        scrollTo('addBultos')
      }, 1700);
      return false
    }
    return true
  }

  const submitForm = async (e) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitting(true)
      const tableTemplate = tableTemplateGenerator({
        columns: tableCotizaDictionary,
        dataSource: bultos,
      })
      form.page = 'Individuos'

      getCotizacion({
        ...form,
        ...tableTemplate
      })
      .then(
        (res) => {
          emailjs
            .send(
              'service_lv636bu',
              'template_sv96d5d',
              {
                ...form,
                service: form.service.charAt(0).toUpperCase() + form.service.slice(1),
                medidas: bultos.map((bulto) => `${bulto.alto}cm x ${bulto.ancho}cm x ${bulto.profundidad}cm`).join(" / "),
                cantidad: bultos.reduce((acc, bulto) => acc + Number(bulto.cantBultos),0),
                peso: bultos.reduce((acc, bulto) => acc + Number(bulto.peso),0),
                cotizacion: res.valorizo,
                idLead: res.idLead,
              },
              'fRtOuVBrm3PpHzBca'
            )
            setIsSubmitting(false)
            setCotizacion(res.valorizo)
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
                      {item?.label && <label style={item.inputProps?.labelCss}>{item.label}</label>}
                      {item.inputProps.type.match(/text|select|email|tel/) && (
                        <>
                          {item.inputProps.name === 'origin' || item.inputProps.name === 'destiny' || item.inputProps.name === 'originCP' || item.inputProps.name === 'destinyCP' ? 
                            <LocationSelect
                              {...item.inputProps}
                              locations={item.inputProps.name === 'origin' ? tarifa.locOrigen : tarifa.locDestino}
                              setInForm={setInForm}
                              form={form}
                              error={errors[item.inputProps.name]}
                              errors={errors}
                              placeholder={((item.inputProps.name === 'origin' || item.inputProps.name === 'destiny') && tarifa.length === 0 )? 'Cargando localidades' : item.label}
                              duplicateCP={duplicateCP}
                              setDuplicateCP={setDuplicateCP}
                              setShowLocations={setShowLocations}
                              showLocations={showLocations}
                              cp={item.inputProps.name === 'origin' || item.inputProps.name === 'destiny' ? false : true}
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
                              type='number'
                              name='valorDeclarado'
                              placeholder='Valor Declarado total'
                              required
                              setInForm={setInForm}
                              setErorrs={setErorrs}
                              errors={errors}
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
