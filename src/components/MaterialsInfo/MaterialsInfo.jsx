import React from 'react';
import PropTypes from 'prop-types';
import MaterialCard from 'components/MaterialCard/MaterialCard';

const MaterialsInfo = ({ items, ...otherProps }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <MaterialCard item={item} {...otherProps} />
          <hr />
        </li>
      ))}
    </ul>
  );
};

MaterialsInfo.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      id: PropTypes.string,
    })
  ).isRequired,
};

export default MaterialsInfo;
