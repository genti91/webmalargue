export const calculatePriceDetail = (totalAPIPrice, seguro) => {
    const ivaCalculado = (totalAPIPrice + seguro) * 0.21;
    const finalValue = (totalAPIPrice + ivaCalculado + seguro).toLocaleString('es-AR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });
    const ivaValue = ivaCalculado.toLocaleString('es-AR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });
    const noTaxPrice = Number(totalAPIPrice).toLocaleString('es-AR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });
    return {
        noTaxPrice,
        ivaValue,
        finalValue
    }
}