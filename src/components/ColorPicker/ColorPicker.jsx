import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ColorPicker.module.css';

const ColorPicker = ({ colors }) => {
  const [idx, setIdx] = useState(0);
  const currentColor = colors[idx].label;

  return (
    <div>
      <p>Current color: {currentColor}</p>
      <div className={css.box}>
        {colors.map(({ label, color }, index) => (
          <button
            key={label}
            className={index === idx ? css.colorActive : css.color}
            style={{
              backgroundColor: color,
            }}
            onClick={() => setIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ColorPicker;
