export const formGeneraRemitente = [{
    colSize: { md: 6 },
    label: 'Nombre o razón social',
    inputProps: {
      name: 'Rname',
      type: 'text',
      required: true,
      errorMessage: 'Por favor completa este campo',
      validation: false,
    },
},
{
  colSize: { md: 6 },
  label: 'DNI / CUIT',
  inputProps: {
    name: 'Rdni/cuit',
    type: 'text',
    required: true,
    errorMessage: 'Por favor completa este campo',
    validation: false,
  },
}, {
  colSize: { md: 6 },
  label: 'Email',
  inputProps: {
    name: 'Remail',
    type: 'email',
    required: true,
    errorMessage: 'Por favor completa este campo',
  },
},
{
  colSize: { md: 6 },
  label: 'Teléfono de contacto',
  inputProps: {
    name: 'Rtelefono',
    type: 'text',
    required: true,
    errorMessage: 'Por favor completa este campo',
  },
},
{
  colSize: { md: 6 },
  label: 'Calle',
  inputProps: {
    name: 'Rcalle',
    type: 'text',
    required: true,
    errorMessage: 'Por favor completa este campo',
  },
},
{
  colSize: { md: 2 },
  label: 'Altura',
  inputProps: {
    name: 'Raltura',
    type: 'text',
    required: true,
    errorMessage: 'Por favor completa este campo',
  },
},
{
  colSize: { md: 2 },
  label: 'Piso',
  inputProps: {
    name: 'Rpiso',
    type: 'text',
    required: true,
    errorMessage: 'Por favor completa este campo',
  },
},
{
  colSize: { md: 2 },
  label: 'Dpto',
  inputProps: {
    name: 'Rdpto',
    type: 'text',
    required: true,
    errorMessage: 'Por favor completa este campo',
  },
},
// {
//   colSize: { md: 6 },
//   label: 'Localidad',
//   inputProps: {
//     name: 'Rlocalidad',
//     type: 'text',
//     required: true,
//     errorMessage: 'Por favor completa este campo',
//   },
// },
// {
//   colSize: { md: 6 },
//   label: 'Cod. Postal',
//   inputProps: {
//     name: 'Rcp',
//     type: 'text',
//     required: true,
//     errorMessage: 'Por favor completa este campo',
//   },
// },
{
  colSize: { md: 6 },
  label: 'Localidad Origen',
  inputProps: {
    name: 'origin',
    type: 'text',
    required: true,
    errorMessage: 'Por favor completa este campo',
    validation: false,
  },
},
{
  colSize: { md: 6 },
  label: 'Cód. Postal Origen',
  inputProps: {
    name: 'originCP',
    type: 'text',
    required: true,
    errorMessage: 'Por favor completa este campo',
    validation: false,
  },
},
]

export const formGeneraDestinatario = [{
  colSize: { md: 6 },
  label: 'Nombre o razón social',
  inputProps: {
    name: 'Dname',
    type: 'text',
    required: true,
    errorMessage: 'Por favor completa este campo',
    validation: false,
  },
},
{
colSize: { md: 6 },
label: 'DNI / CUIT',
inputProps: {
  name: 'Ddni/cuit',
  type: 'text',
  required: true,
  errorMessage: 'Por favor completa este campo',
  validation: false,
},
}, {
colSize: { md: 6 },
label: 'Email',
inputProps: {
  name: 'Demail',
  type: 'email',
  required: true,
  errorMessage: 'Por favor completa este campo',
},
},
{
colSize: { md: 6 },
label: 'Teléfono de contacto',
inputProps: {
  name: 'Dtelefono',
  type: 'text',
  required: true,
  errorMessage: 'Por favor completa este campo',
},
},
{
colSize: { md: 6 },
label: 'Calle',
inputProps: {
  name: 'Dcalle',
  type: 'text',
  required: true,
  errorMessage: 'Por favor completa este campo',
},
},
{
colSize: { md: 2 },
label: 'Altura',
inputProps: {
  name: 'Daltura',
  type: 'text',
  required: true,
  errorMessage: 'Por favor completa este campo',
},
},
{
colSize: { md: 2 },
label: 'Piso',
inputProps: {
  name: 'Dpiso',
  type: 'text',
  required: true,
  errorMessage: 'Por favor completa este campo',
},
},
{
colSize: { md: 2 },
label: 'Dpto',
inputProps: {
  name: 'Ddpto',
  type: 'text',
  required: true,
  errorMessage: 'Por favor completa este campo',
},
},
// {
// colSize: { md: 6 },
// label: 'Localidad',
// inputProps: {
//   name: 'Dlocalidad',
//   type: 'text',
//   required: true,
//   errorMessage: 'Por favor completa este campo',
// },
// },
// {
// colSize: { md: 6 },
// label: 'Cod. Postal',
// inputProps: {
//   name: 'Dcp',
//   type: 'text',
//   required: true,
//   errorMessage: 'Por favor completa este campo',
// },
// },
{
  colSize: { md: 6 },
  label: 'Localidad Destino',
  inputProps: {
    name: 'destiny',
    type: 'text',
    required: true,
    errorMessage: 'Por favor completa este campo',
    validation: false,
  },
},
{
  colSize: { md: 6 },
  label: 'Cód. Postal Destino',
  inputProps: {
    name: 'destinyCP',
    type: 'text',
    required: true,
    errorMessage: 'Por favor completa este campo',
    validation: false,
  },
},
{
  colSize: { md: 12 },
  inputProps: {
    type: 'table',
  }, 
},
{
  colSize: { md: 6 },
  label: 'Tipo de pago',
  inputProps: {
    name: 'pago',
    type: 'select',
    options: [
      {
        value: 'mercado pago',
        name: 'Mercado Pago',
      },
      {
        value: 'transferencia',
        name: 'Transferencia',
      },
    ],
    placeholder: 'Seleccioná un tipo de pago',
    required: true,
    errorMessage: 'Por favor completa este campo para cotizar',
  },
},
{
  colSize: { md: 6 },
  label: 'Factura y Pago a nombre de',
  inputProps: {
    name: 'factypago',
    type: 'select',
    options: [
      {
        value: 'destinatario',
        name: 'Destinatario',
      },
      {
        value: 'origen',
        name: 'Origen',
      },
    ],
    placeholder: 'Seleccioná una opción',
    required: true,
    errorMessage: 'Por favor completa este campo para cotizar',
  },
},
{
  colSize: { md: 12 },
  inputProps: {
    label: 'Incluir seguro',
    name: 'seguro',
    type: 'checkbox',
    required: false,
    value: 'Si',
    errorMessage: 'Por favor completa este campo para cotizar',
  },
},
{
  inputProps: {
    type: 'submit',
    value: 'Cotizá tu envío',
    className: 'btn btn-primary bg-primary mt-5',
    style: {
      outline: 'none',
      border: 'none',
    },
  },
},
]