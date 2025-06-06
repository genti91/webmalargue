import LineFormDivisor from '../LineFormDivisor/LineFormDivisor'
import TitleSelectInput from '../TextInputs/TitleSelectInput'
import TitleTextInput from '../TextInputs/TitleTextInput'
import { provincesForFormSelect } from './utils/provincesForFormSelect'

export default function DestinoSection({ form, errors = {}, onValidate, tarifaDestino }) {
  const normalizeText = (text) => {
    return text.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const handleOptionSelect = (option) => {
    // Find the matching province from provincesForFormSelect
    const matchingProvince = provincesForFormSelect.find(
      p => {
        // Special case for Capital Federal
        if (normalizeText(option.provincia) === 'capital federal') {
          return p.value === 'CABA';
        }
        return normalizeText(p.value) === normalizeText(option.provincia);
      }
    );

    // Update all destiny-related fields at once
    onValidate('destinyOption', matchingProvince || {
      value: option.provincia,
      label: option.provincia
    });
    onValidate('destinyCP', option.codigoPostal);
    onValidate('destiny', option.nombre);
  };

  return (
    <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'>
      <LineFormDivisor />
      <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
        <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
          Destino
        </h2>
        <div className='tw-flex tw-flex-col lg:tw-flex-row tw-items-start tw-justify-between tw-gap-9 tw-w-full'>
          <TitleTextInput
            title='Localidad de destino'
            placeholder='Ej.: Tortuguitas'
            input={form.destiny}
            setInput={(value) => onValidate('destiny', value)}
            mandatory
            error={errors.destiny}
            searchDropdown={true}
            searchOptions={tarifaDestino || []}
            onOptionSelect={handleOptionSelect}
          />
          <TitleTextInput
            title='Codigo postal'
            placeholder='Ej.: 1667'
            input={form.destinyCP}
            setInput={(value) => onValidate('destinyCP', value)}
            zipCode
            mandatory
            error={errors.destinyCP}
            searchDropdown={true}
            searchOptions={tarifaDestino || []}
            onOptionSelect={handleOptionSelect}
          />
          <TitleSelectInput
            title='Provincia de destino'
            input={form.destinyOption}
            setInput={(value) => onValidate('destinyOption', value)}
            mandatory={true}
            placeholder='Seleccioná la provincia'
            options={provincesForFormSelect}
            error={errors.destinyOption}
          />
        </div>
      </div>
      {errors.destinyMatch && <span className='tw-self-center tw-pt-6 tw-text-[#EB1C23]' >{errors.destinyMatch}</span>}
    </div>
  )
}
