import React from 'react';
import PropTypes from 'prop-types';
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

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  getTrProps: PropTypes.func,
  minRows: PropTypes.number,
  showPagination: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Table;
