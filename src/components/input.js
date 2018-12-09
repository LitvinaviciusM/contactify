import React, { Fragment } from 'react';

const Input = ({
  input,
  className,
  label,
  placeholder,
  type,
}) => (
  <Fragment>
    <input
      {...input}
      className={className}
      id={input.name}
      placeholder={placeholder}
      type={type}
    />
    {label && (
      <label htmlFor={input.name}>{label}</label>
    )}
  </Fragment>
);

export default Input;
