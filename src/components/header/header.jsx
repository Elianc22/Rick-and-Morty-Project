import React from 'react';
import './_header.scss';
import HeaderLogo from '../commons/headerLogo';
import HeaderAuth from './headerAuth';
import HeaderLinks from './headerLinks';

const Header = () => {
  const headerLogged = sessionStorage.token;

  return (
    <header className="header">
      <HeaderLogo />
      {headerLogged ? <HeaderAuth /> : <HeaderLinks />}
    </header>
  );
};

export default Header;
