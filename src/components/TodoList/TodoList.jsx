import React from "react";
import PropTypes from "prop-types";
import css from "./TodoList.module.css";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  // посчитать todo
  //const completedCount = todos.filter(({ completed }) => completed).length; v1
  const completedCount = todos.reduce(
    (acc, todo) => (todo.completed ? (acc += 1) : acc),
    0
  ); //v2
  return (
    <div>
      <div>
        <p>Quantity todo: {todos.length}</p>
        <p>Comleted todo: {completedCount}</p>
      </div>
      <ul className={css.list}>
        {todos.map(({ id, text, completed }) => (
          <li key={id} className={css.item}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
            <p>{text}</p>
            <button
              type="button"
              className={css.btn}
              onClick={() => onDeleteTodo(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
