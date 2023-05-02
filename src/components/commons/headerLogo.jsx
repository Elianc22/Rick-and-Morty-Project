import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <div className="header-img-container">
      <Link to={'/home'}>
        <img
          className="header-img"
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png"
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;
