import React, { createContext, useContext, useState } from 'react';

export const ContextFavorites = createContext({});

// eslint-disable-next-line react/prop-types
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <ContextFavorites.Provider value={{ favorites, setFavorites }}>
      {children}
    </ContextFavorites.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(ContextFavorites);
  return context;
};
