import PropTypes from 'prop-types';
import { Component } from 'react';
import Player from '../Player/Player';
import css from './PlayersList.module.css';

class PlayersList extends Component {
  static defaultProps = {
    players: [],
  };
  static propTypes = {
    players: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  state = {
    isSelected: 0,
  };

  handleSelectPlayer = idx => {
    this.setState({
      isSelected: idx,
    });
  };

  render() {
    const { players } = this.props;
    const { isSelected } = this.state;
    return (
      <ul className={css.list}>
        {players.map(({ img, name }, idx) => (
          <li key={idx} className={css.item}>
            <Player
              img={img}
              name={name}
              isSelected={isSelected === idx}
              onSelectPlayer={() => this.handleSelectPlayer(idx)}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default PlayersList;
