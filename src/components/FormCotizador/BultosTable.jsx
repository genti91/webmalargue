import { useState } from 'react'
import * as validators from './utils/inputValidators'
import { EditPencilIcon, TrashIcon } from './utils/icons'

export default function BultosTable({ bultos, removeBultoHandler, updateBultoHandler }) {
  const [editingIndex, setEditingIndex] = useState(null)
  const [editedBulto, setEditedBulto] = useState(null)
  const [errors, setErrors] = useState({})

  const handleEditClick = (e, index) => {
    e.preventDefault()
    setEditingIndex(index)
    // Convert all values to numbers when setting initial state
    setEditedBulto({
      quantity: Number(bultos[index].quantity),
      weight: Number(bultos[index].weight),
      width: Number(bultos[index].width),
      height: Number(bultos[index].height),
      length: Number(bultos[index].length)
    })
    setErrors({})
  }

  const handleInputChange = (field, value) => {
    // If the value is empty, set it as empty string
    if (value === '') {
      setEditedBulto(prev => ({ ...prev, [field]: '' }))
      setErrors(prev => ({ ...prev, [field]: null }))
      return
    }

    // Convert the value to a number only if it's not empty
    const numericValue = Number(value)
    setEditedBulto(prev => ({ ...prev, [field]: numericValue }))
    
    // Validate the field
    let error = null
    switch (field) {
      case 'quantity':
        error = validators.validateBultoQuantity(numericValue, bultos.reduce((sum, b) => sum + parseInt(b.quantity || 0), 0) - parseInt(bultos[editingIndex].quantity || 0))
        break
      case 'weight':
        error = validators.validateBultoWeight(numericValue)
        break
      case 'width':
        error = validators.validateBultoWidth(numericValue)
        break
      case 'height':
        error = validators.validateBultoHeight(numericValue)
        break
      case 'length':
        error = validators.validateBultoLength(numericValue)
        break
      default:
        error = null
        break
    }
    
    setErrors(prev => ({ ...prev, [field]: error }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    // Check if there are any errors or empty fields
    if (Object.values(errors).some(error => error !== null) || 
        Object.values(editedBulto).some(value => value === '')) {
      return
    }

    // Update the bulto in the parent component using the dedicated handler
    updateBultoHandler(editingIndex, editedBulto)

    // Reset editing state
    setEditingIndex(null)
    setEditedBulto(null)
    setErrors({})
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setEditingIndex(null)
    setEditedBulto(null)
    setErrors({})
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSave(e)
    }
  }

  return (
    <div className='tw-w-full tw-overflow-x-auto tw-mt-6'>
      <table className='tw-w-full tw-border tw-border-[#DEE2E6] tw-bg-white tw-whitespace-nowrap lg:tw-whitespace-normal tw-border-collapse'>
        <thead>
          <tr className='tw-border-b-2 tw-border-black'>
            <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border-[#DEE2E6] tw-border-r tw-whitespace-nowrap lg:tw-whitespace-normal'>
              Cantidad de bultos
            </th>
            <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border-[#DEE2E6] tw-border-r tw-whitespace-nowrap lg:tw-whitespace-normal'>
              Peso unitario (kg)
            </th>
            <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border-[#DEE2E6] tw-border-r tw-whitespace-nowrap lg:tw-whitespace-normal'>
              Ancho unitario (cm)
            </th>
            <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border-[#DEE2E6] tw-border-r tw-whitespace-nowrap lg:tw-whitespace-normal'>
              Alto unitario (cm)
            </th>
            <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border-[#DEE2E6] tw-border-r tw-whitespace-nowrap lg:tw-whitespace-normal'>
              Largo unitario (cm)
            </th>
            <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-whitespace-nowrap lg:tw-whitespace-normal'>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {bultos && bultos.length > 0 ? (
            bultos.map((bulto, idx) => (
              <tr
                key={idx}
                className={`${idx % 2 === 0 ? 'tw-bg-[#F5F5F5]' : ''}`}
              >
                {editingIndex === idx ? (
                  <>
                    <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>
                      <div className='tw-border-b tw-border-[#222]'>
                        <input
                          type="number"
                          value={editedBulto.quantity}
                          onChange={(e) => handleInputChange('quantity', e.target.value)}
                          onKeyDown={handleKeyDown}
                          className='tw-w-full tw-bg-transparent tw-outline-none'
                          placeholder='Ej.: 1'
                        />
                      </div>
                    </td>
                    <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>
                      <div className='tw-border-b tw-border-[#222] tw-flex tw-items-center'>
                        <input
                          type="number"
                          value={editedBulto.weight}
                          onChange={(e) => handleInputChange('weight', e.target.value)}
                          onKeyDown={handleKeyDown}
                          className='tw-w-full tw-bg-transparent tw-outline-none'
                          placeholder='Ej.: 10'
                        />
                        <span className='tw-ml-1'>kg</span>
                      </div>
                    </td>
                    <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>
                      <div className='tw-border-b tw-border-[#222] tw-flex tw-items-center'>
                        <input
                          type="number"
                          value={editedBulto.width}
                          onChange={(e) => handleInputChange('width', e.target.value)}
                          onKeyDown={handleKeyDown}
                          className='tw-w-full tw-bg-transparent tw-outline-none'
                          placeholder='Ej.: 100'
                        />
                        <span className='tw-ml-1'>cm</span>
                      </div>
                    </td>
                    <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>
                      <div className='tw-border-b tw-border-[#222] tw-flex tw-items-center'>
                        <input
                          type="number"
                          value={editedBulto.height}
                          onChange={(e) => handleInputChange('height', e.target.value)}
                          onKeyDown={handleKeyDown}
                          className='tw-w-full tw-bg-transparent tw-outline-none'
                          placeholder='Ej.: 100'
                        />
                        <span className='tw-ml-1'>cm</span>
                      </div>
                    </td>
                    <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>
                      <div className='tw-border-b tw-border-[#222] tw-flex tw-items-center'>
                        <input
                          type="number"
                          value={editedBulto.length}
                          onChange={(e) => handleInputChange('length', e.target.value)}
                          onKeyDown={handleKeyDown}
                          className='tw-w-full tw-bg-transparent tw-outline-none'
                          placeholder='Ej.: 100'
                        />
                        <span className='tw-ml-1'>cm</span>
                      </div>
                    </td>
                    <td className='tw-flex tw-justify-evenly tw-items-center tw-py-2 tw-px-3 tw-border-t tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>
                      <button
                        className='tw-p-1 tw-rounded hover:tw-bg-gray-200'
                        title='Guardar'
                        onClick={handleSave}
                      >
                        <svg
                          width='18'
                          height='18'
                          fill='none'
                          stroke='#198754'
                          strokeWidth='2'
                          viewBox='0 0 24 24'
                        >
                          <path d='M5 13l4 4L19 7' />
                        </svg>
                      </button>
                      <button
                        className='tw-p-1 tw-rounded hover:tw-bg-gray-200'
                        title='Cancelar'
                        onClick={handleCancel}
                      >
                        <svg
                          width='18'
                          height='18'
                          fill='none'
                          stroke='#dc3545'
                          strokeWidth='2'
                          viewBox='0 0 24 24'
                        >
                          <path d='M6 18L18 6M6 6l12 12' />
                        </svg>
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>{bulto?.quantity} {bulto?.quantity === "1" ? "unidad" : "unidades"}</td>
                    <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>{bulto?.weight}kg</td>
                    <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>{bulto?.width}cm</td>
                    <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>{bulto?.height}cm</td>
                    <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>{bulto?.length}cm</td>
                    <td className='tw-flex tw-justify-evenly tw-items-center tw-py-2 tw-px-3 tw-border-t tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>
                      <button
                        className='tw-p-1 tw-rounded hover:tw-bg-gray-200'
                        title='Editar'
                        onClick={(e) => handleEditClick(e, idx)}
                      >
                        <EditPencilIcon />
                      </button>
                      <button
                        className='tw-p-1 tw-rounded hover:tw-bg-gray-200'
                        title='Eliminar'
                        onClick={(event) => removeBultoHandler(event, idx)}
                      >
                        <TrashIcon />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="tw-text-center tw-py-4 tw-text-[#222] tw-border-t tw-border-r tw-border-[#DEE2E6]"
              >
                Cargá la totalidad de bultos del envío que queres realizar
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {editingIndex !== null && Object.values(errors).some(error => error !== null) && (
        <div className='tw-mt-2 tw-p-3 tw-bg-red-50 tw-border tw-border-red-200 tw-rounded'>
          <div className='tw-flex tw-flex-col tw-gap-1 tw-text-red-600'>
            {errors.quantity && <span>• Cantidad: {errors.quantity}</span>}
            {errors.weight && <span>• Peso: {errors.weight}</span>}
            {errors.width && <span>• Ancho: {errors.width}</span>}
            {errors.height && <span>• Alto: {errors.height}</span>}
            {errors.length && <span>• Largo: {errors.length}</span>}
          </div>
        </div>
      )}
    </div>
  )
}
