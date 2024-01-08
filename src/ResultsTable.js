import React ,{useEffect,useState,useContext} from 'react';
import { useTable } from 'react-table';
import { Context } from "./context";
import axios from 'axios';

// const data = [
//   { id: 1, ue: 'UE1 Outils de developpement', matiere: 'Python', moyenneMatiere: '', MoyenneUE: '', credits: '' },
//   { id: 2, ue: 'UE1 Outils de developpement', matiere: "Methode d'analyse pour application coopererante ", moyenneMatiere: '', MoyenneUE: '', credits: '' },
//   { id: 3, ue: 'UE2 Developpement de Sites et Reseaux', matiere: 'Administrations Reseaux', moyenneMatiere: '', MoyenneUE: '', credits: '' },
//   { id: 4, ue: 'UE2 Developpement de Sites et Reseaux', matiere: 'Developpement de Sites dynamiques', moyenneMatiere: '', MoyenneUE: '', credits: '' },
//   { id: 5, ue: 'UE3 Outils de Communication', matiere: 'Langue', moyenneMatiere: '', MoyenneUE: '', credits: '' },
//   { id: 6, ue: 'UE3 Outils de Communication', matiere: 'Technique de Communication', moyenneMatiere: '', MoyenneUE: '', credits: '' },
// ];



const columns = [
  {
    Header: "Unites d'enseignement",
    accessor: 'ue',
  },
  { Header: 'Elements constitutifs', accessor: 'matiere' },
  {
    Header: 'Moyenne EC',
    accessor: 'moyenneMatiere',
  },
  {
    Header: 'Moyenne UE',
    accessor: 'MoyenneUE',
  },
  {
    Header: 'Credits',
    accessor: 'credits',
  },
];

