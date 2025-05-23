import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import './ResultadoCotizado.scss'
import { useEffect } from 'react'

const ResultadoCotizado = (props) => {
  let medidas = []
  let cantidad = 0
  let peso = 0
  props.bultos.forEach(bulto => {
    cantidad += Number(bulto.cantBultos)
    peso += Number(bulto.peso) * Number(bulto.cantBultos)
    medidas.push((`${bulto.alto}cm x ${bulto.ancho}cm x ${bulto.profundidad}cm`) + (bulto.cantBultos > 1 ? ` (${bulto.cantBultos})` : ''))
  })
  
  useEffect(() => {
    var element = document.getElementById('ResultadoCotizado');
    var headerOffset = 65;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  }, [])

  return(
    <Container id='ResultadoCotizado'>
      <Row className='shadow'>
        <Col sm={3} className="imageContainer">
          <img src="assets/PackageBox.png" alt="" className="boxImage"/>
        </Col>
        <Col className="p-4">
          <Row>
            <h1>TU COTIZACIÓN</h1>
          </Row>
          <Row className='p-4 d-flex-row justify-content-center gap-4'>
            <Col md={3}>
              <Row className='mb-4'>
                <Row className='d-inline'>
                  <span className='cotiKey'>BULTOS:</span><span className='cotiValue'>{cantidad}</span>
                </Row>
              </Row>
              <Row className='d-inline'>
                <span className='cotiKey'>ORIGEN:</span><span className='cotiValue'>{props.form.origin}</span>
              </Row>
            </Col>
            <Col md={3}>
              <Row className='mb-4'>
                <Row className='d-inline'>
                  <span className='cotiKey'>PESO TOTAL:</span><span className='cotiValue'>{peso}kg</span>
                </Row>
              </Row>
              <Row className='d-inline'>
                <span className='cotiKey'>DESTINO:</span><span className='cotiValue'>{props.form.destiny}</span>
              </Row>
            </Col>
            <Col md={3}>
              <Row className='d-flex'>
                <span className='cotiKey'>MEDIDAS UNITARIAS:</span>
                <div className='medidasContainer'>{medidas.map(medida => <p className='medidas'>{medida}</p>)}</div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='shadow p-5 mt-4 d-flex justify-content-center gap-4 text-center'>
        <Row className='d-flex justify-content-center gap-5'>
          <Col md={4} className='border'>
            <Row className='text-center pt-3'>
              <p className='modalidadText'>TIPO DE ENVÍO</p>
            </Row>
            <Row className='modalidad pt-3'>
              <p style={{color: 'white', fontWeight: '300', fontSize: '1.1rem'}}>{props.form.service.charAt(0).toUpperCase() + props.form.service.slice(1)}</p>
            </Row>
          </Col>
          <Col md={4} className='border'>
            <Row className='text-center pt-3'>
              <p className='modalidadText'>PRECIO SIN IVA</p>
            </Row>
            <Row className='modalidad pt-3'>
              <p style={{display: 'flex', justifyContent: "center", color: 'white', fontWeight: '300', fontSize: '1.1rem'}}>ARS <p style={{fontWeight:"600", margin:'0', marginLeft:'4px'}}>${props.cotizacion}</p></p>
            </Row>
          </Col> 
        </Row>        
        <p className='recordaText'>Recordá que el valor es estimativo ya que puede verse modificado al medir/pesar la mercadería en nuestro depósito. Incluye importe de seguro según valor declarado.</p>
        <Button onClick={props.goBack} className='col-md-3 mt-3' style={{height:'3rem', lineHeight:'3rem', padding:'0'}}>REALIZAR NUEVA COTIZACION</Button>
      </Row>
    </Container>
  )
}
export default ResultadoCotizado