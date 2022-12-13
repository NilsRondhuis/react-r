import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Progress from './Progress/Progress';
import Publication from './Publication/Publication';

export class Reader extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  state = {
    idx: 0,
  };

  componentDidMount() {
    const currentIdx = JSON.parse(localStorage.getItem('idx'));

    if (currentIdx) {
      this.setState({
        idx: currentIdx,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.idx !== this.state.idx) {
      localStorage.setItem('idx', JSON.stringify(this.state.idx));
    }
  }

  changeArticle = value => {
    this.setState(prevState => ({
      idx: prevState.idx + value,
    }));
  };

  render() {
    const { idx } = this.state;
    const { articles } = this.props;
    const currentArticle = articles[idx];
    const totalItem = articles.length;
    return (
      <div>
        <Controls
          firstItem={idx === 0}
          lastItem={idx + 1 === articles.length}
          onClick={this.changeArticle}
        />

        <Progress current={idx + 1} total={totalItem} />

        <Publication item={currentArticle} />
      </div>
    );
  }
}

export default Reader;
