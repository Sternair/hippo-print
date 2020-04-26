import React from 'react';

import './Table.scss';

const Table = ({cols, data}: {cols: string[], data: {[k: string]: string | number}[]}) => {
  return (
      <div className="hippo-table table-responsive">
        <table className="table">
          <thead>
          {cols.map((col: string, i: number) => <th scope="col" key={i}>{col}</th>)}
          </thead>
          <tbody>
            {data.map((item: any) => {
              return <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.voting}</td>
                <td>{item.qualityLevel}</td>
                <td>{item.createdBy}</td>
              </tr>
            })}

          </tbody>
        </table>
      </div>
  );
}

export default Table;
