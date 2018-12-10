import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UtilityBlock = ({
  icon,
  label,
  data,
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

export default UtilityBlock;
