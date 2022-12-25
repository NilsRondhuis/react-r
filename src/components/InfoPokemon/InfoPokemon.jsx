import { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import ErrorViewPokemon from 'components/ErrorViewPokemon/ErrorViewPokemon';
import CardPokemon from 'components/CardPokemon/CardPokemon';
import PendingViewPokemon from 'components/PendingViewPokemon/PendingViewPokemon';
import pokemonAPI from '../services/pokemon-api';

const setStatePokemonInfo = (pS, action) => {
  switch (action.type) {
    case 'setPokemon':
      return { ...pS, pokemon: action.payload };
    case 'pending':
      return { ...pS, status: action.type };
    case 'resolved':
      return { ...pS, status: action.type };
    case 'rejected':
      return { ...pS, status: action.type };
    case 'setError':
      return { ...pS, error: action.payload };
    default:
      return;
  }
};

const InfoPokemon = ({ pokemonName }) => {
  // const [pokemon, setPokemon] = useState(null);
  // const [error, setError] = useState(null);
  // const [status, setStatus] = useState('idle');

  const [state, dispatch] = useReducer(setStatePokemonInfo, {
    pokemon: null,
    error: null,
    status: 'idle',
  });

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    // setStatus('pending');
    dispatch({ type: 'pending' });

    setTimeout(() => {
      pokemonAPI
        .fetchPokemon(pokemonName)
        .then(pokemon => {
          // setPokemon(pokemon);
          dispatch({ type: 'setPokemon', payload: pokemon });
          // setStatus('resolved');
          dispatch({ type: 'resolved' });
        })
        .catch(error => {
          // setError(error);
          // setStatus('rejected');
          dispatch({ type: 'setError', payload: error });
          dispatch({ type: 'rejected' });
        });
    }, 2000);
  }, [pokemonName]);

  const { pokemon, status, error } = state;

  if (status === 'idle') {
    return <p>Enter pokemon name</p>;
  }
  if (status === 'pending') {
    return <PendingViewPokemon pokemonName={pokemonName} />;
  }
  if (status === 'rejected') {
    return <ErrorViewPokemon message={error.message} />;
  }
  if (status === 'resolved') {
    return <CardPokemon pokemon={pokemon} />;
  }
};

InfoPokemon.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};

export default InfoPokemon;
