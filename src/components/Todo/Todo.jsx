import { Component } from "react";
import s from "./Todo.module.css";

class Todo extends Component {
  handleChange = (e) => {
    const { checked } = e.target;
    const todoId = e.target.id;
    const { todos, onCompleteTodo } = this.props;
    const targetTodo = todos.filter(({ id }) => id.toString() === todoId);
    checked
      ? (targetTodo[0].completed = true)
      : (targetTodo[0].completed = false);
    onCompleteTodo(todos);
  };

  render() {
    const { todos, onDeleteTodo } = this.props;
    return (
      <ul className={s.list}>
        {todos.map(({ id, text, completed }) => (
          <li key={id} className={completed ? s.done : s.item}>
            <form>
              <input type="checkbox" id={id} onChange={this.handleChange} />
            </form>
            <p>{text}</p>
            <button
              className={s.btn}
              onClick={() => onDeleteTodo(id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Todo;
