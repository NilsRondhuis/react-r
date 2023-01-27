// import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectIsLoading, selectUsers } from 'redux/selectors';
import { fetchUsers, fetchUsersAsyncThunk } from 'redux/operations';
import css from './UserList.module.css';

const UserList = props => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUsersAsyncThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users.length > 0 && (
        <ul>
          {users.map(({ id, name, avatar }) => (
            <li key={id}>
              <img src={avatar} alt={name} width="250" />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

UserList.propTypes = {};

export default UserList;
