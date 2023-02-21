import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectRoute = ({ children }) => {
  const notAuthorized = !sessionStorage.token;
  if (!notAuthorized) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectRoute;
