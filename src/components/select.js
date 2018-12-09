import React from 'react';

const Select = ({
  input,
  className,
  name,
  onChange,
  options,
  placeholder,
}) => (
  <select
    {...input}
  >
    { placeholder && (
      <option value="" disabled hidden>{placeholder}</option>
    )}
    { options.map(o => (
      <option key={o.value} value={o.value}>{o.text}</option>
    ))}
  </select>
);

export default Select;
