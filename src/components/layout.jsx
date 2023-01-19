import React from 'react';
import Header from './header/header';
import Formlogin from './login/formLogin';
import './_layout.scss';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Formlogin />
    </div>
  );
};

export default Layout;
