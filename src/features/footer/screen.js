import React from 'react';
import PropTypes from 'prop-types';
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

Footer.propTypes = {
  lastSynced: PropTypes.number,
};

export default Footer;
