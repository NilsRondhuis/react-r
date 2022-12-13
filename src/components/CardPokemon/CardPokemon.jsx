import React from 'react';
import PropTypes from 'prop-types';

const CardPokemon = ({ pokemon: { sprites, name, stats } }) => {
  return (
    <div>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        width="240"
      />
      <p>{name}</p>
      <ul>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            <span>{entry.stat.name}: </span>
            <span>{entry.base_stat}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

CardPokemon.propTypes = {
  pokemon: PropTypes.shape({
    sprites: PropTypes.object,
    name: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default CardPokemon;
