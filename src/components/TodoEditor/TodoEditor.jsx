import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./TodoEditor.module.css";

export class TodoEditor extends Component {
  static propTypes = {
    onAddTodo: PropTypes.func.isRequired,
  };

  state = {
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTodo(this.state.message);

    this.setState({
      message: "",
    });
  };

  render() {
    const { message } = this.state;

    return (
      <div className={css.box}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <textarea
            name="message"
            value={message}
            cols="30"
            rows="10"
            className={css.text}
            onChange={this.handleChange}
          ></textarea>
          <button type="submit" className={css.btn}>
            Add todo
          </button>
        </form>
      </div>
    );
  }
}

export default TodoEditor;
