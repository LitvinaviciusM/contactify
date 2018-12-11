import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Logo = () => (
  <section className="header__logo">
    <FontAwesomeIcon icon="user-circle" className="header__logo--badge" />
    <h1 className="header__logo--name">
      CONTACTIFY
    </h1>
  </section>
);

export default Logo;
