import React, { Component } from "react";
import css from "./Dropdown.module.css";

export class Dropdown extends Component {
  state = {
    isShow: false,
  };

  handlerToggleShowMenu = () => {
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));
  };

  render() {
    const { isShow } = this.state;
    return (
      <div>
        <div className={css.box}>
          <button
            type="button"
            className={css.btn}
            onClick={this.handlerToggleShowMenu}
          >
            {isShow ? "Hide" : "Show"}
          </button>
        </div>
        {isShow && <div className={css.menu}>Dropdown Menu</div>}
      </div>
    );
  }
}

export default Dropdown;
