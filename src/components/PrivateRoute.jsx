import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
// import { selectIsRefreshing } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRefreshing = useSelector(selectIsRefreshing);
  // const shoudRedirect = !isLoggedIn && !isRefreshing;

  // return shoudRedirect ? <Navigate to={redirectTo} /> : Component;
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};

export default PrivateRoute;
