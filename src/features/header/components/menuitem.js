import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = ({ option, icon }) => (
  <div className="menu-item">
    <FontAwesomeIcon className="menu-item__icon" icon={icon} />
    <span className="menu-item__name">{option}</span>
  </div>
);

MenuItem.propTypes = {
  option: PropTypes.string,
  icon: PropTypes.string,
};

export default MenuItem;
