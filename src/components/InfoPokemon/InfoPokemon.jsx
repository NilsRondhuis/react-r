import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorViewPokemon from 'components/ErrorViewPokemon/ErrorViewPokemon';
import CardPokemon from 'components/CardPokemon/CardPokemon';
import PendingViewPokemon from 'components/PendingViewPokemon/PendingViewPokemon';
import pokemonAPI from '../services/pokemon-api';

class InfoPokemon extends Component {
  static propTypes = {
    pokemonName: PropTypes.string.isRequired,
  };

  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      setTimeout(() => {
        pokemonAPI
          .fetchPokemon(nextName)
          .then(pokemon => {
            console.log(pokemon);
            this.setState({ pokemon, status: 'resolved' });
          })
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 1000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

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

    // Instead
    // return (
    //   <div>
    //     {error && <h2>{error.message}</h2>}
    //     {loading && <p>Loading...</p>}
    //     {!pokemon && <p>Enter pokemon name</p>}
    //     {pokemon && (
    //       <div>
    //         <p>{pokemon.name}</p>
    //         <img
    //           src={pokemon.sprites.other['official-artwork'].front_default}
    //           alt={pokemon.name}
    //           width="240"
    //         />
    //       </div>
    //     )}
    //   </div>
    // );
  }
}

export default InfoPokemon;
