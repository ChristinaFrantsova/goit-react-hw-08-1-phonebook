import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authThunk';
import { Form, Label, Input, Title, Button } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        <Title>Email:</Title>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <Title>Password:</Title>
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};

export default LoginForm;
