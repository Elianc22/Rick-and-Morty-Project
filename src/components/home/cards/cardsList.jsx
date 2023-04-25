import React, { useEffect, useState } from 'react';
import apiFetchCards from '../../../services/apiFetchCards';
import { useGlobalState } from '../../context/contextApi';
import Cards from './cards';
import Pages from './pages';
import '../_home.scss';
import Search from '../search/searchFilter';
import Spinner from 'react-bootstrap/Spinner';
import { useFavorites } from '../../context/contextFavorites';
import FavoritePage from './favPage';

const CardsList = () => {
  const [error, setError] = useState();
  const [infoData, setInfoData] = useState([]);
  const { cardsData, setCardsData, token, page, search, loading, setLoading, isPageFav } =
    useGlobalState();
  const { favorites, setFavorites } = useFavorites();

  const handleToggleFavorites = (event) => {
    const elementID = +event.target.parentElement.parentElement.id;
    const isFavorite = favorites.filter((fav) => fav.id == elementID);
    if (isFavorite.length > 0) {
      setFavorites(favorites.filter((element) => element.id !== elementID));
    } else {
      setFavorites([...favorites, cardsData.filter((element) => element.id === elementID)[0]]);
    }
  };

  useEffect(() => {
    const handleFetchCards = async () => {
      if (token) {
        setLoading(true);
        const apiResult = await apiFetchCards(`${page}`, `${search}`, sessionStorage.token);
        setLoading(false);
        if (apiResult.error) {
          setError(apiResult.error);
        } else {
          setError(undefined);
          setCardsData(apiResult.results);
          setInfoData(apiResult.info);
        }
      }
    };
    handleFetchCards();
  }, [token, page, search]);

  return (
    <div>
      {isPageFav ? <h1>Favorites</h1> : <Search />}
      {loading ? (
        <Spinner animation="border" role="status" size="sm" className="mt-0" />
      ) : (
        <>
          {isPageFav ? (
            <div className="container-home">
              <div className="container cards">
                {favorites.map((cardFav) => {
                  return (
                    <div id={cardFav.id} key={cardFav.id} className="card cards-container">
                      <FavoritePage
                        id={cardFav.id}
                        key={cardFav.id}
                        onClickFav={handleToggleFavorites}
                        cardFav={cardFav}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
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
                      {cardsData &&
                        cardsData.map((card) => {
                          return (
                            <div id={card.id} key={card.id} className="card cards-container">
                              <Cards
                                id={card.id}
                                key={card.id}
                                onClickFav={handleToggleFavorites}
                                card={card}
                              />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <Pages infoData={infoData} />
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CardsList;
