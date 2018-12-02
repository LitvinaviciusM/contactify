import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const Table = ({
  columns,
  data,
  getTrProps,
  minRows,
  showPagination,
}) => (
  <ReactTable
    columns={columns}
    data={data}
    getTrProps={getTrProps}
    minRows={minRows}
    showPagination={showPagination}
  />
);

export default Table;
