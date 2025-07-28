import emailjs from 'emailjs-com'

export const sendEmailCotiSucursal = async (observaciones, cotizacion_id) => {
    const tablaBultosHTML = observaciones.arrayBultos
        .map((bulto, index) => {
          const fondo = index % 2 === 0 ? '' : 'background:#f5f5f5;'
          return `
          <tr style="${fondo}">
            <td style="padding:8px 6px;border:1px solid #cccccc;">${
              bulto.cantidadBultos
            }&nbsp;unidad${bulto.cantidad > 1 ? 'es' : ''}</td>
            <td style="padding:8px 6px;border:1px solid #cccccc;">${
              bulto.peso
            }&nbsp;kg</td>
            <td style="padding:8px 6px;border:1px solid #cccccc;">${
              bulto.ancho
            }&nbsp;cm</td>
            <td style="padding:8px 6px;border:1px solid #cccccc;">${
              bulto.alto
            }&nbsp;cm</td>
            <td style="padding:8px 6px;border:1px solid #cccccc;">${
              bulto.largo
            }&nbsp;cm</td>
          </tr>`
        })
        .join('')
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        'template_15nlnrd',
        {
          email: observaciones.emailNotificacion,
          id_coti: cotizacion_id,
          lead: `
                <h4>Cotización</h4>
                <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
                    <tr><td><strong>Precio final</strong></td><td>ARS ${observaciones.precioFinal}</td></tr>
                    <tr><td><strong>Precio sin impuestos nacionales</strong></td><td>ARS ${observaciones.precioSinIVA}</td></tr>
                    <tr><td><strong>Seguro</strong></td><td>ARS ${observaciones.precioSeguro}</td></tr>
                    <tr><td><strong>IVA</strong></td><td>ARS ${observaciones.IVA}</td></tr>
                    <tr><td><strong>Valor declarado</strong></td><td>ARS ${observaciones.valorDeclarado}</td></tr>
                    <tr><td><strong>Tarifa</strong></td><td>${observaciones.tarifa}</td></tr>
                    <tr><td><strong>Sucursal Canalizadora</strong></td><td>${observaciones.sucursalCanalizadora}</td></tr>
                </table>

                <h4>Datos del Aforo</h4>
                <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
                    <tr><td><strong>Kilos reales</strong></td><td>${observaciones.kilosReales}</td></tr>
                    <tr><td><strong>Kilos aforados</strong></td><td>${observaciones.kilosAforados}</td></tr>
                    <tr><td><strong>Metros cúbicos</strong></td><td>${observaciones.metrosCubicos}</td></tr>
                </table>

                <h4>Datos del Bulto</h4>
                <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
                    <tr><td><strong>Cantidad de bultos total</strong></td><td>${observaciones.bultosTotal}</td></tr>
                    <tr><td><strong>Descripción</strong></td><td>${observaciones.descripcionBultos}</td></tr>
                </table>
                <br />
                <table table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse; min-width: 600px; margin-bottom: 20px; font-family: Arial, Helvetica, sans-serif;">
                <thead>
                    <tr style="background: #f1f1f1;">
                    <th style="padding: 8px 6px; border: 1px solid #cccccc; text-align: left; font-weight: bold;">Cantidad de bultos</th>
                    <th style="padding: 8px 6px; border: 1px solid #cccccc; text-align: left; font-weight: bold;">Peso unitario (kg)</th>
                    <th style="padding: 8px 6px; border: 1px solid #cccccc; text-align: left; font-weight: bold;">Ancho unitario (cm)</th>
                    <th style="padding: 8px 6px; border: 1px solid #cccccc; text-align: left; font-weight: bold;">Alto unitario (cm)</th>
                    <th style="padding: 8px 6px; border: 1px solid #cccccc; text-align: left; font-weight: bold;">Largo unitario (cm)</th>
                    </tr>
                </thead>
                <tbody>
                    ${tablaBultosHTML}
                </tbody>
                </table>

                <h4>Origen y Destino</h4>
                <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif;">
                    <tr><td><strong>CP Origen</strong></td><td>${observaciones.cpOrigen}</td></tr>
                    <tr><td><strong>Localidad Origen</strong></td><td>${observaciones.localidadOrigen}</td></tr>
                    <tr><td><strong>Provincia Origen</strong></td><td>${observaciones.provinciaOrigen}</td></tr>
                    <tr><td><strong>CP Destino</strong></td><td>${observaciones.cpDestino}</td></tr>
                    <tr><td><strong>Localidad Destino</strong></td><td>${observaciones.localidadDestino}</td></tr>
                    <tr><td><strong>Provincia Destino</strong></td><td>${observaciones.provinciaDestino}</td></tr>
                </table>
            `
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .catch((error) => {
        console.error('Error enviando el email:', error)
      })
}
