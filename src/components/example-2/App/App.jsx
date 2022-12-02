import PlayersList from '../PlayersList/PlayersList';
import players from '../../../data/players.json';

const App = () => {
  return (
    <>
      <PlayersList players={players} />
    </>
  );
};

export default App;
