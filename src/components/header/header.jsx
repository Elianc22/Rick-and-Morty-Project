import React from 'react';
import './_header.scss';

const Header = () => {
  return (
    <header className="header">
      <img
        className="header-img"
        src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png"></img>
      <a className="header-link">Sign up!</a>
    </header>
  );
};

export default Header;