function NoteTable() {
  

  const [cont] = useContext(Context);
  const [resultats, setResultats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/submit-form', cont);
        
        if (response.status === 200) {
          setResultats(response.data.resultats); 
          console.log(response.data.resultats)
        } else {
          console.error('Erreur lors de la soumission du formulaire');
        }
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la requête', error);
      }
    };

    fetchData();
  }, [cont]);
  // const data = [
  //   { id: 1, ue: 'UE1 Outils de développement', matiere: 'Python', moyenneMatiere: resultats ? resultats.MoyennePython : '', MoyenneUE: resultats ? resultats.MoyenneUE1 : '', credits: resultats ? resultats.UE1Credit : '' },
  //   { id: 2, ue: 'UE1 Outils de développement', matiere: "Méthode d'analyse pour application coopérante", moyenneMatiere: resultats ? resultats.MoyenneAnalyse : '', MoyenneUE: '', credits: '' },
  //   { id: 3, ue: 'UE2 Développement de Sites et Réseaux', matiere: 'Administrations Réseaux', moyenneMatiere: resultats ? resultats.MoyenneReseau : '', MoyenneUE: resultats ? resultats.MoyenneUE2 : '', credits: resultats ? resultats.UE2Credit : '' },
  //   { id: 4, ue: 'UE2 Développement de Sites et Réseaux', matiere: 'Développement de Sites dynamiques', moyenneMatiere: resultats ? resultats.MoyenneDev : '', MoyenneUE: '', credits: '' },
  //   { id: 5, ue: 'UE3 Outils de Communication', matiere: 'Langue', moyenneMatiere: resultats ? resultats.MoyenneLangue : '', MoyenneUE: resultats ? resultats.MoyenneUE3 : '', credits: resultats ? resultats.UE3Credit : '' },
  //   { id: 6, ue: 'UE3 Outils de Communication', matiere: 'Technique de Communication', moyenneMatiere: resultats ? resultats.MoyenneCom : '', MoyenneUE: '', credits: '' },
  // ];
  const data = [
    { id: 1, ue: 'UE1 Outils de développement', matiere: 'Python', moyenneMatiere: resultats ? resultats.MoyennePython : '', MoyenneUE: resultats ? resultats.MoyenneUE1 : '', credits:   resultats ? resultats.UE1Credit : '' },
    { id: 2, ue: 'UE1 Outils de développement', matiere: "Méthode d'analyse pour application coopérante", moyenneMatiere: resultats ? resultats.MoyenneAnalyse : '', MoyenneUE: '', credits: '' },
    { id: 3, ue: 'UE2 Développement de Sites et Réseaux', matiere: 'Administrations Réseaux', moyenneMatiere: resultats ? resultats.MoyenneReseau : '', MoyenneUE: resultats ? resultats.MoyenneUE2 : '', credits:  resultats ? resultats.UE2Credit : '' },
    { id: 4, ue: 'UE2 Développement de Sites et Réseaux', matiere: 'Développement de Sites dynamiques', moyenneMatiere: resultats ? resultats.MoyenneDev : '', MoyenneUE: '', credits: '' },
    { id: 5, ue: 'UE3 Outils de Communication', matiere: 'Langue', moyenneMatiere: resultats ? resultats.MoyenneLangue : '', MoyenneUE: resultats ? resultats.MoyenneUE3 : '', credits: resultats ? resultats.UE3Credit : ''},
    { id: 6, ue: 'UE3 Outils de Communication', matiere: 'Technique de Communication', moyenneMatiere: resultats ? resultats.MoyenneCom : '', MoyenneUE: '', credits: '' },
  ];
  
  const dataWithUECell = data.map((row) => ({ ...row, ueCell: row.ue }));
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: dataWithUECell });

  
  return (
    <div>
      <table
        {...getTableProps()}
        style={{ border: '1px solid black', width: '70%', margin: 'auto', marginTop: '20px' }}
      >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: '2px solid black',
                    padding: '10px',
                    borderRight: '1px solid black',
                    borderLeft: columnIndex === 0 || columnIndex === 3 ? 'none' : '1px solid black',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);

            const isNewUE = rowIndex === 0 || row.original.ue !== rows[rowIndex - 1].original.ue;
            const rowSpan = rows.filter(r => r.original.ue === row.original.ue).length;

            return (
              <tr {...row.getRowProps()} key={rowIndex}>
                {row.cells.map((cell, cellIndex) => {
                  if (cellIndex === 0) {
                    return isNewUE ? (
                      <td
                        {...cell.getCellProps()}
                        rowSpan={rowSpan}
                        style={{
                          padding: '10px',
                          border: '1px solid black',
                          borderBottom: '2px solid black',
                          borderLeft: cellIndex === 0 && isNewUE ? '1px solid black' : 'none',
                          width: cellIndex === 0 && isNewUE ? '100px' : 'auto',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    ) : null;
                  }

                  if (cellIndex === row.cells.length - 1) {
                    return isNewUE ? (
                      <td
                        {...cell.getCellProps()}
                        rowSpan={rowSpan}
                        style={{
                          padding: '10px',
                          border: '1px solid black',
                          borderBottom: '2px solid black',
                          borderLeft: '1px solid black',
                          width: '100px',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    ) : null;
                  }

                  if (cellIndex === row.cells.length - 2) {
                    return isNewUE ? (
                      <td
                        {...cell.getCellProps()}
                        rowSpan={rowSpan}
                        style={{
                          padding: '10px',
                          border: '1px solid black',
                          borderBottom: '2px solid black',
                          borderLeft: '1px solid black',
                          width: '100px',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    ) : null;
                  }

                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: '1px solid black',
                        borderBottom: '2px solid black',
                        borderLeft: cellIndex === 0 && isNewUE ? '1px solid black' : 'none',
                        width: cellIndex === 0 && isNewUE ? '100px' : 'auto',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <table
        style={{ border: '1px solid black', width: '70%', margin: 'auto', marginTop: '20px' }}
      >
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid black', borderBottom: '2px solid black' }}>
              Total Moyenne UE
            </td>
            <td
              style={{
                padding: '10px',
                border: '1px solid black',
                borderBottom: '2px solid black',
              }}
            >
              {resultats && resultats.MoyenneTotal !== null ? resultats.MoyenneTotal : ''}
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '1px solid black', borderBottom: '2px solid black' }}>
              Total Credits
            </td>
            <td
              style={{
                padding: '10px',
                border: '1px solid black',
                borderBottom: '2px solid black',
              }}
            >
              {resultats && resultats.totalCredit !== null ? resultats.totalCredit : ''}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NoteTable;
