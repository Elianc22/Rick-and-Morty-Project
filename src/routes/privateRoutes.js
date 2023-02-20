import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Privateroute = ({ children }) => {
  const auth = sessionStorage.token;
  if (!auth) {
    return <Navigate to="/log-in" replace />;
  }
  return children;
};

export default Privateroute;
