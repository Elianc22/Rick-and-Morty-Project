import { useFavorites } from '../context/contextFavorites';
import CardsList from '../home/cards/cardsList';
import './_Favorites.scss';

const Favorites = () => {
  const { favorites } = useFavorites();
  const error = (
    <div className="error-fav">
      <h2>There is nothing here</h2>
    </div>
  );

  return (
    <div className="favorite">
      <h1>Favorites List</h1>
      {favorites == 0 ? error : <CardsList cards={favorites} />}
    </div>
  );
};

export default Favorites;
