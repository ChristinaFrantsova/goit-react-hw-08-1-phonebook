import { Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <Link to="/register">SignUp</Link>
      <Link to="/login">LogIn</Link>
    </div>
  );
};

export default AuthNav;
