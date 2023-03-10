import { useGlobalState } from '../context/contextApi';

const HeaderAuth = () => {
  const { userData } = useGlobalState();

  return (
    <div className="header-user">
      <div className="header-user-icon">
        <i className="bi bi-person-circle" />
      </div>
      {userData.fullname && <div>Welcome, {userData.fullname}</div>}
    </div>
  );
};

export default HeaderAuth;
