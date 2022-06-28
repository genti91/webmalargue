const sumatoriaHandler = (row) =>
  Object.entries(row).reduce((acc, [keyReducer, value]) => {
    if (keyReducer.match(/alto|ancho|profundidad/))
      return (acc = acc ? acc * (Number(value) / 100) : Number(value) / 100)
    return acc
  }, 0)

export const tableTemplateGenerator = ({ columns, dataSource }) => {
  let formedColumns = ''
  let formedRows = ''
  let sumatoriaMetros = 0
  let sumatoriaMetrosTotal = 0
  let sumatoriaBultos = 0

  Object.values({ ...columns, sumatoria: 'Sumatoria m3' }).forEach((label) => {
    if (label !== 'Seleccionar')
      formedColumns += `<th style="text-align: center; border: 0.5px solid #111; box-sizing: border-box; padding: 5px !important">${label}</th>`
  })
  dataSource.forEach((row) => {
    formedRows += `<tr style="text-align: center;">`
    Object.keys({ ...columns, sumatoria: 'Sumatoria m3' }).forEach(
      (accesKey) => {
        if (accesKey !== 'seleccionar') {
          if (accesKey === 'sumatoria') {
            sumatoriaMetros = (
              (sumatoriaHandler(row) || 0) * Number(row?.cantBultos)
            ).toFixed(4)
            sumatoriaMetrosTotal += Number(sumatoriaMetros)
            sumatoriaBultos += parseInt(row?.cantBultos) * parseInt(row?.peso)
            formedRows += `<td style="border: 0.5px solid #111; box-sizing: border-box;">${
              sumatoriaMetros || 0
            }</td>`
          } else
            formedRows += `<td style="border: 0.5px solid #111; box-sizing: border-box;">${row[accesKey]}</td>`
        }
      }
    )
    formedRows += `</tr>`
  })
  console.log(sumatoriaMetrosTotal);
  return `<table style="margin-top: 20px; border-spacing: 0px !important;"><thead><tr>${formedColumns}</tr></thead><tbody>${formedRows}</tbody></table><div><p style="margin-top: 10px; margin-bottom: 0px;">Peso Total: <span style="font-weight: bold;">${sumatoriaBultos}</span></p><p>Metros Aforados: <span style="font-weight: bold;">${(
    (sumatoriaMetrosTotal || 0) * 350
  ).toFixed(4)}</span></><br></div>`
}
