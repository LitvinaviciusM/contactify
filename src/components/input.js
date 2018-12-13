import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Input = ({
  input,
  label,
  placeholder,
  type,
  onChange,
  name,
  icon,
  variant,
}) => (
  <div className={`input input--${variant}`}>
    <input
      {...input ? input : { onChange, name }}
      id={input ? input.name : name}
      placeholder={placeholder}
      type={type}
      className={`input__field input__field--${variant}`}
    />
    {icon && (
      <div className="input__icon">
        <FontAwesomeIcon icon={icon} />
      </div>
    )}
    {label && (
      <label className="input__label" htmlFor={input.name}>{label}</label>
    )}
  </div>
);

export default Input;
