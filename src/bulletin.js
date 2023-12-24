import React from 'react';
import { useTable } from 'react-table';

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: '1px solid black' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ borderBottom: '1px solid black', background: 'aliceblue', padding: '8px' }}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <React.Fragment key={rowIndex}>
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td {...cell.getCellProps()} style={{ padding: '8px', borderBottom: '1px solid black' }}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
              {/* Check if the row should be spanned */}
              {row.cells[0].rowSpan && (
                <tr>
                  <td colSpan="1" rowSpan={row.cells[0].rowSpan} />
                </tr>
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

// Example usage
const columns = [
  { Header: 'ue', accessor: 'ue', rowSpan: 2 },
  { Header: 'ec', accessor: 'ec' },
  { Header: 'Moy ec', accessor: 'moyEc' },
  { Header: 'Moy Ue', accessor: 'moyUe', rowSpan: 2 },
  { Header: 'credit', accessor: 'credit', rowSpan: 2 },
];

const data = [
  { ue: 'UE1', ec: 'EC1', moyEc: 14, moyUe: 15, credit: 5 },
  { ue: '', ec: 'EC2', moyEc: 16 },
  { ue: 'UE2', ec: 'EC3', moyEc: 18, moyUe: 17, credit: 4 },
  { ue: '', ec: 'EC4', moyEc: 20 },
  { ue: 'UE3', ec: 'EC5', moyEc: 22, moyUe: 19, credit: 3 },
  // ... more data
];

const App = () => {
  return <Table columns={columns} data={data} />;
};

export default App;
