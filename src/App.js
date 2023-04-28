import './_App.scss';
import './styles/media.scss';
import { isMobile } from 'react-device-detect';
import Layout from './components/layout';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  const isFavUrl = () => {
    return location.pathname.includes('/favorites');
  };

  const classNameFav = isFavUrl() ? '-desk-fav' : '-desk';

  return (
    <div className={`App${isMobile ? '' : classNameFav}`}>
      <Layout />
    </div>
  );
}

export default App;
