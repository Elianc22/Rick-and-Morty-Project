import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (logedIn) => {
  const navigate = useNavigate();
  if (!logedIn) {
    navigate('/login');
  }
  return <div>Home</div>;
};

export default Home;