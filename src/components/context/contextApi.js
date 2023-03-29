import React, { createContext, useContext, useState } from 'react';

export const ContextApi = createContext({});

const Logged = sessionStorage.token;

// eslint-disable-next-line react/prop-types
export const ApiProvider = ({ children }) => {
  const [token, setToken] = useState(Logged);
  const [userData, setUserData] = useState({});
  const [cardsData, setCardsData] = useState(null);

  return (
    <ContextApi.Provider
      value={{
        token,
        setToken,
        userData,
        setUserData,
        cardsData,
        setCardsData
      }}>
      {children}
    </ContextApi.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(ContextApi);
  return context;
};
