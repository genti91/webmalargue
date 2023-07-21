export const formCotiza = [
  {
    colSize: { md: 4 },
    label: 'Email',
    inputProps: {
      name: 'email',
      type: 'email',
      required: true,
      errorMessage: 'Por favor completa este campo',
      validation: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
  },
  /* {
    colSize: { md: 4 },
    //label: 'Nombre o razón social',
    label: 'Nombre',
    inputProps: {
      name: 'name',
      type: 'text',
      required: true,
      errorMessage: 'Por favor completa este campo',
      validation: false,
    },
  }, */
  /* {
    colSize: { md: 4 },
    label: 'Teléfono',
    inputProps: {
      name: 'tel',
      type: 'tel',
      required: true,
      errorMessage: 'Por favor completa este campo',
      validation: /^(?:\d{8,10})$/i,
    },
  }, */
  /* {
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
  }, */
  {
    colSize: { md: 12},
    name: 'ORIGEN',
    inputProps: {
      type: 'divisor',
      css: { backgroundColor: '#2f3394', padding: '0.5rem 1rem', itemCenter: 'center', marginBottom: '20px' },
      labelCss: { color: 'white', marginBottom: '0' },
    }
  },
  {
    colSize: { md: 5 },
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
    colSize: { md: 2 },
    label: 'Cp',
    inputProps: {
      name: 'originCP',
      type: 'text',
      required: true,
      errorMessage: 'Por favor completa este campo',
      validation: false,
    },
  },
  {
    colSize: { md: 5 },
    label: 'Prov. de Origen',
    inputProps: {
      name: 'provOrigen',
      type: 'select',
      options: [
        /* {
          value: 'AMBA',
          name: 'AMBA',
        }, */
        {
          value:'Buenos Aires',
          name: 'Buenos Aires',
        },
        {
          value:'CABA',
          name: 'CABA',
        },
        {
          value:'Catamarca',
          name: 'Catamarca',
        },
        {
          value:'Chaco',
          name: 'Chaco',
        },
        {
          value:'Chubut',
          name: 'Chubut',
        },
        {
          value:'Córdoba',
          name: 'Córdoba',
        },
        {
          value:'Corrientes',
          name: 'Corrientes',
        },
        {
          value:'Entre Ríos',
          name: 'Entre Ríos',
        },
        {
          value:'Formosa',
          name: 'Formosa',
        },
        {
          value:'Jujuy',
          name: 'Jujuy',
        },
        {
          value: 'La Pampa',
          name: 'La Pampa',
        },
        {
          value:'La Rioja',
          name: 'La Rioja',
        },
        {
          value: 'Mendoza',
          name: 'Mendoza',
        },
        {
          value:'Misiones',
          name: 'Misiones',
        },
        {
          value:'Neuquén',
          name: 'Neuquén',
        },
        {
          value:'Río Negro',
          name: 'Río Negro',
        },
        {
          value:'Salta',
          name: 'Salta',
        },
        {
          value: 'San Juan',
          name: 'San Juan',
        },
        {
          value: 'San Luis',
          name: 'San Luis',
        },
        {
          value:'Santa Cruz',
          name: 'Santa Cruz',
        },
        {
          value: 'Santa Fe',
          name: 'Santa Fe',
        },
        {
          value:'Santiago del Estero',
          name: 'Santiago del Estero',
        },
        {
          value:'Tierra del Fuego',
          name: 'Tierra del Fuego',
        },
        {
          value:'Tucumán',
          name: 'Tucumán',
        },
      ],
      placeholder: 'Seleccioná una provincia',
      required: true,
      errorMessage: 'Por favor completa este campo para cotizar',
    },
  },
  {
    colSize: { md: 12},
    name: 'DESTINO',
    inputProps: {
      type: 'divisor',
      css: { backgroundColor: '#2f3394', padding: '0.5rem 1rem', itemCenter: 'center', marginBottom: '20px' },
      labelCss: { color: 'white', marginBottom: '0' },
    }
  },
  {
    colSize: { md: 5 },
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
    colSize: { md: 2 },
    label: 'Cp',
    inputProps: {
      name: 'destinyCP',
      type: 'text',
      required: true,
      errorMessage: 'Por favor completa este campo',
      validation: false,
    },
  },
  {
    colSize: { md: 5 },
    label: 'Prov. de Destino',
    inputProps: {
      name: 'provDestino',
      type: 'select',
      options: [
        /* {
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
        }, */
        {
          value:'Buenos Aires',
          name: 'Buenos Aires',
        },
        {
          value:'CABA',
          name: 'CABA',
        },
        {
          value:'Catamarca',
          name: 'Catamarca',
        },
        {
          value:'Chaco',
          name: 'Chaco',
        },
        {
          value:'Chubut',
          name: 'Chubut',
        },
        {
          value:'Córdoba',
          name: 'Córdoba',
        },
        {
          value:'Corrientes',
          name: 'Corrientes',
        },
        {
          value:'Entre Ríos',
          name: 'Entre Ríos',
        },
        {
          value:'Formosa',
          name: 'Formosa',
        },
        {
          value:'Jujuy',
          name: 'Jujuy',
        },
        {
          value: 'La Pampa',
          name: 'La Pampa',
        },
        {
          value:'La Rioja',
          name: 'La Rioja',
        },
        {
          value: 'Mendoza',
          name: 'Mendoza',
        },
        {
          value:'Misiones',
          name: 'Misiones',
        },
        {
          value:'Neuquén',
          name: 'Neuquén',
        },
        {
          value:'Río Negro',
          name: 'Río Negro',
        },
        {
          value:'Salta',
          name: 'Salta',
        },
        {
          value: 'San Juan',
          name: 'San Juan',
        },
        {
          value: 'San Luis',
          name: 'San Luis',
        },
        {
          value:'Santa Cruz',
          name: 'Santa Cruz',
        },
        {
          value: 'Santa Fe',
          name: 'Santa Fe',
        },
        {
          value:'Santiago del Estero',
          name: 'Santiago del Estero',
        },
        {
          value:'Tierra del Fuego',
          name: 'Tierra del Fuego',
        },
        {
          value:'Tucumán',
          name: 'Tucumán',
        },
      ],
      placeholder: 'Seleccioná una provincia',
      required: true,
      errorMessage: 'Por favor completa este campo para cotizar',
    },
  },
  {
    colSize: { md: 12},
    name: 'BULTOS',
    inputProps: {
      type: 'divisor',
      css: { backgroundColor: '#c4c6df' , padding: '0.5rem 1rem', itemCenter: 'center' , marginBottom: '20px'},
      labelCss: { color: '#2f3394' , marginBottom: '0' },
    }
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
        /* {
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
        }, */
        {
          value: 'caja',
          name: 'Caja',
        },{
          value: 'mudanza',
          name: 'Mudanza',
        },{
          value: 'paquete',
          name: 'Paquete',
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
  // {
  //   colSize: { md: 12 },
  //   label: 'Tu mensaje',
  //   inputProps: {
  //     name: 'message',
  //     type: 'textarea',
  //     required: true,
  //     errorMessage: 'Por favor completa este campo para cotizar',
  //     validation: false,
  //   },
  // },
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
      css: { display:'flex', justifyContent:'end' },
    },
  },
]
