import React, { useEffect, useState } from 'react';
import apiFetchCards from '../../../services/apiFetchCards';
import { useGlobalState } from '../../context/contextApi';
import Cards from './cards';
import Pages from './pages';
import '../_home.scss';
import FiltersHome from '../filters/filtersHome';
import Search from '../search/searchFilter';

const CardsList = () => {
  const [page, setPage] = useState(0);
  // const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [infoData, setInfoData] = useState([]);
  const { cardsData, setCardsData, token } = useGlobalState();

  useEffect(() => {
    const handleFetchCards = async () => {
      if (token) {
        const cardData = await apiFetchCards(`${page}`, `${search}`, sessionStorage.token);
        if (cardData.error) {
          setCardsData(cardData.error);
        } else {
          setCardsData(cardData.results);
          setInfoData(cardData.info);
        }
      }
    };
    handleFetchCards();
  }, [token, page, search]);

  return (
    <div>
      <Search setPage={setPage} setSearch={setSearch} />
      {cardsData == 'There is nothing here' ? (
        <div className="container-error">
          <h2>{cardsData}</h2>
        </div>
      ) : (
        <>
          <div className="container-home">
            <FiltersHome />
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
          <Pages infoData={infoData} page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
};

export default CardsList;
