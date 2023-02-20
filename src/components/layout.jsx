import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Protectroute from '../routes/protectRoutes';
import Header from './header/header';
import Home from './home/index';
import Formlogin from './login/formLogin';
import Privateroute from '../routes/privateRoutes';
import Formsignup from './sign-up/formSignUp';
import './_layout.scss';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Routes>
        <Route
          path="/log-in"
          element={
            <Protectroute>
              <Formlogin />
            </Protectroute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Protectroute>
              <Formsignup />
            </Protectroute>
          }
        />
        <Route
          path="/"
          element={
            <Privateroute>
              <Home />
            </Privateroute>
          }
        />
      </Routes>
    </div>
  );
};

export default Layout;
