import useLogOutRedirect from 'hooks/useLogOutRedirect';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logOut } from 'redux/userSlice';

const Profile = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useLogOutRedirect();

  return (
    <div>
      <h1>Hello {user.login}</h1>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default Profile;
