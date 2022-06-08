import { Table } from 'react-bootstrap'

const TableComponent = ({ columns, dataSource }) => {
  return (
    <Table striped bordered hover size='md' style={{ marginBlock: '20px' }}>
      <thead>
        <tr>
          {Object.entries(columns).map(([key, label]) => (
            <th key={key}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {!!dataSource && dataSource?.length ? (
          dataSource.map((row, index) => (
            <tr key={index}>
              {Object.keys(columns).map((accesKey) => (
                <td className='text-center' key={accesKey}>
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
  )
}
export default TableComponent
