export const formGeneraRemitente = [
  {
    name: 'nombre',
    required: 'Ingresá un nombre o razón social',
    validate: (value) =>
      /^[a-zA-Z0-9\s]{2,100}$/.test(value)
        ? null
        : 'Nombre o razón social invalidos.'
  },
  {
    name: 'email',
    required: 'Ingresá un email',
    validate: (value) =>
      /\S+@\S+\.\S+/.test(value)
        ? null
        : 'El email ingresado no es correcto',
  },
  {
    name: 'tipo_documento',
    required: 'Seleccioná un tipo de documento',
  },
  {
    name: 'numero_documento',
    required: 'Ingresá un número de documento o CUIT',
    validate: (value, form) => {
      if (form.tipo_documento === 'DNI') {
        return /^\d{8}$/.test(value)
          ? null
          : 'El DNI debe tener 8 dígitos numéricos';
      }
      if (form.tipo_documento === 'CUIT') {
        return /^\d{11}$/.test(value)
          ? null
          : 'El CUIT debe tener 11 dígitos numéricos';
      }
      return /^\d+$/.test(value)
        ? null
        : 'Debe contener solo números';
    },
  },
  {
    name: 'codigo_de_area',
    required: 'Ingresá el código',
    validate: (value) =>
      /^\d{2,}$/.test(value)
        ? null
        : 'Debe tener al menos 2 dígitos numéricos',
  },
  {
    name: 'telefono',
    required: 'Ingresá un número de teléfono',
    validate: (value) =>
      /^\d{6,}$/.test(value)
        ? null
        : 'Debe tener al menos 6 dígitos numéricos',
  },
  {
    name: 'calle',
    required: 'Ingresá una calle',
    validate: (value) =>
      /^[a-zA-Z0-9\s.\-/]{1,100}$/.test(value)
        ? null
        : 'Hasta 100 caracteres. Permite letras, números, espacios y símbolos como punto o guión.',
  },
  {
    name: 'numero',
    required: 'Ingresá la altura',
    validate: (value) =>
      /^\d+$/.test(value)
        ? null
        : 'Debe contener solo números',
  },
  {
    name: 'piso',
    required: false,
    validate: (value) =>
      !value || /^\d+$/.test(value)
        ? null
        : 'Debe contener solo números',
  },
  {
    name: 'dpto',
    required: false,
  },
];