// Mock data for demonstration
const mockBultos = [

];

export default function BultosTable({ bultos = mockBultos }) {
  return (
    <div className="tw-w-full tw-overflow-x-auto tw-mt-6">
      <table className="tw-w-full tw-border tw-bg-white">
        <thead>
          <tr className="tw-border-b tw-border-[#222]">
            <th className="tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border">Cantidad de bultos</th>
            <th className="tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border">Peso unitario (kg)</th>
            <th className="tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border">Ancho unitario (cm)</th>
            <th className="tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border">Alto unitario (cm)</th>
            <th className="tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border">Largo unitario (cm)</th>
            <th className="tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mockBultos && mockBultos.length > 0 ? (
            mockBultos.map((bulto, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'tw-bg-[#F5F5F5]' : ''}
              >
                <td className="tw-py-2 tw-px-3 tw-border">{bulto.cantidad}</td>
                <td className="tw-py-2 tw-px-3 tw-border">{bulto.peso}</td>
                <td className="tw-py-2 tw-px-3 tw-border">{bulto.ancho}</td>
                <td className="tw-py-2 tw-px-3 tw-border">{bulto.alto}</td>
                <td className="tw-py-2 tw-px-3 tw-border">{bulto.largo}</td>
                <td className="tw-py-2 tw-px-3 tw-border tw-flex tw-gap-3">
                  {/* Edit icon */}
                  <button className="tw-p-1 tw-rounded hover:tw-bg-gray-200" title="Editar">
                    <svg width="18" height="18" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-1.414.586H7v-3a2 2 0 01.586-1.414z"/>
                    </svg>
                  </button>
                  {/* Delete icon */}
                  <button className="tw-p-1 tw-rounded hover:tw-bg-gray-200" title="Eliminar">
                    <svg width="18" height="18" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 6h18M9 6v12a2 2 0 002 2h2a2 2 0 002-2V6m-6 0V4a2 2 0 012-2h2a2 2 0 012 2v2"/>
                    </svg>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="tw-text-center tw-py-4 tw-text-[#222] tw-border-b tw-border-[#222]">
                Cargá la totalidad de bultos del envío que queres realizar
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}