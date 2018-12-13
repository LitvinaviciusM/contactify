import React from 'react';
import PropTypes from 'prop-types';

const DataRow = ({ label, value, link }) => (
  <div className="sheet__row">
    <label htmlFor={label}>
      {label}:
    </label>
    {link ? (
      <a className="value" href={`mailto:${value}`}>
        {value}
      </a>
    ) : (
      <span className="value" id={label}>
        {value}
      </span>
    )}
  </div>
);

DataRow.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  link: PropTypes.bool,
};

export default DataRow;
