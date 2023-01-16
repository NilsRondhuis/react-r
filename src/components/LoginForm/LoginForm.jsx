import { useDispatch } from 'react-redux';
import { logIn } from 'redux/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn(form.elements.login.value));
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
