import { useFavorites } from '../context/contextFavorites';
import CardsList from '../home/cards/cardsList';
import './_Favorites.scss';

const Favorites = () => {
  const { favorites } = useFavorites();
  const error = <div className="error-fav">There is nothing here</div>;
  return (
    <div className="favorite">
      <h1>Favorites</h1>
      {favorites >= 0 ? error : <CardsList cards={favorites} />}
    </div>
  );
};

export default Favorites;
