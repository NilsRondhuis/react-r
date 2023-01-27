import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ children, onToggle }) => {
  useEffect(() => {
    const handleModalKeydown = e => {
      if (e.code === 'Escape') {
        onToggle();
      }
    };

    window.addEventListener('keydown', handleModalKeydown);
    return () => {
      window.removeEventListener('keydown', handleModalKeydown);
    };
  }, [onToggle]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onToggle();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackDropClick}>
      <div className={css.modal}>
        {children}
        <button type="button" className={css.btn} onClick={onToggle}>
          close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func,
};

export default Modal;
