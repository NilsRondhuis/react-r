import PlayersList from '../PlayersList/PlayersList';
import FormEdit from '../FormEdit/FormEdit';
import { Component } from 'react';
import shortid from 'shortid';

class App extends Component {
  static defaultProps = {
    players: [],
  };
  state = {
    players: this.props.players,
  };

  handleAddPlayer = values => {
    this.setState(prevState => ({
      players: [...prevState.players, { ...values, id: shortid.generate() }],
    }));
  };

  handleDeletePlayer = deleteName => {
    this.setState(prevState => ({
      players: prevState.players.filter(({ name }) => name !== deleteName),
    }));
  };

  render() {
    const { players } = this.state;
    return (
      <>
        <FormEdit onAddPlayer={this.handleAddPlayer} />
        {players.length > 0 && (
          <PlayersList
            players={players}
            onDeletePlayer={this.handleDeletePlayer}
          />
        )}
      </>
    );
  }
}

export default App;
