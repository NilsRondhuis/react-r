import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../../../images/default.png';
import css from './Player.module.css';

export class Player extends Component {
  static defaultProps = {
    img: defaultImg,
  };
  static propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    const { img, name, isSelected, onSelectPlayer } = this.props;

    return (
      <div onClick={onSelectPlayer}>
        <div className={css.box}>
          <img src={img} alt={name} />
        </div>
        {isSelected && <p className={css.name}>{name}</p>}
      </div>
    );
  }
}

export default Player;
