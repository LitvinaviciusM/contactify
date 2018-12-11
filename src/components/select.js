import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Select = ({
  input,
  className,
  name,
  onChange,
  options,
  placeholder,
  variant,
  icon,
}) => (
  <div className={`select-wrapper select-wrapper--${variant}`}>
    <select
      {...input ? input : { onChange, name }}
      className={`select select--${variant}`}
    >
      { placeholder && (
        <option value="" disabled hidden>{placeholder}</option>
      )}
      { options.map(o => (
        <option
          className={`select__option select__option--${variant}`}
          key={o.value}
          value={o.value}
        >
          {o.text}
        </option>
      ))}
    </select>
    {icon && (
      <div className={`icon-wrapper icon-wrapper--${variant}`}>
        <FontAwesomeIcon className={`input input--${variant}`} icon={icon} />
      </div>
    )}
  </div>
);

export default Select;
