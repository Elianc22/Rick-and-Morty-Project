import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/header';
import Formlogin from './login/formLogin';
import Formsignup from './sign-up/formSignUp';
import './_layout.scss';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Routes>
        <Route path="/" element={<Formlogin />} />
        <Route path="/sign-up" element={<Formsignup />} />
      </Routes>
    </div>
  );
};

export default Layout;
