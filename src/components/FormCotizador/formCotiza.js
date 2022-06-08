export const formCotiza = [
  {
    colSize: { md: 6 },
    label: 'Nombre o razón social',
    inputProps: {
      name: 'name',
      type: 'text',
      required: true,
      errorMessage: 'Por favor completa este campo',
      validation: false,
    },
  },
  {
    colSize: { md: 6 },
    label: 'Teléfono',
    inputProps: {
      name: 'tel',
      type: 'tel',
      required: true,
      errorMessage: 'Por favor completa este campo',
      validation: /^[0-9]+$/i,
    },
  },
  {
    colSize: { md: 12 },
    label: 'Email',
    inputProps: {
      name: 'email',
      type: 'email',
      required: true,
      errorMessage: 'Por favor completa este campo',
      validation: /^\S+@\S+$/i,
    },
  },
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
    label: 'Cod. Postal Origen',
    inputProps: {
      name: 'originCP',
      type: 'text',
      required: true,
      errorMessage: 'Por favor completa este campo',
      validation: false,
    },
  },
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
    label: 'Cod. Postal Destino',
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
          value: 'efectivo',
          name: 'Efectivo',
        },
        {
          value: 'transferencia',
          name: 'Transferencia',
        },
      ],
      placeholder: 'Efectivo',
      required: true,
      errorMessage: 'Por favor completa este campo para cotizar',
      validation: /^\S+@\S+$/i,
    },
  },
  {
    colSize: { md: 6 },
    label: 'Tipo de Servicio',
    inputProps: {
      name: 'service',
      type: 'select',
      options: [
        {
          value: 'mudanza',
          name: 'Mudanza',
        },
        {
          value: 'encomiendas',
          name: 'Encomiendas',
        },
        {
          value: 'Recepcion',
          name: 'recepcion',
        },
        {
          value: 'otros',
          name: 'Otros',
        },
      ],
      placeholder: 'Mudanza',
      required: true,
      errorMessage: 'Por favor completa este campo para cotizar',
      validation: /^\S+@\S+$/i,
    },
  },
  {
    colSize: { md: 12 },
    label: 'Tu mensaje',
    inputProps: {
      name: 'message',
      type: 'textarea',
      required: true,
      errorMessage: 'Por favor completa este campo para cotizar',
      validation: false,
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
      className: 'btn btn-primary bg-primary',
      style: {
        outline: 'none',
        border: 'none',
      },
    },
  },
]
