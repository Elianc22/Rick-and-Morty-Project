import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/header';
import Home from './home/index';
import Formlogin from './login/formLogin';
import PrivateRoute from '../routes/privateRoutes';
import Formsignup from './sign-up/formSignUp';
import './_layout.scss';
import ProtectRoute from '../routes/protectRoutes';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectRoute>
              <Formlogin />
            </ProtectRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <ProtectRoute>
              <Formsignup />
            </ProtectRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default Layout;
