import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';

const UserLogin = () => {
  const user = useSelector(state => state.user);

  if (user.isLoggedIn) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div>
      <h1>Login page</h1>
      <LoginForm />
    </div>
  );
};

export default UserLogin;
