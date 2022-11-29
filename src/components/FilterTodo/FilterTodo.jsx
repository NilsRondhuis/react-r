import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./FilterTodo.module.css";

export class FilterTodo extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterTodo: PropTypes.func.isRequired,
  };

  render() {
    const { filter, onFilterTodo } = this.props;
    return (
      <div className={css.box}>
        <input
          type="text"
          value={filter}
          className={css.input}
          placeholder="Find todo..."
          onChange={(e) => onFilterTodo(e.target.value)}
        />
      </div>
    );
  }
}

export default FilterTodo;
