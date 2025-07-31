export const calculatePriceDetail = ({ totalAPIPrice }) => {
    // Let's solve for x (base value) in the equation:
    // x + (x * 0.01) + ((x + x*0.01) * 0.21) = total
    // x + 0.01x + 0.21x + 0.0021x = total
    // 1.2221x = total
    // x = total / 1.2221
    const noTaxPrice = (totalAPIPrice / 1.2221).toLocaleString('es-AR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
      const ivaValue = (
        (Number(totalAPIPrice / 1.2221) +
          Number(totalAPIPrice / 1.2221) * 0.01) *
        0.21
      ).toLocaleString('es-AR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
      const finalValue = Number(totalAPIPrice).toLocaleString('es-AR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
      
    return {
        noTaxPrice,
        ivaValue,
        finalValue
    }
}