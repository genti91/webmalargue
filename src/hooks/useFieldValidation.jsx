// src/hooks/useFieldValidation.js
import { useCallback } from 'react';
import * as inputValidators from '../components/FormCotizador/utils/inputValidators';

export const useFieldValidation = (setInForm, setErrors, bultos = []) => {
  const handleFieldChange = useCallback((fieldName, value) => {
    // Update form value
    setInForm(fieldName, value);

    // Validate the field
    let error = null;
    switch (fieldName) {
      case 'email':
        error = inputValidators.validateEmail(value);
        break;
      case 'originCP':
      case 'destinyCP':
        error = inputValidators.validatePostalCode(value);
        break;
      case 'origin':
      case 'destiny':
        error = inputValidators.validateLocation(value);
        break;
      case 'originOption':
      case 'destinyOption':
        error = inputValidators.validateProvince(value);
        break;
      case 'valorDeclarado':
        error = inputValidators.validateDeclaredValue(value);
        break;
      case 'message':
        error = inputValidators.validateDescription(value);
        break;
      case 'bultoQuantity':
        const totalBultos = bultos.reduce((sum, bulto) => sum + parseInt(bulto.quantity || 0), 0);
        error = inputValidators.validateBultoQuantity(value, totalBultos);
        break;
      case 'bultoWidth':
        error = inputValidators.validateBultoWidth(value);
        break;
      case 'bultoHeight':
        error = inputValidators.validateBultoHeight(value);
        break;
      case 'bultoLength':
        error = inputValidators.validateBultoLength(value);
        break;
      case 'bultoWeight':
        error = inputValidators.validateBultoWeight(value);
        break;
      default:
        break; // Satisfy eslint default-case rule
    }

    // Update errors state
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  }, [setInForm, setErrors, bultos]);

  return { handleFieldChange };
};