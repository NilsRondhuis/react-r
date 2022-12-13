import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ firstItem, lastItem, onClick }) => {
  return (
    <div>
      <button type="button" disabled={firstItem} onClick={() => onClick(-1)}>
        Prev
      </button>
      <button type="button" disabled={lastItem} onClick={() => onClick(1)}>
        Next
      </button>
    </div>
  );
};

Controls.propTypes = {
  firstItem: PropTypes.bool.isRequired,
  lastItem: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Controls;
