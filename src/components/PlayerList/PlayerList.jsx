import PropTypes from 'prop-types';
import css from './PlayerList.module.css';

const PlayerList = ({ videos, onSelectVideo }) => {
  return (
    <ul className={css.list}>
      {videos.map(({ id, link }) => (
        <li className={css.item} key={id} onClick={() => onSelectVideo(link)}>
          {link}
        </li>
      ))}
    </ul>
  );
};

PlayerList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectVideo: PropTypes.func.isRequired,
};

export default PlayerList;
