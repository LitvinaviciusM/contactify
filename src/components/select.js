import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Select = ({
  icon,
  input,
  name,
  onChange,
  options,
  placeholder,
  variant,
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

Select.propTypes = {
  icon: PropTypes.string,
  input: PropTypes.object,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  variant: PropTypes.string,
};

export default Select;
