import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunk';
import { Form, Label, Title, Input, Button } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        <Title>Username:</Title>
        <Input type="text" name="name" />
      </Label>
      <Label>
        <Title>Email:</Title>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <Title>Password:</Title>
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">SignUp</Button>
    </Form>
  );
};

export default RegisterForm;
