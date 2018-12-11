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
  iconClassName,
  variant,
}) => (
  <div className={`input-wrapper input-wrapper--${variant}`}>
    <input
      {...input ? input : { onChange, name }}
      className={`input input--${variant}`}
      id={input ? input.name : name}
      placeholder={placeholder}
      type={type}
    />
    {icon && (
      <div className={`icon-wrapper icon-wrapper--${variant}`}>
        <FontAwesomeIcon className={`input input--${variant}`} icon={icon} />
      </div>
    )}
    {label && (
      <label htmlFor={input.name}>{label}</label>
    )}
  </div>
);

export default Input;
