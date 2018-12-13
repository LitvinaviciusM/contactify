import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UtilityBlock = ({
  data,
  icon,
  label,
  sync,
}) => (
  <div className="block">
    <div className="block__icon">
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className="block__main">
      <span>{label}</span>
      <span>{data}</span>
    </div>
    {sync && (
      <nav className="block__action">
        <FontAwesomeIcon icon="sync-alt" />
        &nbsp;
        <a href="/">Force sync</a>
      </nav>
    )}
  </div>
);

UtilityBlock.propTypes = {
  data: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  sync: PropTypes.bool,
};

export default UtilityBlock;
