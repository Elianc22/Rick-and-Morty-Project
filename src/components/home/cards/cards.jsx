/* eslint-disable react/prop-types */
import { useGlobalState } from '../../context/contextApi';
import { useFavorites } from '../../context/contextFavorites';
import '../_home.scss';
import Status from './cardsStatus';

function Cards({ card, id }) {
  const { favorites, setFavorites } = useFavorites();
  const { cardsData } = useGlobalState();

  const handleToggleFavorites = (event) => {
    const elementID = +event.target.parentElement.parentElement.id;
    const isFavorite = favorites.filter((fav) => fav.id == elementID);
    if (isFavorite.length > 0) {
      setFavorites(favorites.filter((element) => element.id !== elementID));
    } else {
      setFavorites([...favorites, cardsData.filter((element) => element.id === elementID)[0]]);
    }
  };

  const classIcon = () => {
    if (favorites.find((el) => el.id == +id)) {
      return '-fill fav-icon-true';
    } else {
      return ' fav-icon-false';
    }
  };

  return (
    <div id={id}>
      <div className="fav-icon-container">
        <i onClick={handleToggleFavorites} className={`bi bi-heart${classIcon()} fs-5`} />
      </div>
      <Status status={card.status} />
      <img className="img-fluid rounded-circle image mb-3 mt-1" src={card.image} alt={card.name} />
      <div className="content">
        <h4 className="mb-4">{card.name}</h4>
        <div>
          <u className="fs-6">Last location:</u>
          <div className="fs-5">{card.location.name}</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
