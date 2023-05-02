/* eslint-disable react/prop-types */
import React from 'react';
import { useGlobalState } from '../../context/contextApi';
import Cards from './cards';
import '../_home.scss';
import Spinner from 'react-bootstrap/Spinner';

// eslint-disable-next-line react/prop-types
const CardsList = ({ cards, error }) => {
  const { loading } = useGlobalState();

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status" size="sm" className="mt-0" />
      ) : (
        <>
          {error ? (
            <div className="container-error">
              <h2>{error}</h2>
            </div>
          ) : (
            <>
              <div className="container-home">
                <div className="container cards">
                  {cards &&
                    cards.map((card) => {
                      return (
                        <div id={card.id} key={card.id} className="card cards-container">
                          <Cards id={card.id} key={card.id} card={card} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CardsList;
