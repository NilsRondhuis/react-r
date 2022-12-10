import PropTypes from "prop-types";
import IconBtn from "../../common/IconBtn/IconBtn";
import css from "./Todo.module.css";
import { ReactComponent as DeleteIcon } from "../../../images/icons/bin.svg";

const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
  return (
    <div className={css.box}>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
      <p>{text}</p>
      {/* <button type="button" className={css.btn} onClick={onDeleteTodo}>
        Delete
      </button> */}
      <IconBtn onClick={onDeleteTodo} aria-label="Delete todo">
        <DeleteIcon width={24} height={24} fill="white" />
      </IconBtn>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default Todo;
