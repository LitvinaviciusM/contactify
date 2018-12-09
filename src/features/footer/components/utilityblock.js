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
      <button className="btn btn--link" type="button">
        <FontAwesomeIcon icon="sync-alt" />
        <span>Force sync</span>
      </button>
    )}
  </div>
);

export default UtilityBlock;
