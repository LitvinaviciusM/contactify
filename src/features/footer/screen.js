import React from 'react';
import NavPanel from './components/navpanel';
import UtilityPanel from './components/utilitypanel';
import MenuPanel from './components/menupanel';

const Footer = ({ lastSynced }) => (
  <div className="footer">
    <NavPanel />
    <UtilityPanel lastSynced={lastSynced} />
    <MenuPanel />
  </div>
);

export default Footer;
