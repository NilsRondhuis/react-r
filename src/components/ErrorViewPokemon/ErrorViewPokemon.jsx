import PropTypes from 'prop-types';
import defaultImg from '../../images/default.png';

const ErrorViewPokemon = ({ message }) => {
  return (
    <div role="alert">
      <div>
        <img src={defaultImg} alt="Error img" width="240" />
      </div>
      <p>{message}</p>
    </div>
  );
};

ErrorViewPokemon.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorViewPokemon;
