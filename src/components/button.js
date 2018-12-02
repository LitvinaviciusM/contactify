import React from 'react';

const Button = ({
  className,
  disabled,
  name,
  onClick,
  type,
  value,
}) => (
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
