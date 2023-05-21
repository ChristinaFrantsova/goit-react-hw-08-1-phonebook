import { HiHome } from 'react-icons/hi';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">
        <HiHome style={{ color: '#274b54', width: '26px', height: '26px' }} />
      </NavLink>
      {isLoggedIn && <Link to="/contacts">Phonebook</Link>}
    </nav>
  );
};

export default Navigation;
