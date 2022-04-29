import s from './Todo.module.css';

const Todo = ({ todos, onDeleteTodo}) => {
    return (
        <ul>
            {todos.map(({id, text,}) => (
                <li key={id}>
                    <p>{text}</p>
                    <button className={s.btn} onClick={() => onDeleteTodo(id)} type="button">Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default Todo;