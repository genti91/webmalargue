import './FormTenesCotizacion.scss'

export const FormTenesCotizacion = () => {
  return (
    <div id='tenes-cotizacion'>
      <h2>¿Ya tenes una cotización?</h2>
      <div >
        <span>
        <input type='checkbox'/>
          <label>Sí</label>
        </span>
        <span>
        <input type='checkbox'/>
          <label>No</label>
        </span>
      </div>
    </div>
  )
}
