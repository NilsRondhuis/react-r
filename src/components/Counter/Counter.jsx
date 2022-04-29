import { Component } from "react";
import s from './Counter.module.css';
import Controls from "./Controls/Cntrols";

class Counter extends Component {

    static defaultProps = {
        initialValue: 0,
    };

    static propTypes = {
        //
    }

    state = {
        value: this.props.initialValue,
    };

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            }
        })
    }
    handleDecrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            }
        })
    }

    render() {
      return (
        <div className={s.container}>
          <span className={s.value}>{this.state.value}</span>

          <Controls 
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
          />
        </div>
      )
    }
}

export default Counter;