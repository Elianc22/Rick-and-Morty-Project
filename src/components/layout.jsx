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
import apiFetchCards from '../services/apiFetchCards';

const Layout = () => {
  const { token, setUserData, setCardData } = useGlobalState();

  useEffect(() => {
    const handleFetchUser = async () => {
      if (token) {
        const userData = await apiFetchUser('users', sessionStorage.token);
        setUserData(userData);
      }
    };
    handleFetchUser();
  }, [token]);

  useEffect(() => {
    const handleFetchCards = async () => {
      if (token) {
        const cardsData = await apiFetchCards('character', sessionStorage.token);
        setCardData(cardsData.results);
      }
    };
    handleFetchCards();
  }, [token]);
  return (
    <div className="layout-container">
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
