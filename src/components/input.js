import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Input = ({
  icon,
  input,
  label,
  name,
  onChange,
  placeholder,
  type,
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

Input.propTypes = {
  icon: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
};

export default Input;
