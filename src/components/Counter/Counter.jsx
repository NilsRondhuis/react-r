import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./Counter.module.css";
import Controls from "./Controls/Controls";

export class Counter extends Component {
  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
    count: 5,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + this.state.count,
    }));
  };
  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - this.state.count,
    }));
  };

  render() {
    const { value, count } = this.state;
    return (
      <div className={css.counter}>
        <span className={css.counterValue}>{value}</span>

        <Controls
          count={count}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Counter;
