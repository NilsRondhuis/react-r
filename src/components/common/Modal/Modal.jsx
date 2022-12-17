import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { AiFillCloseCircle } from 'react-icons/ai';

class Modal extends Component {
  static propTypes = {
    title: PropTypes.string,
    onToggle: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onToggle();
    }
  };

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onToggle();
    }
  };

  render() {
    const { title, onToggle, children } = this.props;
    return (
      <div className={css.backdrop} onClick={this.handleBackDropClick}>
        <div className={css.modal}>
          {title && <h3 className={css.title}>{title}</h3>}
          <button className={css.btn} onClick={() => onToggle()}>
            <AiFillCloseCircle size={24} />
          </button>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
