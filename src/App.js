import { Component } from "react";
import Section from "./components/Section/Section";
// import Counter from "./components/Counter/Counter";
// import Dropdown from "./components/Dropdown/Dropdown";
// import ColorPicker from "./components/ColorPicker/ColorPicker";
// import colorPickerOptions from './data/colorPickerOptions.json';
import Todo from "./components/Todo/Todo";
import Statistic from "./components/Todo/Statistic/Statistic";
import todoList from "./data/todoList.json";

export default class App extends Component {
  state = {
    todos: todoList,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => {
      return { todos: prevState.todos.filter((todo) => todo.id !== todoId) };
    });
  };

  render() {
    const { todos } = this.state;
    const countDone = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <Section>
        <Statistic count={todos.length} done={countDone} />
        <Todo todos={todos} onDeleteTodo={this.deleteTodo} />
      </Section>
    );
  }
}

// export default function App() {
//   return (
//     <>
//       <Section title="Counter">

//       </Section>
//     </>
//   );
// }
