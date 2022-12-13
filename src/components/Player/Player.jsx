import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import css from './Player.module.css';

class Player extends Component {
  static propTypes = {
    link: PropTypes.string,
  };

  state = {
    showLoader: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.link !== this.props.link) {
      console.log('New LINK');
      this.setState({ showLoader: false });
    }
  }

  render() {
    const { link } = this.props;
    const { showLoader } = this.state;
    const loader = link && !showLoader;
    const sizeVideo = showLoader ? '100%' : '0';
    return (
      <>
        {loader && <h2>Loading...</h2>}
        {link && (
          <div className={css.box}>
            <ReactPlayer
              url={link}
              controls
              width={sizeVideo}
              height={sizeVideo}
              className={css.player}
              onReady={() => this.setState({ showLoader: true })}
            />
          </div>
        )}
      </>
    );
  }
}

export default Player;
