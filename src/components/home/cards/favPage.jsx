import { useContext } from 'react';
import { FavoritesContext } from '../../context/contextFavorites';

const FavoritePage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      {favorites.map((fav) => (
        <div key={fav.id}></div>
      ))}
    </div>
  );
};

export default FavoritePage;
