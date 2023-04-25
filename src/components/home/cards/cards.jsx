/* eslint-disable react/prop-types */
import { useFavorites } from '../../context/contextFavorites';
import '../_home.scss';
import Status from './cardsStatus';

function Cards({ card, onClickFav, id }) {
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
