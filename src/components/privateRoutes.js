import { Route, useNavigate } from 'react-router-dom';

let auth = !!localStorage.getItem('token');

// eslint-disable-next-line react/prop-types
const Privateroute = ({ component, ...rest }) => {
  const navigate = useNavigate();
  return <Route {...rest}>{auth ? component : navigate('/')}</Route>;
};

export default Privateroute;
