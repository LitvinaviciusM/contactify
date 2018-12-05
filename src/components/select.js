import React from 'react';

const Select = ({
  className,
  name,
  onChange,
  options,
  placeholder,
}) => (
  <select
    defaultValue={placeholder && 'placeholder'}
    name={name}
    onChange={onChange}
  >
    <option value=""> </option>
    { placeholder && (
      <option value="placeholder" disabled hidden>{placeholder}</option>
    )}
    { options.map(o => (
      <option key={o.value} value={o.value}>{o.text}</option>
    ))}
  </select>
);

export default Select;
