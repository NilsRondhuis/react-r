import React from "react";
import PropTypes from "prop-types";
import css from "./Controls.module.css";

const Controls = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className={css.boxBtn}>
      <button type="button" className={css.btn} onClick={onIncrement}>
        +{count}
      </button>
      <button type="button" className={css.btn} onClick={onDecrement}>
        -{count}
      </button>
    </div>
  );
};

Controls.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Controls;
