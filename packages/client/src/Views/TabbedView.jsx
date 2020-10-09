import React, { Component } from 'react';
import { connect } from "react-redux";
import {faAsterisk} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import SettingsTab from "./TabViews/SettingsTab";
import ForcesTab from "./TabViews/ForcesTab";
import ChannelsTab from "./TabViews/ChannelsTab";
import {addNotification} from "../ActionsAndReducers/Notification/Notification_ActionCreators";

class TabbedView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      activeTab: Object.keys(this.props.tabs)[0],
      tabs: Object.keys(this.props.tabs),
      invalidFields: [],
    };
  }

  componentDidMount() {
    this.props.setCurrentTab(Object.keys(this.props.tabs)[0]);
  }

  checkAllSaved() {
    return Object.values(this.props.wargame.data).every((item) => !item.dirty);
  }

  changeTab = (value) => {
    if (this.checkAllSaved()) {
      this.setState({ activeTab: value });
      this.props.setCurrentTab(value);
    } else {
      this.props.dispatch(addNotification("Unsaved changes", "warning"));
    }
  };

  render() {

    return (
      <>
        <ul className="tab-nav">
          { this.state.tabs.map((tabName, i) => (
            <li key={tabName}
              onClick={this.changeTab.bind(this, this.state.tabs[i])}
              className={classNames({
                [`tab-${tabName}`]: true,
                "active-tab": tabName === this.state.activeTab,
                "tab-nav-item": true
                })}
            >
              {tabName}
              { this.props.wargame.data[tabName] && this.props.wargame.data[tabName].dirty ?
                <FontAwesomeIcon icon={faAsterisk} size="1x" className="dirty-flag" />
              : false }
            </li>
            ))
          }
        </ul>
        <div className="flex-content-margin">
          {this.state.activeTab === this.state.tabs[0] && <SettingsTab />}
          {this.state.activeTab === this.state.tabs[1] && <ForcesTab />}
          {this.state.activeTab === this.state.tabs[2] && <ChannelsTab />}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ wargame }) => ({
  wargame
});

export default connect(mapStateToProps)(TabbedView);
