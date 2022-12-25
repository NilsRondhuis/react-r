import PropTypes from 'prop-types';

const UserList = ({ users }) => {
  return (
    <div style={{ padding: 20 }}>
      <ul>
        {users.map(({ id, user, largeImageURL }) => (
          <li key={id}>
            <a href={largeImageURL} target="_blank" rel="noreferrer noopener">
              {user}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList;
