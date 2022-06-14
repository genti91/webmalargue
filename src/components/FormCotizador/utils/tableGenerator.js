export const tableTemplateGenerator = ({ columns, dataSource }) => {
  let formedColumns = ''
  let formedRows = ''

  Object.values({...columns, sumatoria: 'Sumatoria'}).forEach((label) => {
    if (label !== 'Seleccionar')
      formedColumns += `<th style="text-align: center; border: 0.5px solid #111; box-sizing: border-box; padding: 5px !important">${label}</th>`
  })
  dataSource.forEach((row) => {
    formedRows += `<tr style="text-align: center;">`
    Object.keys({...columns, sumatoria: 'Sumatoria'}).forEach((accesKey) => {
      if (accesKey !== 'seleccionar') {
        if (accesKey === 'sumatoria') {
          const sumatoria = Object.entries(row).reduce((acc, [keyReducer, value]) => {
            if(keyReducer.match(/alto|ancho|profundidad/)) return acc = acc ? acc * Number(value) : Number(value)
            return acc
          }, 0)
          formedRows += `<td style="border: 0.5px solid #111; box-sizing: border-box;">${(sumatoria||0)/1000}</td>`
        } else formedRows += `<td style="border: 0.5px solid #111; box-sizing: border-box;">${row[accesKey]}</td>`
      }
    })
    formedRows += `</tr>`
  })

  return `<table style="margin-top: 20px; border-spacing: 0px !important;"><thead><tr>${formedColumns}</tr></thead><tbody>${formedRows}</tbody></table>`
}
