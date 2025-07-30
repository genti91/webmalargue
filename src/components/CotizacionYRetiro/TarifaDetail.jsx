export const TarifaDetail = ({ noTaxPrice, seguroValue, ivaValue }) => {
    return (
        <div className='tw-flex tw-flex-col tw-gap-4 tw-mb-9'>
        <span className='tw-text-[#2F3394] tw-text-2xl tw-font-semibold'>
          Detalle de la tarifa
        </span>
        <span>
          <strong>Precio sin impuestos nacionales: </strong>ARS ${noTaxPrice}
        </span>
        <span>
          <strong>Seguro: </strong>ARS ${seguroValue}
        </span>
        <span>
          <strong>IVA (21%): </strong>ARS ${ivaValue}
        </span>
      </div>
    )
    }