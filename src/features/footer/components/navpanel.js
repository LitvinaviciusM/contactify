import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavPanel = () => (
  <section className="nav-panel inner">
    <nav className="nav-panel__navigation">
      <a className="nav-item" href="/">Dashboard</a>
      <a className="nav-item" href="/">Contacts</a>
      <a className="nav-item" href="/">Notifications</a>
    </nav>
    <div className="nav-panel__secondary">
      <span className="copyright">
        <FontAwesomeIcon icon="copyright" />
        &nbsp;
        2015 Contactify
      </span>
      <nav className="help">
        <a className="nav-item" href="/">About</a>
        <a className="nav-item" href="/">Privacy</a>
      </nav>
    </div>
  </section>
);

export default NavPanel;
