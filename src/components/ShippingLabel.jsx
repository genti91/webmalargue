import React from 'react';

// Componente ShippingLabel
const ShippingLabel = ({ data, qrCodeUrl }) => {
  return (
  <div className="tw-inline-grid tw-grid-cols-[480px_12px] tw-grid-rows-[256px_12px]">
    {/* Main label - horizontal 1/4 A4 size */}
    <div className="tw-relative tw-w-[480px] tw-h-64 tw-bg-white tw-border-2 tw-border-gray-800 tw-p-2 tw-font-mono tw-text-xs tw-col-[1] tw-row-[1]">
      {/* Header - Top Left */}
      <div className="tw-absolute tw-top-2 tw-left-2">
        <h1 className="tw-text-base tw-font-bold tw-text-black">EXPRESO MALARGUE</h1>
      </div>

      {/* Date - Below Header */}
      <div className="tw-absolute tw-top-8 tw-left-2">
        <div className="tw-flex tw-items-center tw-gap-1">
          <span className="tw-text-xs tw-text-black">Fecha</span>
          <span className="tw-px-1 tw-py-0.5 tw-text-xs tw-font-semibold tw-text-black">
            {data.fecha}
          </span>
        </div>
      </div>

      {/* Tracking Code - Below Date */}
      <div className="tw-absolute tw-top-14 tw-left-2">
        <div className="tw-text-xs tw-text-black tw-mb-0.5">Cód. Seguimiento:</div>
        <div className="tw-px-1 tw-py-0.5 tw-text-xs tw-font-bold tw-bg-yellow-200 tw-text-black tw-border tw-border-gray-800 tw-text-center tw-flex tw-items-center tw-justify-center">
          {data.codigoSeguimiento}
        </div>
      </div>

      {/* Package Details - Middle Left */}
      <div className="tw-absolute tw-top-24 tw-left-2 tw-w-40">
        <div className="tw-grid tw-grid-cols-3 tw-gap-0 tw-border tw-border-gray-800">
          <div className="tw-text-center tw-border-r tw-border-gray-800 tw-p-1 tw-bg-white">
            <div className="tw-text-sm tw-font-bold tw-text-black">{data.bultos}</div>
            <div className="tw-text-xs tw-text-black">BULTOS</div>
          </div>
          <div className="tw-text-center tw-border-r tw-border-gray-800 tw-p-1 tw-bg-white">
            <div className="tw-text-sm tw-font-bold tw-text-black">{data.kg}</div>
            <div className="tw-text-xs tw-text-black">KG</div>
          </div>
          <div className="tw-text-center tw-p-1 tw-bg-white">
            <div className="tw-text-sm tw-font-bold tw-text-black">{data.m3}</div>
            <div className="tw-text-xs tw-text-black">M3</div>
          </div>
        </div>
      </div>

      {/* QR Code - Top Right */}
      <div className="tw-absolute tw-top-2 tw-right-2">
        {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" className="tw-w-28 tw-h-28 tw-border tw-border-gray-300" />}
      </div>

      {/* Sucursal Destino - Right side, below QR */}
      <div className="tw-absolute tw-top-32 tw-right-2 tw-text-center">
        <div className="tw-text-sm tw-text-black tw-mb-0.5">Sucursal destino</div>
        <div className="tw-text-sm tw-font-bold tw-text-black">
          {data.sucursalDestino}
        </div>
      </div>

      {/* Recibidor QUN - Right Side, below Sucursal */}
      <div className="tw-absolute tw-top-44 tw-right-2">
        <div className="tw-text-center tw-border tw-border-gray-800 tw-p-1 tw-bg-white tw-px-5">
          <div className="tw-text-xs tw-text-black tw-mb-0.5">Nro Remito</div>
          <div className="tw-text-xs tw-font-bold tw-text-black">
            {data.recibidorQUN}
          </div>
        </div>
      </div>

      {/* Client Info - Below Package Details */}
      <div className="tw-absolute tw-top-36 tw-left-2 tw-text-xs tw-text-black tw-space-y-0.5">
        <div className="tw-flex">
          <span className="tw-w-14">Rte</span>
          <span className="tw-font-semibold">{data.remitente}</span>
        </div>
        <div className="tw-flex">
          <span className="tw-w-14">Dest</span>
          <span className="tw-font-semibold">{data.destinatario}</span>
        </div>
        <div className="tw-flex">
          <span className="tw-w-14">Suc Origen</span>
          <span className="tw-font-semibold">{data.localidadDestino.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</span>
        </div>
      </div>

      {/* Page Numbers - Bottom Left */}
      <div className="tw-absolute tw-bottom-2 tw-left-2">
        <span className="tw-bg-yellow-300 tw-px-1 tw-py-0.5 tw-text-sm tw-font-bold tw-text-black">
          {data.pagina}
        </span>
        <span className="tw-mx-1 tw-text-black tw-text-xs">de</span>
        <span className="tw-bg-yellow-300 tw-px-1 tw-py-0.5 tw-text-sm tw-font-bold tw-text-black">
          {data.totalPaginas}
        </span>
      </div>
    </div>

    {/* Right cutting guide (outside label) */}
    <div className="tw-relative tw-col-[2] tw-row-[1] tw-flex tw-items-center tw-justify-center">
      <div className="tw-h-full tw-border-l-2 tw-border-dashed tw-border-gray-600" />
      <svg
        className="tw-absolute tw-rotate-90 tw-w-4 tw-h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4b5563"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
        <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
        <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
      </svg>
    </div>

    {/* Bottom cutting guide (outside label) */}
    <div className="tw-relative tw-col-[1] tw-row-[2] tw-flex tw-items-center tw-justify-center">
      <div className="tw-w-full tw-border-t-2 tw-border-dashed tw-border-gray-600" />
      <svg
        className="tw-absolute tw-w-4 tw-h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4b5563"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
        <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
        <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
      </svg>
    </div>
  </div>
);

};

export default ShippingLabel;