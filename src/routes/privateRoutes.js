import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const auth = sessionStorage.token;
  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
