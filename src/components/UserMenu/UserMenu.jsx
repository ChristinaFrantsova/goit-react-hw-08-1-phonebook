import { RiUserFollowFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunk';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Button, Wrapper } from './UserMenu.styled';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <p>
        Welcome,
        <RiUserFollowFill
          style={{
            color: '#274b54',
            width: '20px',
            height: '20px',
            marginRight: '6px',
            marginLeft: '5px',
          }}
        />
        {user.name}
      </p>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
