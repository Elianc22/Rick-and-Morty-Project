import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Protectroute = ({ children }) => {
  const auth = !sessionStorage.token;
  if (!auth) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protectroute;
