import { useState } from 'react';
import LineFormDivisor from '../LineFormDivisor/LineFormDivisor'
import TitleSelectInput from '../TextInputs/TitleSelectInput'
import TitleTextInput from '../TextInputs/TitleTextInput'
import { provincesForFormSelect } from './utils/provincesForFormSelect'

export default function OrigenSection({ form, errors = {}, onValidate, tarifaOrigen }) {
    const [cpDisabled, setCpDisabled] = useState(false);
    const [provDisabled, setProvDisabled] = useState(false);
    const [locDisabled, setLocDisabled] = useState(false);
    const [cpRepeated, setCpRepeated] = useState();
    const [cpRepeatedTrigger, setCpRepeatedTrigger] = useState(0);
  
  const normalizeText = (text) => {
    return text.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const handleOptionSelect = (option, cp) => {

    if (cp) {
      onValidate('originCP', String(option.codigoPostal).padStart(4, '0'));
      // Contar cuántas veces aparece este código postal
      const count = tarifaOrigen.filter(opt => opt.codigoPostal === option.codigoPostal).length;
      const isRepeated = count > 1;
      console.log('isRepeated:', isRepeated, 'count:', count);
      if (isRepeated) {
        setCpRepeated(option.codigoPostal);
        setCpRepeatedTrigger(prev => prev + 1);
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

    // Update all origin-related fields at once
    onValidate('originOption', matchingProvince || {
      value: option.provincia,
      label: option.provincia
    });
    onValidate('originCP', String(option.codigoPostal).padStart(4, '0'));
    onValidate('origin', option.nombre);
    onValidate('idOrigin', option.id);
    onValidate('sucursal', option.sucursal[0]?.idSucursal || 'Desconocido');
    onValidate('sucursalOrigenNombre', option.sucursal[0]?.nombreSucursal || 'Desconocido');
    onValidate('sucursalOrigenDomicilio', option.sucursal[0]?.domicilio || 'Desconocido');
  };

  
  const onLocalidadChange = (value) => {
    const equals = (tarifaOrigen || []).some(opt => {
      return opt.nombre === value;
    })
    if (!equals) {
      if (form.originCP) {
        onValidate('originCP', '')
        onValidate('originOption', '')
      }
    } else {
      setCpDisabled(true);
      setProvDisabled(true);
    }

    if (!value || value.trim() === '') {
      setCpDisabled(false);
      setProvDisabled(false);
      onValidate('origin', '')
      return
    }
    if (value === form.origin.slice(0, -1)) {
      if (form.originCP) {
        onValidate('originCP', '')
        onValidate('origin', '')
        onValidate('originOption', '')
        setCpDisabled(false);
        setProvDisabled(false);
      } else {
        onValidate('origin', value)
      }
      return
    }
    setLocDisabled(false);
    const query = normalizeText(value)
    const exists = (tarifaOrigen || []).some(opt => {
      const normalized = normalizeText(opt.nombre || '')
      return normalized.includes(query)
    })

    if (exists) {
      onValidate('origin', value)
    }
  }

  const onCPChange = (value) => {
    const equals = (tarifaOrigen || []).some(opt => {
      return opt.nombre === value;
    })
    if (!equals) {
      if (form.origin) {
        onValidate('origin', '')
        onValidate('originOption', '')
      }
    } else {
      setLocDisabled(true);
      setProvDisabled(true);
    }

    if (!value || value.trim() === '') {
      setLocDisabled(false);
      setProvDisabled(false);
      onValidate('originCP', '')
      return
    }
    if (value === form.originCP.slice(0, -1)) {
      if (form.origin) {
        onValidate('originCP', '')
        onValidate('origin', '')
        onValidate('originOption', '')
        setLocDisabled(false);
        setProvDisabled(false);
      } else {
        onValidate('originCP', value)
      }
      return
    } 
    const exists = (tarifaOrigen || []).some(opt => {
      return String(opt.codigoPostal).startsWith(value)
    })

    if (exists) {
      onValidate('originCP', value)
    }
  }

  return (
    <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-w-full'>
      <LineFormDivisor />
      <div className='tw-flex tw-flex-col tw-items-start tw-justify-center tw-gap-6 tw-w-full'>
        <h2 className='tw-text-2xl tw-font-semibold tw-text-[#2F3394]'>
          Origen
        </h2>
        <div className='tw-flex tw-flex-col lg:tw-flex-row tw-items-start tw-justify-between sm:tw-gap-9 tw-gap-6 tw-w-full'>
          <TitleTextInput
            title='Localidad de origen'
            placeholder='Escribí y seleccioná una opción'
            input={form.origin}
            setInput={onLocalidadChange}
            mandatory
            error={errors.origin}
            searchDropdown={true}
            searchOptions={tarifaOrigen || []}
            onOptionSelect={handleOptionSelect}
            disabled={locDisabled}
            cpRepeated={cpRepeated}
            cpRepeatedTrigger={cpRepeatedTrigger}
            clearOnBlur={form.origin && !form.originCP}
          />
          <TitleTextInput
            title='Codigo postal'
            placeholder='Escribí y seleccioná una opción'
            input={form.originCP}
            setInput={onCPChange}
            zipCode
            mandatory
            error={errors.originCP}
            searchDropdown={true}
            searchOptions={tarifaOrigen || []}
            disabled={cpDisabled}
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
            disabled={provDisabled}
          />
        </div>
      </div>
    </div>
  )
}
