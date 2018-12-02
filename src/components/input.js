import React, { Fragment } from 'react';

const Input = ({
  className,
  label,
  name,
  onChange,
  placeholder,
  type,
  value,
}) => (
  <Fragment>
    <input
      className={className}
      id={name}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
    {label && (
      <label htmlFor={name}>{label}</label>
    )}
  </Fragment>
);

export default Input;
