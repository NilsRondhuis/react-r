import { useState, useEffect } from 'react';
import axios from 'axios';

const ChildComponent = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    (async function () {
      try {
        const users = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
          { signal: controller.signal }
        );
        setUsers(pS => [...pS, ...users.data]);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h2>Child Component</h2>

      {users.length > 0 && (
        <ul>
          {users.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChildComponent;
