export const formGeneraRemitente = [
  {
    name: 'nombre',
    required: 'Ingresá un nombre o razón social',
    validate: (value) =>
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s.,;:¿?¡!\-_()/@"'#+]{2,100}$/.test(value)
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
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s.,;:¿?¡!\-_()/@"'#+]{1,100}$/.test(value)
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