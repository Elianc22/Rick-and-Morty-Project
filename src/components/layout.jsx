import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/header';
import Home from './home/index';
import Formlogin from './login/formLogin';
import Formsignup from './sign-up/formSignUp';
import './_layout.scss';

const Layout = () => {
  // eslint-disable-next-line no-unused-vars
  const logedIn = !!localStorage.getItem('token');
  return (
    <div className="layout-container">
      <Header />
      <Routes>
        <Route path="/" element={<Formlogin />} />
        <Route path="/sign-up" element={<Formsignup />} />
        <Route path="/home" element={<Home logedIn />} />
      </Routes>
    </div>
  );
};

export default Layout;
