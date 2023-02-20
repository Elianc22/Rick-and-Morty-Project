import { Navigate } from 'react-router-dom';

const auth = sessionStorage.token;

// eslint-disable-next-line react/prop-types
const Privateroute = ({ children }) => {
  //   const navigate = useNavigate();
  if (!auth) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Privateroute;
