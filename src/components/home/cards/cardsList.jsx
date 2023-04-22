import React, { useEffect, useState } from 'react';
import apiFetchCards from '../../../services/apiFetchCards';
import { useGlobalState } from '../../context/contextApi';
import Cards from './cards';
import Pages from './pages';
import '../_home.scss';
import Search from '../search/searchFilter';
import Spinner from 'react-bootstrap/Spinner';
import { useFavorites } from '../../context/contextFavorites';

const CardsList = () => {
  const [error, setError] = useState();
  const [infoData, setInfoData] = useState([]);
  const { cardsData, setCardsData, token, page, search, loading, setLoading } = useGlobalState();
  const { favorites, setFavorites } = useFavorites();
  const [icon, setIcon] = useState();
  // const [isFavorites, setIsFavorites] = useState(false);

  const handleToggleFavorites = (event) => {
    const isFavorite = favorites.filter((fav) => {
      console.log('Favorites: ', +event.target.parentElement.parentElement.id);
      console.log('Fav: ', fav.id == +event.target.parentElement.parentElement.id);
      fav.id == +event.target.parentElement.parentElement.id;
    });
    console.log('IsFav: ', isFavorite);
    if (isFavorite.length > 0) {
      setIcon(false);
      console.log(
        favorites.filter((element) => element.id !== +event.target.parentElement.parentElement.id)
      );
      setFavorites(
        favorites.filter((element) => element.id !== +event.target.parentElement.parentElement.id)
      );
    } else {
      setIcon(true);
      setFavorites([
        ...favorites,
        cardsData.filter(
          (element) => element.id === +event.target.parentElement.parentElement.id
        )[0]
      ]);
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
      <Search />
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
                  {cardsData &&
                    cardsData.map((card) => {
                      return (
                        <div id={card.id} key={card.id} className="card cards-container">
                          <Cards
                            id={card.id}
                            key={card.id}
                            icon={icon}
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
    </div>
  );
};

export default CardsList;
