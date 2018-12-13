import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import UtilityBlock from './utilityblock';

const UtilityPanel = ({ lastSynced }) => (
  <section className="utility-panel">
    <UtilityBlock
      icon="cloud-upload-alt"
      label="Last synced:"
      data={lastSynced ? moment(lastSynced).format('YYYY-MM-DD HH:mm:ss') : ''}
      sync
    />
    <UtilityBlock
      icon="cloud-upload-alt"
      label="Help desk and Resolution center available:"
      data="I-IV 8:00-18:00, V 8:00-16:45"
    />
  </section>
);

UtilityPanel.propTypes = {
  lastSynced: PropTypes.number,
};

export default UtilityPanel;
