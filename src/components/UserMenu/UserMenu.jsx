// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/authThunk';
// import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  //   const user = useSelector(selectUser);
  //   const dispatch = useDispatch();

  //   const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <p>Welcome, user.name</p>
      {/* {user.name} */}
      <button>Logout</button>
      {/* onClick={handleLogOut} */}
    </div>
  );
};

export default UserMenu;
