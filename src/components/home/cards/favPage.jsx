import { useFavorites } from '../../context/contextFavorites';
import Status from './cardsStatus';

const FavoritePage = (cardFav, onClickFav, id) => {
  const { favorites } = useFavorites();
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
        <i onClick={onClickFav} className={`bi bi-heart${classIcon()} fs-5`} />
      </div>
      <Status status={cardFav.cardFav.status} />
      <img
        className="img-fluid rounded-circle image mb-3 mt-1"
        src={cardFav.cardFav.image}
        alt={cardFav.cardFav.name}
      />
      <div className="content">
        <h4 className="mb-4">{cardFav.cardFav.name}</h4>
        <div>
          <u className="fs-6">Last location:</u>
          <div className="fs-5">{cardFav.cardFav.location.name}</div>
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
