// import { useAuth } from 'hooks';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Phonebook</NavLink>
      {/* {isLoggedIn && <NavLink to="/contacts">Phonebook</NavLink>} */}
    </nav>
  );
};

export default Navigation;
