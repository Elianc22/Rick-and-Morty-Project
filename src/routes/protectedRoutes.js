import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const notAuthorized = sessionStorage.token;
  if (notAuthorized) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
