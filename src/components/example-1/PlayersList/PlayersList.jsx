import PropTypes from 'prop-types';
import Player from '../Player/Player';
import css from './PlayersList.module.css';

const PlayersList = ({ players = [] }) => {
  return (
    <ul className={css.list}>
      {players.map(({ img, name }) => (
        <li key={name} className={css.item}>
          <Player img={img} name={name} />
        </li>
      ))}
    </ul>
  );
};

PlayersList.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PlayersList;
