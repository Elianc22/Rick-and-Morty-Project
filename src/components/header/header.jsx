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
      <div>
        {isMobile ? (
          <a className="header-link"> Sign up!</a>
        ) : (
          <p>
            Don`t have an account? <a className="header-link"> Sign up!</a>
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
