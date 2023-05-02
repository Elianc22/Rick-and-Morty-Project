import { useFavorites } from '../context/contextFavorites';
import CardsList from '../home/cards/cardsList';
import './_Favorites.scss';

const Favorites = () => {
  const { favorites } = useFavorites();
  const emptyListMessage = (
    <div className="empty-fav">
      <h2>There is nothing here</h2>
    </div>
  );

  return (
    <div className="favorite">
      <h1>Favorites List</h1>
      {favorites.length > 0 ? <CardsList cards={favorites} /> : emptyListMessage}
    </div>
  );
};

export default Favorites;
