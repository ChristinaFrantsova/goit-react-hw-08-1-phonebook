// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/authThunk';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button">
        {/* onClick={handleLogOut} */}
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
