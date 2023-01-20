import React from 'react';
import Header from './header/header';
// import Formlogin from './login/formLogin';
import Formsignup from './sign-up/formSignUp';
import './_layout.scss';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      {/* <Formlogin /> */}
      <Formsignup />
    </div>
  );
};

export default Layout;
