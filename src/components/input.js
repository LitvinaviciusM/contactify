import React, { Fragment } from 'react';

const Input = ({
  className,
  label,
  name,
  onChange,
  placeholder,
  type,
}) => (
  <Fragment>
    <input
      className={className}
      id={name}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
    {label && (
      <label for={name}>{label}</label>
    )}
  </Fragment>
);

export default Input;
