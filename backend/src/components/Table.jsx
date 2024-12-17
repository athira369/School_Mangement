import React from 'react';

function Table({ columns, data }) {
  return (
    <table className="min-w-full table-auto bg-white shadow-md rounded">
      <thead>
        <tr className="bg-gray-200">
          {columns.map((col, index) => (
            <th key={index} className="py-2 px-4 text-left text-gray-600">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-b">
            {Object.values(row).map((value, idx) => (
              <td key={idx} className="py-2 px-4 text-gray-700">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
