export const calculatePriceDetail = ({ totalAPIPrice }) => {
    const ivaCalculado = (totalAPIPrice / 1.21) * 0.21;
    const noTaxPrice = (totalAPIPrice - ivaCalculado).toLocaleString('es-AR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });
    const ivaValue = ivaCalculado.toLocaleString('es-AR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });
    const finalValue = Number(totalAPIPrice).toLocaleString('es-AR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });
    return {
        noTaxPrice,
        ivaValue,
        finalValue
    }
}