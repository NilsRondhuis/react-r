import React from 'react';
import PropTypes from 'prop-types';
import css from './Dog.module.css';

const Dog = ({ dog }) => {
  return (
    <div className={css.box}>
      <img src={dog.url} alt={dog.id} />
    </div>
  );
};

Dog.propTypes = {
  dog: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string,
  }).isRequired,
};

export default Dog;
