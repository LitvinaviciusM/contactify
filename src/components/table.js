import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const Table = ({ columns, data }) => (
  <ReactTable
    columns={columns}
    data={data}
  />
);

export default Table;
