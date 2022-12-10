import { Component } from "react";
import shortId from "shortid";
import ColorPicker from "../ColorPicker/ColorPicker";
import Section from "../common/Section/Section";
import Counter from "../Counter/Counter";
import Dropdown from "../Dropdown/Dropdown";
import Form from "../Form/Form";
import colors from "../../data/colors.json";
import TodoList from "../TodoList/TodoList";
// import initialTodos from "../../data/todos.json";
import FilterTodo from "../FilterTodo/FilterTodo";
import TodoEditor from "../TodoEditor/TodoEditor";
import Modal from "../Modal/Modal";
import Clock from "../Clock/Clock";
import tabs from "../../data/tabs.json";
import Tabs from "../Tabs/Tabs";
import { ReactComponent as AddIcon } from "../../images/icons/plus.svg";
import IconBtn from "../common/IconBtn/IconBtn";

class App extends Component {
  state = {
    todos: [],
    filter: "",
    showModal: false,
    showClock: true,
    showModalEditor: false,
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos) {
      this.setState({
        todos: todos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

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
    this.toggleModalEditor();
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

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  toggleClock = () => {
    this.setState((prevState) => ({
      showClock: !prevState.showClock,
    }));
  };

  toggleModalEditor = () => {
    this.setState((prevState) => ({
      showModalEditor: !prevState.showModalEditor,
    }));
  };

  render() {
    const { todos, filter, showModal, showClock, showModalEditor } = this.state;

    //фильтрация и результат запись в рендер, можно вынести как метод отдельный
    const normalizeFilter = filter.toLowerCase();
    const visibleTodo = todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizeFilter)
    );

    return (
      <>
        <Section title="Todos">
          <IconBtn onClick={this.toggleModalEditor} aria-label="Add todo">
            <AddIcon width={24} height={24} />
          </IconBtn>
          {showModalEditor && (
            <Modal>
              <TodoEditor onAddTodo={this.addTodo} />
            </Modal>
          )}
          <FilterTodo filter={filter} onFilterTodo={this.filterTodo} />
          <TodoList
            todos={visibleTodo}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
            onAddTodo={this.addTodo}
          />
        </Section>
        <Section title="Tabs">
          <Tabs tabs={tabs} />
        </Section>
        <Section title="Clock">
          <button type="button" onClick={this.toggleClock}>
            Open/Close clock
          </button>
          {showClock && <Clock />}
        </Section>
        <Section title="Modal">
          <IconBtn onClick={this.toggleModal} aria-label="Open modal">
            <AddIcon width={24} height={24} />
          </IconBtn>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <p>Modal</p>
              <button type="button" onClick={this.toggleModal}>
                Close modal
              </button>
            </Modal>
          )}
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
