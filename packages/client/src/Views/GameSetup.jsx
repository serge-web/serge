import React, { Component } from 'react';
import {connect} from "react-redux";

import {
  setCurrentTab,
  saveWargameTitle,
} from "../ActionsAndReducers/dbWargames/wargames_ActionCreators";

import TabbedView from "./TabbedView";
import ProgressBar from "../Components/ProgressBar/ProgressBar";

import Link from "../Components/Link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSave, faHourglassStart } from "@fortawesome/free-solid-svg-icons";

 import _ from "lodash";
import checkUnique from "../Helpers/checkUnique";

import classNames from "classnames";
import TextInput from "../Components/Inputs/TextInput";
import {addNotification} from "../ActionsAndReducers/Notification/Notification_ActionCreators";
import {ADMIN_ROUTE} from "../consts";

class GameSetup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newWargameName: null,
    };
  }

  setCurrentTab = (tab) => {
    this.props.dispatch(setCurrentTab(tab));
  };

  createIndicators() {
    const that = this;

    return Object.entries(this.props.wargame.data).map(function (entry) {
      let active = that.props.wargame.currentTab === entry[0];
      let completed = entry[1].complete;
      return (<div key={entry[0]} className={classNames("progress-indicator", {"progress-indicator--active": active, "progress-indicator--complete": completed})}></div>);
    });
  }

  updateWargameTitle = (name) => {
    this.setState({
      newWargameName: name,
    });
  };


  saveWargame = () => {

    let wargameNames = this.props.wargame.wargameList.map((game) => game.title);
        wargameNames = _.pull(wargameNames, this.props.wargame.wargameTitle);

    if (!checkUnique(this.state.newWargameName, wargameNames)) {
      this.props.dispatch(addNotification("Wargame name is not unique.", "warning"));
      return;
    }

    if (!this.checkWargameNameSaveable()) return;

    if (typeof this.state.newWargameName === 'string' && this.state.newWargameName.length > 0) {
      this.props.dispatch(saveWargameTitle(this.props.wargame.currentWargame, this.state.newWargameName));
    }

    if (this.state.newWargameName === null || this.state.newWargameName.length === 0) {
      alert('no channel name');
    }
  };

  checkWargameNameSaveable = () => {

    if (this.state.newWargameName === this.props.wargame.wargameTitle) return false;
    if (this.state.newWargameName === null || this.state.newWargameName.length === 0) return false;
    return true;
  };

  checkAllSaved() {
    return Object.values(this.props.wargame.data).every((item) => !item.dirty);
  }

  notSavedNotification = () => {
    if (!this.checkAllSaved()) {
      this.props.dispatch(addNotification("Unsaved changes", "warning"));
    }
  };

  render() {

    let wargameTitle = typeof this.state.newWargameName === 'string' ? this.state.newWargameName : this.props.wargame.wargameTitle;

    return (
      <>
        <div className="view-wrapper view-wrapper-gamesetup first-step">
          <div id="sidebar">
            <Link
              disable={!this.checkAllSaved()}
              class={classNames({"link--disabled": !this.checkAllSaved()})}
              onClickHandler={this.notSavedNotification} href={ADMIN_ROUTE} id="home-btn"><FontAwesomeIcon icon={faArrowLeft} size="2x" /></Link>
          </div>
          <div className="flex-content-wrapper flex-content-wrapper--distribute" id="game-setup-head">
            <div className="flex-content flex-content--row">
              <TextInput
                id="title-editable"
                updateStore={this.updateWargameTitle}
                options={{numInput: false}}
                data={wargameTitle}
              />
              {this.checkWargameNameSaveable() ?
                <FontAwesomeIcon className="savewargame-icon" icon={faSave} onClick={this.saveWargame } size="2x" />
                : false
              }
            </div>
            <ProgressBar>
              {this.createIndicators()}
            </ProgressBar>
            {this.props.wargame.wargameInitiated &&
              <div className="wargame-in-progress-warning">
                <FontAwesomeIcon icon={faHourglassStart} size="1x" />
                <h6>Wargame in progress</h6>
              </div>
            }
          </div>
          <TabbedView
            tabs={this.props.wargame.data}
            setCurrentTab={this.setCurrentTab}
          />
        </div>
      </>
    );
  }
}



// temp use allMessages
const mapStateToProps = ({ wargame }) => ({
  wargame
});

export default connect(mapStateToProps)(GameSetup);
