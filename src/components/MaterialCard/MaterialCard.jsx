import React from 'react';
import PropTypes from 'prop-types';
import css from './MaterialCard.module.css';

const MaterialCard = ({ item, onDelete, onOpen, onCreateId }) => {
  return (
    <>
      <p>
        <b>Title:</b> {item.title}
      </p>
      <p>
        <b>Link:</b> {item.link}
      </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          onOpen();
          onCreateId(item.id);
        }}
      >
        Update
      </button>
    </>
  );
};

MaterialCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default MaterialCard;
