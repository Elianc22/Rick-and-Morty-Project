import React from 'react';
import '../../styles/loginStyle.scss';

const Header = () => {
  return (
    <div className="header-style">
      <img
        className="img-header"
        src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
        alt="logo"></img>
      <p className="text-header">Don`t have an account? sign up!</p>
    </div>
  );
};

export default Header;
