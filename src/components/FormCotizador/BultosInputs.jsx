import TitleTextInput from '../TextInputs/TitleTextInput'
import TitleTextUnitInput from '../TextInputs/TitleTextUnitInput'

export default function BultosInputs({
  newBulto,
  setNewBulto,
  errors = {},
  onValidate,
  onKeyDown,
}) {
  
  const handleInputChange = (field, value) => {
    // For decimal fields, just pass the value through
    if (['weight', 'width', 'height', 'length'].includes(field)) {
      setNewBulto(prev => ({ ...prev, [field]: value }));
      onValidate(field, value);
    } else {
      setNewBulto(prev => ({ ...prev, [field]: value }));
      onValidate(field, value);
    }
  };

  return (
    <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
      <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>Bultos</h2>
      <div className='tw-flex tw-items-start tw-flex-col lg:tw-flex-row tw-justify-between lg:tw-gap-9 tw-gap-6 tw-w-full'>
        <div className='tw-flex tw-flex-col lg:tw-flex-row lg:tw-flex-1 lg:tw-gap-7 tw-gap-6 lg:tw-w-fit tw-w-full items-start justify-start'>
          <TitleTextInput
            name="quantity"
            title='Cantidad'
            placeholder='Ej.: 1'
            input={newBulto.quantity}
            setInput={(value) => handleInputChange('quantity', value)}
            mandatory
            numeric
            error={errors.quantity}
            onKeyDown={onKeyDown}
            strictInteger={true}
          />
          <TitleTextUnitInput
            name="weight"
            title='Peso unitario'
            unit='kg'
            placeholder='Ej.: 10'
            input={newBulto.weight}
            setInput={(value) => handleInputChange('weight', value)}
            mandatory
            decimal
            error={errors.weight}
            onKeyDown={onKeyDown}
          />
        </div>
        <div className='tw-flex tw-flex-col lg:tw-flex-row lg:tw-flex-1 lg:tw-gap-7 tw-gap-6 lg:tw-w-fit tw-w-full'>
          <TitleTextUnitInput
            name="width"
            title='Ancho unitario'
            unit='cm'
            placeholder='Ej.: 100'
            input={newBulto.width}
            setInput={(value) => handleInputChange('width', value)}
            mandatory
            decimal
            error={errors.width}
            info={"*250cm max"}
            onKeyDown={onKeyDown}
            strictInteger={true}
          />
          <TitleTextUnitInput
            name="height"
            title='Alto unitario'
            unit='cm'
            placeholder='Ej.: 100'
            input={newBulto.height}
            setInput={(value) => handleInputChange('height', value)}
            mandatory
            decimal
            error={errors.height}
            info={"*250cm max"}
            onKeyDown={onKeyDown}
            strictInteger={true}
          />
          <TitleTextUnitInput
            name="length"
            title='Largo unitario'
            unit='cm'
            placeholder='Ej.: 100'
            input={newBulto.length}
            setInput={(value) => handleInputChange('length', value)}
            mandatory
            decimal
            error={errors.length}
            info={"*1400cm max"}
            onKeyDown={onKeyDown}
            strictInteger={true}
          />
        </div>
      </div>
    </div>
  )
}
