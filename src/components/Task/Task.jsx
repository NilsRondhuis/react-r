import { useDispatch } from 'react-redux';
import actions from 'redux/actions';
import PropTypes from 'prop-types';
import css from './Task.module.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(actions.deleteTask(task.id));
  const handleToggle = () => dispatch(actions.toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        defaultChecked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        x
      </button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape(),
};

export default Task;
