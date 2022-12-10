import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export class Tabs extends PureComponent {
  static propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        text: PropTypes.string,
      })
    ).isRequired,
  };

  state = {
    activeIdxTab: 0,
  };

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return nextState.activeIdxTab !== this.state.activeIdxTab;
  //   }

  showActiveTab = (idx) => {
    this.setState({
      activeIdxTab: idx,
    });
  };

  render() {
    const { tabs } = this.props;
    const { activeIdxTab } = this.state;
    const activeTabs = tabs[activeIdxTab];
    return (
      <div>
        <div>
          {tabs.map(({ label }, idx) => (
            <button
              key={label}
              type="button"
              onClick={() => this.showActiveTab(idx)}
            >
              {label}
            </button>
          ))}
        </div>
        <div>
          <h2>{activeTabs.label}</h2>
          <p>{activeTabs.text}</p>
        </div>
      </div>
    );
  }
}

export default Tabs;
