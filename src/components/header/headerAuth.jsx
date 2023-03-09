import { useGlobalState } from '../context/contextApi';

const HeaderAuth = () => {
  const { userData } = useGlobalState();

  return (
    <div className="header-user">
      <div className="header-user-icon">
        <i className="bi bi-person-circle"></i>
      </div>
      <div>{`Welcome, ${userData.fullname}!`}</div>
    </div>
  );
};

export default HeaderAuth;
