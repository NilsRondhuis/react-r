import { Component } from 'react';
import Section from 'components/common/Section/Section';
import PlayerList from 'components/PlayerList/PlayerList';
import videos from '../../data/videos.json';
import Player from 'components/Player/Player';
import Reader from 'components/Reader/Reader';
import publications from '../../data/publications.json';

class App extends Component {
  state = {
    selectedLink: null,
  };

  selectVideo = link => {
    this.setState({
      selectedLink: link,
    });
  };

  render() {
    const { selectedLink } = this.state;

    return (
      <>
        <Section title="Select video">
          <PlayerList videos={videos} onSelectVideo={this.selectVideo} />
          <Player link={selectedLink} />
        </Section>
        <Section title="Reader">
          <Reader articles={publications} />
        </Section>
      </>
    );
  }
}

export default App;
