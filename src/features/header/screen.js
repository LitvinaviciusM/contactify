import React from 'react';
import PropTypes from 'prop-types';
import Logo from './components/logo';
import Navigation from './components/navigation';
import Search from './components/search';
import ProfileMenu from './components/profilemenu'

const Header = ({ fullName }) => (
  <div className="header inner">
    <Logo />
    <Navigation />
    <Search />
    <ProfileMenu fullName={fullName} />
  </div>
);

Header.propTypes = {
  fullName: PropTypes.string,
};

export default Header;
