import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/header';
import Home from './home/index';
import Formlogin from './login/formLogin';
import PrivateRoute from '../routes/privateRoutes';
import Formsignup from './sign-up/formSignUp';
import './_layout.scss';
import ProtectedRoute from '../routes/protectedRoutes';
import { useGlobalState } from './context/contextApi';
import apiFetchUser from '../services/apiFetchUser';

const Layout = () => {
  const { token, setUserData } = useGlobalState();

  useEffect(() => {
    const handleFetchUser = async () => {
      if (token) {
        const userData = await apiFetchUser('users', sessionStorage.token);
        setUserData(userData);
      }
    };
    handleFetchUser();
  }, [token]);

  return (
    <div className={`layout-container${!token ? '' : '-home'}`}>
      <Header />
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <Formlogin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <ProtectedRoute>
              <Formsignup />
            </ProtectedRoute>
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
