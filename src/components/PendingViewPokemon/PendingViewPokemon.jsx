import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import css from './PendingViewPokemon.module.css';
import pendingImg from '../../images/pending.jpg';
import CardPokemon from 'components/CardPokemon/CardPokemon';

const PendingViewPokemon = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImg,
        },
      },
    },
    stats: [],
  };

  return (
    <div>
      <p>
        <AiOutlineLoading3Quarters width={24} className={css.icon} /> Loading...
      </p>
      <CardPokemon pokemon={pokemon} />
    </div>
  );
};

PendingViewPokemon.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};

export default PendingViewPokemon;
