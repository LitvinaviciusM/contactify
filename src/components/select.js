import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Select = ({
  input,
  name,
  onChange,
  options,
  placeholder,
  variant,
  icon,
}) => (
  <div className={`select select--${variant}`}>
    <select
      {...input ? input : { onChange, name }}
      className={`select__field select__field--${variant}`}
    >
      { placeholder && (
        <option value="" disabled hidden>{placeholder}</option>
      )}
      { options.map(o => (
        <option
          key={o.value}
          value={o.value}
        >
          {o.text}
        </option>
      ))}
    </select>
    {icon && (
      <div className={`select__icon select__icon--${variant}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
    )}
  </div>
);

export default Select;
