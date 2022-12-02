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

  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { img, name } = this.props;
    const { isOpen } = this.state;

    return (
      <div onClick={this.toggle}>
        <div className={css.box}>
          <img src={img} alt={name} />
        </div>
        {isOpen && <p className={css.name}>{name}</p>}
      </div>
    );
  }
}

export default Player;
