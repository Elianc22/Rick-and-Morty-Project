import React from 'react';
import './_header.scss';
import HeaderLogo from '../commons/headerLogo';
import HeaderAuth from './headerAuth';
import HeaderLinks from './headerLinks';
import { useGlobalState } from '../context/contextApi';

const Header = () => {
  const { token } = useGlobalState();

  return (
    <header className={token ? 'header-auth' : 'header'}>
      <HeaderLogo />
      {token ? <HeaderAuth /> : <HeaderLinks />}
    </header>
  );
};

export default Header;
