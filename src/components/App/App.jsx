import { useState, useEffect } from 'react';
import Section from 'components/common/Section/Section';
import NewsSearchForm from 'components/NewsSearchForm/NewsSearchForm';
import UserList from 'components/UserList/UserList';
import * as API from '../services/api';
import UserMenu from 'components/UserMenu/UserMenu';

const App = () => {
  const [value, setValue] = useState('');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = query => {
    setValue(query);
    setUsers([]);
    setPage(1);
  };

  useEffect(() => {
    if (!value) {
      return;
    }
    (async function () {
      try {
        setLoading(true);
        const response = await API.getImages(value, page);
        setUsers(pS => [...pS, ...response.hits]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [value, page]);

  return (
    <>
      <Section title="Context">
        <UserMenu />
      </Section>
      <Section title="Users' pictures">
        <NewsSearchForm onSubmit={handleSubmit} />
        <UserList users={users} />
        {error && <h1>{error.message}</h1>}
        {loading && <p>Loading...</p>}
        {users.length !== 0 && (
          <button type="button" onClick={() => setPage(pS => pS + 1)}>
            Load more...
          </button>
        )}
      </Section>
    </>
  );
};

export default App;
