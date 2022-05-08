import { Component } from "react";
import Section from "./components/Section/Section";
import Todo from "./components/Todo/Todo";
import Statistic from "./components/Todo/Statistic/Statistic";
import EditTodo from "./components/Todo/EditTodo/EditTodo";
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
  completeTodo = (newTodo) => {
    this.setState({ todos: newTodo });
  };
  addTodo = (value) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.concat(value),
      };
    });
  };

  render() {
    const { todos } = this.state;
    const countDone = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        <Section>
          <EditTodo todos={todos} onSubmit={this.addTodo} />
          <Todo
            todos={todos}
            onDeleteTodo={this.deleteTodo}
            onCompleteTodo={this.completeTodo}
          />
          <Statistic done={countDone} count={this.state.todos.length} />
        </Section>
      </>
    );
  }
}
