import { useState } from 'react'
import LineFormDivisor from '../LineFormDivisor/LineFormDivisor'
import TitleTextInput from '../TextInputs/TitleTextInput'
import TitleTextUnitInput from '../TextInputs/TitleTextUnitInput'
import BultosInputs from './BultosInputs'
import BultosTable from './BultosTable'
import Swal from 'sweetalert2'
import * as validators from './utils/inputValidators'

export default function BultosSection({
  form,
  bultos = [],
  setBultos,
  errors = {},
  onValidate
}) {
  const [bultoFieldErrors, setBultoFieldErrors] = useState({})
  const [newBulto, setNewBulto] = useState({
    quantity: '',
    weight: '',
    width: '',
    height: '',
    length: '',
  })

  const handleFieldChange = (field, value) => {
    // Update the bulto state
    setNewBulto(prev => ({
      ...prev,
      [field]: value
    }));

    // Validate the field
    const totalBultos = bultos.reduce((sum, b) => sum + parseInt(b.quantity || 0), 0);
    let error = null;

    switch (field) {
      case 'quantity':
        error = validators.validateBultoQuantity(value, totalBultos);
        break;
      case 'width':
        error = validators.validateBultoWidth(value);
        break;
      case 'height':
        error = validators.validateBultoHeight(value);
        break;
      case 'length':
        error = validators.validateBultoLength(value);
        break;
      case 'weight':
        error = validators.validateBultoWeight(value);
        break;
      default:
        error = null;
        break;
    }

    // Update errors state
    setBultoFieldErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  const addBultoHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()

    // If there are any errors, don't add the bulto
    if (Object.values(bultoFieldErrors).some(error => error !== null)) {
      Swal.fire({
        position: 'middle',
        icon: 'error',
        title: 'Error en los datos del bulto',
        text: 'Por favor, revisá los datos ingresados',
        showConfirmButton: false,
        timer: 1500,
      })
      return
    }

    setBultos([...bultos, newBulto])
    setNewBulto({
      quantity: '',
      weight: '',
      width: '',
      height: '',
      length: '',
    })
    setBultoFieldErrors({})
  }

  const removeBultoHandler = (event, indexToRemove) => {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    setBultos(bultos.filter((_, index) => index !== indexToRemove))
  }

  const updateBultoHandler = (indexToUpdate, updatedBulto) => {
    setBultos(prevBultos => {
      const newBultos = [...prevBultos];
      newBultos[indexToUpdate] = updatedBulto;
      return newBultos;
    });
  }

  const hasErrors = Object.values(bultoFieldErrors).some(error => error !== null) || 
    Object.values(newBulto).some(value => !value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      
      // Only try to add bulto if we're in a bulto input field
      if (['quantity', 'weight', 'width', 'height', 'length'].includes(e.target.name)) {
        // Check if any field is empty
        if (Object.values(newBulto).some(value => !value)) {
          Swal.fire({
            position: 'middle',
            icon: 'error',
            title: 'Campos incompletos',
            text: 'Por favor, completá todos los campos del bulto',
            showConfirmButton: false,
            timer: 1500,
          })
          return
        }

        // If there are any errors, don't add the bulto
        if (Object.values(bultoFieldErrors).some(error => error !== null)) {
          Swal.fire({
            position: 'middle',
            icon: 'error',
            title: 'Error en los datos del bulto',
            text: 'Por favor, revisá los datos ingresados',
            showConfirmButton: false,
            timer: 1500,
          })
          return
        }

        addBultoHandler(e)
      }
    }
  }

  return (
    <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'>
      <LineFormDivisor />
      <BultosInputs 
        newBulto={newBulto} 
        setNewBulto={setNewBulto} 
        errors={bultoFieldErrors}
        onValidate={handleFieldChange}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={addBultoHandler}
        disabled={hasErrors}
        className='tw-mt-6 tw-self-center tw-w-full lg:tw-w-fit tw-bg-[#198754] tw-text-white tw-py-2 tw-px-3 tw-rounded-md disabled:tw-opacity-50'
      >
        AGREGAR BULTOS
      </button>
      <BultosTable bultos={bultos} removeBultoHandler={removeBultoHandler} updateBultoHandler={updateBultoHandler} />
      <div className='tw-flex lg:tw-flex-row tw-flex-col tw-items-start tw-gap-9 tw-w-full tw-mt-6'>
        <div className='lg:tw-w-[35%] tw-w-full '>
          <TitleTextUnitInput
            title='Valor declarado total'
            input={form.valorDeclarado}
            unit='$'
            placeholder='Ej.: 10000'
            setInput={(value) => onValidate('valorDeclarado', value)}
            mandatory
            numeric
            error={errors.valorDeclarado}
          />
        </div>
        <div className='lg:tw-flex-1 tw-flex tw-w-full lg:tw-w-fit '>
          <TitleTextInput
            title='Descripción de los bultos'
            placeholder='Indicá la descripción de los bultos'
            input={form.message}
            setInput={(value) => onValidate('message', value)}
            mandatory
            error={errors.message}
          />
        </div>
      </div>
    </div>
  )
}
