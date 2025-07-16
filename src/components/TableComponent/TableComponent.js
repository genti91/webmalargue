import { Table } from 'react-bootstrap'

const TableComponent = ({ columns, dataSource }) => {
  return (
    <div className="tw-overflow-x-auto" style={{ marginBlock: '20px' }}>
      <Table striped bordered hover size='md'>
        <thead>
          <tr>
            {Object.entries(columns).map(([key, label]) => (
              <th key={key} className='tw-whitespace-nowrap'>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!!dataSource && dataSource?.length ? (
            dataSource.map((row, index) => (
              <tr key={index} >
                {Object.keys(columns).map((accesKey) => (
                  <td key={accesKey}>
                    {row[accesKey]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                style={{ textAlign: 'center' }}
                colSpan={Object.keys(columns).length}
              >
                No hay datos que mostrar
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}
export default TableComponent
