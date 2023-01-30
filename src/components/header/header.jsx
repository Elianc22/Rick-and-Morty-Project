import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './_header.scss';
import { isMobile } from 'react-device-detect';

const Header = () => {
  const location = useLocation();

  const isSignUpUrl = () => {
    return location.pathname.includes('/sign-up');
  };

  const linkTitle = () => {
    const title = isSignUpUrl() ? 'Have an account?' : 'Don`t have an account?';
    return isMobile ? '' : title;
  };

  const linkText = () => {
    return isSignUpUrl() ? 'Sign in!' : 'Sign up!';
  };

  return (
    <header className="header">
      <div className="header-img-container">
        <img
          className="header-img"
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png"
        />
      </div>
      <div className={isSignUpUrl() ? 'header-link-signup' : 'header-link-login'}>
        {linkTitle()} {''}
        <Link to={isSignUpUrl() ? '/' : '/sign-up'} className="header-link">
          {linkText()}
        </Link>
      </div>
    </header>
  );
};

export default Header;
