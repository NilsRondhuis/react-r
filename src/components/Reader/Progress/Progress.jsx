import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ current, total }) => {
  return (
    <div>
      <p>
        {current}/{total}
      </p>
    </div>
  );
};

Progress.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
};

export default Progress;
