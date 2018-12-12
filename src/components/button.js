import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({
  className,
  disabled,
  name,
  onClick,
  type,
  value,
  icon,
}) => icon ? (
  <div className="btn-wrapper">
    {icon && (
      <FontAwesomeIcon icon={icon} />
    )}
    <button
      className={className}
      disable={disabled}
      onClick={onClick}
      type={type}
    >
      {value}
    </button>
  </div>
) : (
  <button
    className={className}
    disable={disabled}
    onClick={onClick}
    type={type}
  >
    {value}
  </button>
);

export default Button;
