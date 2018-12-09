import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavPanel = () => (
  <section>
    <ul>
      <li>Dashboards</li>
      <li>Contacts</li>
      <li>Notafications</li>
    </ul>
    <div>
      <FontAwesomeIcon icon="copyright" />
      <span> 2015 Contactify </span>
      <span>About</span>
      <span>Privacy</span>
    </div>
  </section>
);

export default NavPanel;
