import { useState } from 'react';
import LineFormDivisor from '../LineFormDivisor/LineFormDivisor'
import TitleSelectInput from '../TextInputs/TitleSelectInput'
import TitleTextInput from '../TextInputs/TitleTextInput'
import { provincesForFormSelect } from './utils/provincesForFormSelect'

export default function DestinoSection({ form, errors = {}, onValidate, tarifaDestino }) {
  const [cpDisabled, setCpDisabled] = useState(false);
  const [provDisabled, setProvDisabled] = useState(false);
  const [locDisabled, setLocDisabled] = useState(false);
  const [cpRepeated, setCpRepeated] = useState();
  const normalizeText = (text) => {
    return text.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const handleOptionSelect = (option, cp) => {

    if (cp) {
      onValidate('destinyCP', String(option.codigoPostal).padStart(4, '0'));
      // Contar cuántas veces aparece este código postal
      const count = tarifaDestino.filter(opt => opt.codigoPostal === option.codigoPostal).length;
      const isRepeated = count > 1;
      console.log('isRepeated:', isRepeated, 'count:', count);
      if (isRepeated) {
        setCpRepeated(option.codigoPostal);
        return;
      } else {
        setCpRepeated(null);
      }
    }

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
    onValidate('destinyCP', String(option.codigoPostal).padStart(4, '0'));
    onValidate('destiny', option.nombre);
    onValidate('idDestiny', option.id);
    onValidate('sucursalDestino', option.sucursal[0]?.idSucursal || 'Desconocido');
    onValidate('sucursalDestinoNombre', option.sucursal[0]?.nombreSucursal || 'Desconocido');
    onValidate('sucursalDestinoDomicilio', option.sucursal[0]?.domicilio || 'Desconocido');
  };

  const onLocalidadChange = (value) => {
    if (!value || value.trim() === '') {
      setCpDisabled(false);
      setProvDisabled(false);
      onValidate('destiny', '')
      return
    }
    if (value === form.destiny.slice(0, -1)) {
      if (form.destinyCP) {
        onValidate('destinyCP', '')
        onValidate('destiny', '')
        onValidate('destinyOption', '')
        setCpDisabled(false);
        setProvDisabled(false);
      } else {
        onValidate('destiny', value)
      }
      return
    }
    setLocDisabled(false);
    setCpDisabled(true);
    setProvDisabled(true);
    const query = normalizeText(value)
    const exists = (tarifaDestino || []).some(opt => {
      const normalized = normalizeText(opt.nombre || '')
      return normalized.includes(query)
    })

    if (exists) {
      onValidate('destiny', value)
    }
  }

  const onCPChange = (value) => {
    if (!value || value.trim() === '') {
      setLocDisabled(false);
      setProvDisabled(false);
      onValidate('destinyCP', '')
      return
    }
    if (value === form.destinyCP.slice(0, -1)) {
      if (form.destiny) {
        onValidate('destinyCP', '')
        onValidate('destiny', '')
        onValidate('destinyOption', '')
        setLocDisabled(false);
        setProvDisabled(false);
      } else {
        onValidate('destinyCP', value)
      }
      return
    } 
    setLocDisabled(true);
    setProvDisabled(true);
    const exists = (tarifaDestino || []).some(opt => {
      return String(opt.codigoPostal).startsWith(value)
    })

    if (exists) {
      onValidate('destinyCP', value)
    }
  }

  return (
    <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'>
      <LineFormDivisor />
      <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
        <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
          Destino
        </h2>
        <div className='tw-flex tw-flex-col lg:tw-flex-row tw-items-start tw-justify-between sm:tw-gap-9 tw-gap-6 tw-w-full'>
          <TitleTextInput
            title='Localidad de destino'
            placeholder='Escribí y seleccioná una opción'
            input={form.destiny}
            setInput={onLocalidadChange}
            mandatory
            error={errors.destiny}
            searchDropdown={true}
            searchOptions={tarifaDestino || []}
            onOptionSelect={handleOptionSelect}
            disabled={locDisabled}
            cpRepeated={cpRepeated}
            clearOnBlur={form.destiny && !form.destinyCP}
          />
          <TitleTextInput
            title='Codigo postal'
            placeholder='Escribí y seleccioná una opción'
            input={form.destinyCP}
            setInput={onCPChange}
            zipCode
            mandatory
            error={errors.destinyCP}
            searchDropdown={true}
            searchOptions={tarifaDestino || []}
            disabled={cpDisabled}
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
            disabled={provDisabled}
          />
        </div>
      </div>
      {errors.destinyMatch && <span className='tw-self-center tw-pt-6 tw-text-[#EB1C23]' >{errors.destinyMatch}</span>}
    </div>
  )
}
