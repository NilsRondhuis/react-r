import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Section from 'components/common/Section/Section';
import FormPokemon from 'components/FormPokemon/FormPokemon';
import InfoPokemon from 'components/InfoPokemon/InfoPokemon';
import Counter from 'components/Counter/Counter';
import friends from '../../data/friends.json';
import Friends from 'components/Friends/Friends';

const App = () => {
  const [pokemon, setPokemon] = useState('');

  return (
    <>
      <Section title="Example with useMemo">
        <Friends friends={friends} />
      </Section>
      <Section title="Counter with useReducer">
        <Counter />
      </Section>
      <Section title="Find pokemon and example with useReducer">
        <FormPokemon onFormSubmit={setPokemon} />
        <InfoPokemon pokemonName={pokemon} />
        <ToastContainer />
      </Section>
    </>
  );
};

export default App;
