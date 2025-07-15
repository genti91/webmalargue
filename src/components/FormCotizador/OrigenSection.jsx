import LineFormDivisor from '../LineFormDivisor/LineFormDivisor'
import TitleSelectInput from '../TextInputs/TitleSelectInput'
import TitleTextInput from '../TextInputs/TitleTextInput'
import { provincesForFormSelect } from './utils/provincesForFormSelect'

export default function OrigenSection({ form, errors = {}, onValidate, tarifaOrigen }) {
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

    // Update all origin-related fields at once
    onValidate('originOption', matchingProvince || {
      value: option.provincia,
      label: option.provincia
    });
    onValidate('originCP', option.codigoPostal);
    onValidate('origin', option.nombre);
    onValidate('idOrigin', option.id);
  };

  return (
    <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'>
      <LineFormDivisor />
      <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
        <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
          Origen
        </h2>
        <div className='tw-flex tw-flex-col lg:tw-flex-row tw-items-start tw-justify-between tw-gap-9 tw-w-full'>
          <TitleTextInput
            title='Localidad de origen'
            placeholder='Ej.: Chacarita'
            input={form.origin}
            setInput={(value) => onValidate('origin', value)}
            mandatory
            error={errors.origin}
            searchDropdown={true}
            searchOptions={tarifaOrigen || []}
            onOptionSelect={handleOptionSelect}
          />
          <TitleTextInput
            title='Codigo postal'
            placeholder='Ej.: 1417'
            input={form.originCP}
            setInput={(value) => onValidate('originCP', value)}
            zipCode
            mandatory
            error={errors.originCP}
            searchDropdown={true}
            searchOptions={tarifaOrigen || []}
            onOptionSelect={handleOptionSelect}
          />
          <TitleSelectInput
            title='Provincia de origen'
            input={form.originOption}
            setInput={(value) => onValidate('originOption', value)}
            mandatory={true}
            placeholder='Seleccioná la provincia'
            options={provincesForFormSelect}
            error={errors.originOption}
          />
        </div>
      </div>
    </div>
  )
}
