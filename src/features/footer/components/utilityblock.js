import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UtilityBlock = ({
  icon,
  label,
  data,
  sync,
}) => (
  <div>
    <FontAwesomeIcon icon={icon} />
    <div>
      <span>{label}</span>
      <span>{data}</span>
    </div>
    {sync && (
      <button type="button">
        <FontAwesomeIcon icon="sync-alt" />
        <span>Force sync</span>
      </button>
    )}
  </div>
);

export default UtilityBlock;
