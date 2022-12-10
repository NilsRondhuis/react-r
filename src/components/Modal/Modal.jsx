import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import css from "./Modal.module.css";

const root = document.querySelector("#modal-root");

export class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleModalKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleModalKeydown);
  }

  handleModalKeydown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div className={css.backdrop} onClick={this.handleBackdropClick}>
        <div className={css.modal}>{children}</div>
      </div>,
      root
    );
  }
}

export default Modal;
