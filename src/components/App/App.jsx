import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useCreateTaskMutation,
} from 'redux/pokemon';
import Section from 'components/common/Section/Section';
import TasksList from 'components/TasksList/TasksList';

const App = () => {
  const [value, setValue] = useState('');
  const { data, error, isFetching } = useGetTasksQuery({
    skip: value === '',
    // pollingInterval: 3000,
    // refetchOnFocus: true,
    // refetchOnReconnect: true,
  });
  const [deleteTask, { isLoading: isDeleting }] = useDeleteTaskMutation();
  const [createTask, { isLoading: isCreating }] = useCreateTaskMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.name.value;

    createTask(value);
    e.currentTarget.reset();
  };

  const handleDelete = taskId => {
    deleteTask(taskId);
  };

  return (
    <>
      <Section title="RTK query">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input type="text" name="name" />
          <button type="submit">Add</button>
        </form>

        {isCreating && <p>Creating...</p>}
        {isFetching && <p>Loading...</p>}
        {error && <p>Error...</p>}
        {data && (
          <TasksList
            tasks={data}
            onDelete={handleDelete}
            deleting={isDeleting}
          />
        )}
      </Section>
    </>
  );
};

export default App;
