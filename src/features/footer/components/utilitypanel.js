import React from 'react';
import UtilityBlock from './utilityblock';

const UtilityPanel = ({ lastSynced }) => (
  <section>
    <UtilityBlock
      icon="cloud-upload-alt"
      label="Last synced:"
      data={lastSynced}
      sync
    />
    <UtilityBlock
      icon="cloud-upload-alt"
      label="Help desk and Resolution center available:"
      data="I-IV 8:00-18:00, V 8:00-16:45"
    />
  </section>
);

export default UtilityPanel;
