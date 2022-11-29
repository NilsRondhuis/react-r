import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./ColorPicker.module.css";

export class ColorPicker extends Component {
  static defaultProps = {
    colors: [],
  };
  static propTypes = {
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  state = {
    activeColorIdx: 0,
  };

  handleClickActiveColor = (index) => {
    this.setState({
      activeColorIdx: index,
    });
  };

  render() {
    const { colors } = this.props;
    const { activeColorIdx } = this.state;
    const { label } = colors[activeColorIdx];
    return (
      <div>
        <p>Current color: {label}</p>
        <div className={css.box}>
          {colors.map(({ label, color }, index) => (
            <button
              key={label}
              className={activeColorIdx === index ? css.colorActive : css.color}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.handleClickActiveColor(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
