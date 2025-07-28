import emailjs from 'emailjs-com'

export const sendCotizacionEmail = async (observaciones, lead) => {
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

      try {
        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          'template_sv96d5d',
          {
            email: observaciones.emailNotificacion,
            cotizacion_id: lead.idLead,
            origen: observaciones.localidadOrigen,
            destino: observaciones.localidadDestino,
            tabla_bultos: tablaBultosHTML,
            precio_base: observaciones.precioSinIVA,
            seguro: observaciones.precioSeguro,
            iva: observaciones.IVA,
            precio_final: observaciones.precioFinal,
            nueva_cotizacion_url: 'https://webmalargue.vercel.app/cotiza',
            generar_retiro_url: `https://webmalargue.vercel.app/genera?nroCotizacion=${lead.idLead}&email=${observaciones.emailNotificacion}`,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
      } catch (emailError) {
        console.error('Error enviando email:', emailError)
      }
}
