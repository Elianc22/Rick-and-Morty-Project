import CardsList from './cards/cardsList';
import './_home.scss';
import Pages from './cards/pages';
import Search from './search/searchFilter';
import apiFetchCards from '../../services/apiFetchCards';
import { useEffect, useState } from 'react';
import { useGlobalState } from '../context/contextApi';

const Home = () => {
  const [error, setError] = useState();
  const [infoData, setInfoData] = useState([]);
  const { cardsData, setCardsData, token, page, search, setLoading } = useGlobalState();

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
    <div className="home">
      <Search />
      <CardsList cards={cardsData} error={error} />
      <Pages infoData={infoData} />
    </div>
  );
};

export default Home;
