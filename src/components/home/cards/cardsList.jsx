import React, { useEffect, useState } from 'react';
import apiFetchCards from '../../../services/apiFetchCards';
import { useGlobalState } from '../../context/contextApi';
import Cards from './cards';
import Pages from './pages';
import '../_home.scss';
import Search from '../search/searchFilter';

const CardsList = () => {
  const [error, setError] = useState([]);
  const [infoData, setInfoData] = useState([]);
  const { cardsData, setCardsData, token, page, search } = useGlobalState();

  useEffect(() => {
    const handleFetchCards = async () => {
      if (token) {
        const cardData = await apiFetchCards(`${page}`, `${search}`, sessionStorage.token);
        setCardsData(cardData.results);
        setInfoData(cardData.info);
        setError(cardData.error);
      }
    };
    handleFetchCards();
  }, [token, page, search]);

  return (
    <div>
      <Search />
      {!cardsData ? (
        <div className="container-error">
          <h2>{error}</h2>
        </div>
      ) : (
        <>
          <div className="container-home">
            <div className="container cards">
              {cardsData &&
                cardsData.map((card) => {
                  return (
                    <div key={card.id} className="card cards-container">
                      <Cards card={card} />
                    </div>
                  );
                })}
            </div>
          </div>
          <Pages infoData={infoData} />
        </>
      )}
    </div>
  );
};

export default CardsList;
