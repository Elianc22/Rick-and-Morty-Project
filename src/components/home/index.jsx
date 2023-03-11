import React from 'react';
import { useGlobalState } from '../context/contextApi';

const Home = () => {
  const { cardData } = useGlobalState();

  return (
    <div>
      {cardData &&
        cardData.map((cardData) => {
          return (
            <div key={cardData.id}>
              <div>{cardData.name}</div>
              <img src={cardData.image} />
            </div>
          );
        })}
    </div>
  );
};

export default Home;
