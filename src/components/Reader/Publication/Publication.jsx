import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ item }) => {
  return (
    <article>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
    </article>
  );
};

Publication.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
