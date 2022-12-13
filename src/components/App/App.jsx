import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Section from 'components/common/Section/Section';
import FormPokemon from 'components/FormPokemon/FormPokemon';
import InfoPokemon from 'components/InfoPokemon/InfoPokemon';

class App extends Component {
  state = {
    pokemon: '',
  };

  handleFormSubmit = value => {
    this.setState({
      pokemon: value,
    });
  };

  render() {
    const { pokemon } = this.state;

    return (
      <>
        <Section title="Find pokemon">
          <FormPokemon onFormSubmit={this.handleFormSubmit} />
          <InfoPokemon pokemonName={pokemon} />
          <ToastContainer />
        </Section>
      </>
    );
  }
}

export default App;
