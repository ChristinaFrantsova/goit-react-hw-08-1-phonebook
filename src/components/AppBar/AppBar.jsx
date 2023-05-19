import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
// import AuthNav from 'components/AuthNav/AuthNav';
// import UserMenu from 'components/UserMenu/UserMenu';
// import { selectIsLoggedIn } from 'redux/auth/selectors';

const AppBar = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header
      style={{
        display: 'flex',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      <AuthNav />
    </header>
  );
};

export default AppBar;
