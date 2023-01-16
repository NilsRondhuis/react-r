import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useLogOutRedirect = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);
};

export default useLogOutRedirect;
