import { Component } from "react";
import shortid from "shortid";
import s from "./EditTodo.module.css";

class EditTodo extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const id = shortid.generate();
    onSubmit([
      {
        id: id,
        text: this.state.text,
        completed: false,
      },
    ]);
    this.reset();
  };
  reset = () => {
    this.setState({ text: "" });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="edit"
          value={this.state.text}
          className={s.input}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EditTodo;
