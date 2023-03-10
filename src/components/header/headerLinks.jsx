import { isMobile } from 'react-device-detect';
import { Link, useLocation } from 'react-router-dom';

const HeaderLinks = () => {
  const location = useLocation();

  const isSignUpUrl = () => {
    return location.pathname.includes('/sign-up');
  };

  const linkTitle = () => {
    const title = isSignUpUrl() ? 'Have an account?' : 'Don`t have an account?';
    return isMobile ? '' : title;
  };

  const linkText = () => {
    return isSignUpUrl() ? 'Sign in!' : 'Sign up!';
  };
  return (
    <div className={isSignUpUrl() ? 'header-link-signup' : 'header-link-login'}>
      {linkTitle()} {''}
      <Link to={isSignUpUrl() ? '/login' : '/sign-up'} className="header-link">
        {linkText()}
      </Link>
    </div>
  );
};

export default HeaderLinks;
