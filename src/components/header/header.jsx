import React from 'react';
import './_header.scss';
import { isMobile } from 'react-device-detect';

const Header = () => {
  return (
    <header className="header">
      <div className="header-img-container">
        <img
          className="header-img"
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png"
        />
      </div>
      <div className="header-link-container">
        {isMobile ? '' : 'Don`t have an account? '} <a className="header-link"> Sign up!</a>
      </div>
    </header>
  );
};

export default Header;
