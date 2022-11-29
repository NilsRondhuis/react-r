import { Component } from "react";
import shortId from "shortid";
import ColorPicker from "../ColorPicker/ColorPicker";
import Section from "../common/Section/Section";
import Counter from "../Counter/Counter";
import Dropdown from "../Dropdown/Dropdown";
import Form from "../Form/Form";
import colors from "../../data/colors.json";
import TodoList from "../TodoList/TodoList";
import initialTodos from "../../data/todos.json";
import FilterTodo from "../FilterTodo/FilterTodo";
import TodoEditor from "../TodoEditor/TodoEditor";

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  filterTodo = (value) => {
    this.setState({
      filter: value,
    });
  };

  //операция добавления
  addTodo = (text) => {
    const todo = {
      id: shortId(),
      text: text,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  //операция удаления
  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  // обновление обьекта в колекции не изменяя ее длины
  toggleCompleted = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    const { todos, filter } = this.state;

    //фильтрация и результат запись в рендер, можно вынести как метод отдельный
    const normalizeFilter = filter.toLowerCase();
    const visibleTodo = todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizeFilter)
    );

    return (
      <>
        <Section title="Todos">
          <TodoEditor onAddTodo={this.addTodo} />
          <FilterTodo filter={filter} onFilterTodo={this.filterTodo} />
          <TodoList
            todos={visibleTodo}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
            onAddTodo={this.addTodo}
          />
        </Section>
        <Section title="Cunter">
          <Counter initialValue={10} />
        </Section>
        <Section title="Dropdown">
          <Dropdown />
        </Section>
        <Section title="Color Picker">
          <ColorPicker colors={colors} />
        </Section>
        <Section title="Form">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
      </>
    );
  }
}

export default App;
