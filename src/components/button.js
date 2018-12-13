import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({
  className,
  disabled,
  icon,
  name,
  onClick,
  type,
  value,
}) => icon ? (
  <div className="btn-wrapper">
    {icon && (
      <FontAwesomeIcon icon={icon} />
    )}
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {value}
    </button>
  </div>
) : (
  <button
    className={className}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {value}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Button;
