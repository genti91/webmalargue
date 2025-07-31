export const SavedBultosTable = ({ bultos }) => {
    return (
        <div className='tw-w-full tw-overflow-x-auto tw-mt-6'>
          <table className='tw-w-full tw-border tw-border-[#DEE2E6] tw-bg-white tw-whitespace-nowrap lg:tw-whitespace-normal tw-border-collapse'>
            <thead>
              <tr className='tw-border-b-2 tw-border-black'>
                <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border-[#DEE2E6] tw-border-r tw-whitespace-nowrap lg:tw-whitespace-normal'>
                  Cantidad de bultos
                </th>
                <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border-[#DEE2E6] tw-border-r tw-whitespace-nowrap lg:tw-whitespace-normal'>
                  Peso unitario (kg)
                </th>
                <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border-[#DEE2E6] tw-border-r tw-whitespace-nowrap lg:tw-whitespace-normal'>
                  Ancho unitario (cm)
                </th>
                <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border-[#DEE2E6] tw-border-r tw-whitespace-nowrap lg:tw-whitespace-normal'>
                  Alto unitario (cm)
                </th>
                <th className='tw-font-bold tw-text-left tw-py-2 tw-px-3 tw-border-[#DEE2E6] tw-border-r tw-whitespace-nowrap lg:tw-whitespace-normal'>
                  Largo unitario (cm)
                </th>
              </tr>
            </thead>
            <tbody>
              {bultos.map((bulto, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'tw-bg-[#F5F5F5]' : ''}>
                  <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>
                    {bulto?.quantity}{' '}
                    {bulto?.quantity === '1' ? 'unidad' : 'unidades'}
                  </td>
                  <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>
                    {bulto?.weight}kg
                  </td>
                  <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>
                    {bulto?.width}cm
                  </td>
                  <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>
                    {bulto?.height}cm
                  </td>
                  <td className='tw-py-2 tw-px-3 tw-border-t tw-border-r tw-border-[#DEE2E6] tw-whitespace-nowrap lg:tw-whitespace-normal'>
                    {bulto?.length}cm
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
} 