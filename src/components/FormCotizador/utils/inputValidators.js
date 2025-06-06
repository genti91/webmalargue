// src/components/FormCotizador/utils/validators.js
export const validateEmail = (value) => {
  if (!value) return 'Ingresá un email'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(value)) return 'El email ingresado no es correcto'
  return null
}

export const validatePostalCode = (value) => {
  if (!value) return 'Ingresá el CP'
  if (!/^\d{4}$/.test(value)) return 'El CP debe tener 4 dígitos'
  return null
}

export const validateLocation = (value) => {
  if (!value) return 'Ingresá la localidad'
  if (value.length < 3) return 'La localidad debe tener al menos 3 caracteres'
  if (value.length > 45) return 'La localidad debe tener menos de 45 caracteres'
  return null
}

export const validateProvince = (option) => {
  if (!option?.value) return 'Seleccioná la provincia'
  return null
}

export const validateDeclaredValue = (value) => {
  if (!value) return 'Ingresá el valor declarado total'
  if (isNaN(value) || value <= 0) return 'El valor debe ser mayor a 0'
  return null
}

export const validateDescription = (value) => {
  if (!value) return 'Ingresá la descripción de los bultos'
  if (value.length < 10) return 'La descripción debe tener al menos 10 caracteres'
  return null
}

export const validateBultoQuantity = (value, totalBultos) => {
  if (!value) return 'Ingresá la cantidad de bultos';
  if (isNaN(value) || value <= 0) return 'La cantidad debe ser mayor a 0';
  if (totalBultos + parseInt(value) > 10) return 'No se pueden agregar más de 10 bultos en total';
  return null;
};

export const validateBultoWeight = (value) => {
  if (!value) return 'Ingresá el peso del bulto'
  // Convert to number if it's a string with comma
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value
  if (isNaN(numericValue) || numericValue <= 0) return 'El peso debe ser mayor a 0'
  if (numericValue > 200) return 'El peso no puede ser mayor a 200kg'
  return null
}

export const validateBultoWidth = (value) => {
  if (!value) return 'Ingresá el ancho del bulto'
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value
  if (isNaN(numericValue) || numericValue <= 0) return 'El ancho debe ser mayor a 0'
  if (numericValue > 250) return 'El ancho no puede ser mayor a 250 cm'
  return null
}

export const validateBultoHeight = (value) => {
  if (!value) return 'Ingresá el alto del bulto'
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value
  if (isNaN(numericValue) || numericValue <= 0) return 'El alto debe ser mayor a 0'
  if (numericValue > 250) return 'El alto no puede ser mayor a 250 cm'
  return null
}

export const validateBultoLength = (value) => {
  if (!value) return 'Ingresá el largo del bulto'
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value
  if (isNaN(numericValue) || numericValue <= 0) return 'El largo debe ser mayor a 0'
  if (numericValue > 1400) return 'El largo no puede ser mayor a 1400 cm'
  return null
}