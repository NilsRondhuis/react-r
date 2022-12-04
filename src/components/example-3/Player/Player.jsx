import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../../../images/default.png';
import css from './Player.module.css';

const Player = ({
  img = defaultImg,
  name,
  isSelected,
  onSelectPlayer,
  onDeletePlayer,
}) => {
  return (
    <div onClick={onSelectPlayer} className={css.boxCard}>
      <div className={css.boxImg}>
        <img src={img === '' ? defaultImg : img} alt={name} />
      </div>
      {isSelected && <p className={css.name}>{name}</p>}
      <button className={css.btn} type="button" onClick={onDeletePlayer}>
        x
      </button>
    </div>
  );
};

Player.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelectPlayer: PropTypes.func,
  onDeletePlayer: PropTypes.func,
};

export default Player;
