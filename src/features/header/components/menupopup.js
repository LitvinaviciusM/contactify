import React from 'react';
import MenuItem from './menuitem';

const Menupopup = () => (
  <div className="menu-popup">
    <MenuItem option="Groups" icon="users"/>
    <MenuItem option="Frequently contacted" icon="comments"/>
    <MenuItem option="Preferences" icon="wrench" />
    <MenuItem option="Log out" icon="power-off" />
  </div>
);

export default Menupopup;
