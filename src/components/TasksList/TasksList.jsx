import PropTypes from 'prop-types';

const TasksList = ({ tasks, onDelete, deleting }) => {
  return (
    <ul>
      {tasks.map(({ id, text }) => (
        <li
          key={id}
          style={{
            display: 'flex',
            gap: 20,
            marginBottom: 10,
          }}
        >
          <p>{text}</p>
          <button
            type="button"
            style={{ alignSelf: 'center' }}
            onClick={() => onDelete(id)}
          >
            {deleting ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.array,
};

export default TasksList;
