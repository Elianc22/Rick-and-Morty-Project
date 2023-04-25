import { useGlobalState } from '../context/contextApi';
import { isMobile } from 'react-device-detect';

const HeaderAuth = () => {
  const { userData, setIsPageFav } = useGlobalState();

  return (
    <>
      <div className={`header-user${isMobile ? '' : '-desk'}`}>
        <span onClick={() => setIsPageFav(true)} className="header-fav">
          <i className="bi bi-heart-fill header-icon" />
          Favourites
        </span>
        {isMobile ? (
          <i className="bi bi-person-circle header-icon" />
        ) : (
          <span className="header-user-icon">
            <i className="bi bi-person-circle header-icon" />
            {userData.fullname && <div>Welcome, {userData.fullname}</div>}
          </span>
        )}
      </div>
    </>
  );
};

export default HeaderAuth;
