import React from 'react';

const Select = ({ options, name }) => (
  <select name={name}>
    {options.map(o => (
      <option value={o.value}>{o.text}</option>
    ))}
  </select>
);

export default Select;
