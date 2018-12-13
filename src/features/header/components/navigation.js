import React from 'react';
import { getLocationPathname } from '../../../common/utils';

const Navigation = () => (
  <section className="header__navigation">
    <nav className="panel">
      <a
        className={`nav-item nav-item--left ${getLocationPathname() === '/dashboard' ? 'nav-item--active' : ''}`}
        href="/"
      >
        DASHBOARD
      </a>
      <a
        className={`nav-item nav-item--mid ${getLocationPathname() === '/' ? 'nav-item--active' : ''}`}
        href="/"
      >
        CONTACTS
      </a>
      <a
        className={`nav-item nav-item--right ${getLocationPathname() === '/notifications' ? 'nav-item--active' : ''}`}
        href="/"
      >
        NOTIFICATIONS
      </a>
    </nav>
  </section>
);

export default Navigation;
