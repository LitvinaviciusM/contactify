import React from 'react';
import Logo from './components/logo';
import Navigation from './components/navigation';
import Search from './components/search';
import ProfileMenu from './components/profilemenu'

const Header = () => (
  <div>
    <Logo />
    <Navigation />
    <Search />
    <ProfileMenu />
  </div>
);

export default Header;
