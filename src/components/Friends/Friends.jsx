import { useState, useMemo, memo } from 'react';
import PropTypes from 'prop-types';

const Friends = ({ friends }) => {
  const [count, setCount] = useState(0);
  const [field, setField] = useState('');

  const handleChange = e => {
    setField(e.target.value.toLowerCase());
  };

  const filteredFriends = useMemo(() => {
    console.log("I didn't call when work Counter");
    return friends.filter(friend => friend.toLowerCase().includes(field));
  }, [field, friends]);

  return (
    <div>
      <button type="button" onClick={() => setCount(pS => pS + 1)}>
        {count}
      </button>
      <hr />
      <form>
        <input type="text" value={field} name="text" onChange={handleChange} />
      </form>

      <ul style={{ paddingLeft: 40 }}>
        {filteredFriends.map((friend, idx) => (
          <li key={idx}>
            <p>{friend}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default memo(Friends);
