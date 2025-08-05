export const formCotiza = [
  {
    colSize: { md: 4 },
    label: 'Email',
    inputProps: {
      name: 'email',
      type: 'email',
      required: true,
      errorMessage: 'Por favor completa este campo',
      validation: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
  },
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
    label: 'CP',
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
      name: 'provOrigin',
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
    label: 'CP',
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
      name: 'provDestiny',
      type: 'select',
      options: [
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
    colSize: { md: 3 },
    label: 'Valor declarado total',
    inputProps: {
      label: 'Incluir seguro',
      name: 'valorDeclarado',
      type: 'checkbox',
      required: true,
      errorMessage: 'Por favor completa este campo para cotizar',
    },
  },
  {
    colSize: { md: 9 },
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
    label: 'Tipo de Envío',
    inputProps: {
      name: 'service',
      type: 'select',
      options: [
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
  {
    inputProps: {
      type: 'submit',
      value: 'COTIZAR',
      className: 'btn btn-primary bg-primary',
      style: {
        outline: 'none',
        border: 'none',
      },
      css: { display:'flex', justifyContent:'end' },
    },
  },
]
