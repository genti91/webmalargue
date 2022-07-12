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
    colSize: { md: 6 },
    label: 'Email',
    inputProps: {
      name: 'email',
      type: 'email',
      required: true,
      errorMessage: 'Por favor completa este campo',
    },
  },
  {
    colSize: { md: 6 },
    label: 'Rango Horario',
    inputProps: {
      name: 'rangoHorario',
      type: 'select',
      options: [
        {
          value: ' 8-12',
          name: ' 8-12',
        },
        {
          value: ' 12-16',
          name: ' 12-16',
        },
      ],
      placeholder: 'Seleccioná un rango horario',
      required: true,
      errorMessage: 'Por favor completa este campo para cotizar',
    },
  },
  {
    colSize: { md: 6 },
    label: 'Prov. de Origen',
    inputProps: {
      name: 'provOrigen',
      type: 'select',
      options: [
        {
          value: 'AMBA',
          name: 'AMBA',
        },
        {
          value: 'Mendoza',
          name: 'Mendoza',
        },
        {
          value: 'San Luis',
          name: 'San Luis',
        },
        {
          value: 'La Pampa',
          name: 'La Pampa',
        },
        {
          value: 'San Juan',
          name: 'San Juan',
        },
        {
          value: 'Santa Fe',
          name: 'Santa Fe',
        },
      ],
      placeholder: 'Seleccioná una provincia',
      required: true,
      errorMessage: 'Por favor completa este campo para cotizar',
    },
  },
  {
    colSize: { md: 6 },
    label: 'Prov. de Destino',
    inputProps: {
      name: 'provDestino',
      type: 'select',
      options: [
        {
          value: 'AMBA',
          name: 'AMBA',
        },
        {
          value: 'Mendoza',
          name: 'Mendoza',
        },
        {
          value: 'San Luis',
          name: 'San Luis',
        },
        {
          value: 'La Pampa',
          name: 'La Pampa',
        },
        {
          value: 'San Juan',
          name: 'San Juan',
        },
        {
          value: 'Santa Fe',
          name: 'Santa Fe',
        },
      ],
      placeholder: 'Seleccioná una provincia',
      required: true,
      errorMessage: 'Por favor completa este campo para cotizar',
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
    label: 'Cód. Postal Origen',
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
    colSize: { md: 12 },
    label: 'Descripción de los bultos',
    inputProps: {
      name: 'descripcion',
      type: 'text',
      required: true,
      errorMessage: 'Por favor completa este campo',
      validation: false,
    },
  },
  {
    colSize: { md: 6 },
    label: 'Forma de pago',
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
          value: 'Recepción',
          name: 'recepcion',
        },
        {
          value: 'otros',
          name: 'Otros',
        },
      ],
      placeholder: 'Seleccioná un tipo de servicio',
      required: true,
      errorMessage: 'Por favor completa este campo para cotizar',
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
