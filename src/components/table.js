import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const Table = ({
  columns,
  data,
  getTrProps,
  minRows,
  showPagination,
  loading,
}) => (
  <ReactTable
    columns={columns}
    data={data}
    getTrProps={getTrProps}
    minRows={minRows}
    showPagination={showPagination}
    loadingText="Loading..."
    noDataText= "No contacts found"
    loading={loading}
  />
);

export default Table;
