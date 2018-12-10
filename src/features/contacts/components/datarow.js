import React from 'react';

const DataRow = ({ label, value, link }) => (
  <div className="sheet__row">
    <label htmlFor={label}>
      {label}:
    </label>
    {link ? (
      <a href={`mailto:${value}`}>
        {value}
      </a>
    ) : (
      <span className="value" id={label}>
        {value}
      </span>
    )}
  </div>
);

export default DataRow;
