import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { fetchTasks } from 'redux/operations';
import { selectIsLoading, selectError, selectTasks } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && <p>Is loading...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && <TaskList />}
    </Layout>
  );
};
