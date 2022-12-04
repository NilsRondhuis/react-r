import PropTypes from 'prop-types';
import { Component } from 'react';
import Player from '../Player/Player';
import css from './PlayersList.module.css';

class PlayersList extends Component {
  static propTypes = {
    players: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeletePlayer: PropTypes.func,
  };

  state = {
    isSelected: '',
  };

  handleSelectPlayer = id => {
    this.setState({
      isSelected: id,
    });
  };

  render() {
    const { players, onDeletePlayer } = this.props;
    const { isSelected } = this.state;
    return (
      <ul className={css.list}>
        {players.map(({ id, img, name }) => (
          <li key={id} className={css.item}>
            <Player
              img={img}
              name={name}
              isSelected={isSelected === id}
              onSelectPlayer={() => this.handleSelectPlayer(id)}
              onDeletePlayer={() => onDeletePlayer(name)}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default PlayersList;
