import React, { Component } from 'react';
import {connect} from "react-redux";
// import TextInput from "../../Components/Inputs/TextInput";
// import DropdownInput from "../../Components/Inputs/DropdownInput";
import TextInputMasked from "../../Components/Inputs/TextInputMasked";
import millisecondsToDDHHMMSS from "../../Helpers/millisecondsToDDHHMMSS";
import millisecondsToHHMMSS from "../../Helpers/millisecondsToHHMMSS";
import Row from "../../Components/Layout/Row";
import {
  setGameData,
  saveSettings,
} from "../../ActionsAndReducers/dbWargames/wargames_ActionCreators";
import TextArea from "../../Components/Inputs/TextArea";

import 'flatpickr/dist/themes/material_blue.css';
import Flatpickr from "react-flatpickr";
import moment from "moment";
import Checkbox from "../../Components/Inputs/Checkbox";

class SettingsTab extends Component {

  updateDescription = (value) => {
    this.props.dispatch(setGameData({gameDescription: value, dirty: true}));
  };

  updateSpatialRepresentation = (value) => {
    this.props.dispatch(setGameData({spatialRepresentation: value, dirty: true}));
  };

  updateGameTurnTime = (value) => {

    if (value.length === 0) {
      this.props.dispatch(setGameData({gameTurnTime: null, dirty: true}));
      return;
    }
    if (value.indexOf("_") > -1) return;

    let days = parseInt(value.slice(0, 2));
    let hrs = parseInt(value.slice(3, 5));
    let mins = parseInt(value.slice(6, 8));
    let secs = parseInt(value.slice(9, 11));
    let milliseconds = (secs * 1000) + (mins * 60 * 1000) + (hrs * 60 * 60 * 1000) + (days * 24 * 60 * 60 * 1000);

    this.props.dispatch(setGameData({gameTurnTime: milliseconds, dirty: true}));
  };

  updateRealtimeTurnTime = (value) => {

    if (value.length === 0) {
      this.props.dispatch(setGameData({realtimeTurnTime: null, dirty: true}));
      return;
    }
    if (value.indexOf("_") > -1) return;

    let days = parseInt(value.slice(0, 2));
    let hrs = parseInt(value.slice(3, 5));
    let mins = parseInt(value.slice(6, 8));
    let secs = parseInt(value.slice(9, 11));
    let milliseconds = (secs * 1000) + (mins * 60 * 1000) + (hrs * 60 * 60 * 1000) + (days * 24 * 60 * 60 * 1000);

    this.props.dispatch(setGameData({realtimeTurnTime: milliseconds, dirty: true}));
  };

  updateTimeWarning = (value) => {

    if (value.length === 0) {
      this.props.dispatch(setGameData({timeWarning: null, dirty: true}));
      return;
    }
    if (value.indexOf("_") > -1) return;

    let hrs = parseInt(value.slice(0, 2));
    let mins = parseInt(value.slice(3, 5));
    let secs = parseInt(value.slice(6, 8));

    let milliseconds = (secs * 1000) + (mins * 60 * 1000) + (hrs * 60 * 60 * 1000);

    this.props.dispatch(setGameData({timeWarning: milliseconds, dirty: true}));
  };

  updateTurnStrategy = (value) => {
    this.props.dispatch(setGameData({turnStrategy: value, dirty: true}));
  };

  saveSettings = () => {
    let curTab = this.props.wargame.currentTab;
    let tabData = this.props.wargame.data[curTab];
    tabData.dirty = false;
    this.props.dispatch(saveSettings(this.props.wargame.currentWargame, tabData));
  };

  updateStartDate = (value) => {
    let date = moment(value[0], moment.ISO_8601).format();
    this.props.dispatch(setGameData({gameDate: date, dirty: true}));
  };

  updateShowAccessCodes = (showCodes) => {
    this.props.dispatch(setGameData({showAccessCodes: showCodes, dirty: true}));
  };

  render() {
    return (
      <div id="game-setup-tab-settings">
        <div className="flex-content-wrapper">
          <Row className="flex-content--rowend flex-content--fill">
            <span className="link link--noIcon" onClick={this.saveSettings} data-qa-type="submit">Save Overview</span>
          </Row>
        </div>
        <div className="flex-content-wrapper settingsTab">
          <div className="flex-content flex-content--left50">
            <label htmlFor="" className="material-label">Game description &amp; objectives</label>
            <TextArea
              className="material-input"
              name="wargame-overview-desc"
              updateStore={this.updateDescription}
              data={this.props.wargame.data[this.props.wargame.currentTab].gameDescription}
            />
          </div>

          <div className="flex-content flex-content--right50">

            <Row>
              <div className="flex-content flex-content--sml">
                <TextInputMasked
                  mask="11 11 11 11"
                  name="wargame turn time"
                  placeholder="DD HH MM SS"
                  className="material-input"
                  label="Wargame turn time (DD HH MM SS)"
                  updateStore={this.updateGameTurnTime}
                  data={millisecondsToDDHHMMSS(this.props.wargame.data[this.props.wargame.currentTab].gameTurnTime)}
                />
              </div>
            </Row>

            <Row>
              <div className="flex-content flex-content--sml">
                <TextInputMasked
                  mask="11 11 11 11"
                  name="real time planning allowance"
                  placeholder="DD HH MM SS"
                  className="material-input"
                  label="Real time planning allowance (DD HH MM SS)"
                  updateStore={this.updateRealtimeTurnTime}
                  data={millisecondsToDDHHMMSS(this.props.wargame.data[this.props.wargame.currentTab].realtimeTurnTime)}
                />
              </div>
            </Row>

            <Row>
              <div className="flex-content flex-content--sml">
                <TextInputMasked
                  mask="11 11 11"
                  name="time warning"
                  placeholder="HH MM SS"
                  className="material-input"
                  label="Time warning at (HH MM SS) remaining"
                  updateStore={this.updateTimeWarning}
                  data={millisecondsToHHMMSS(this.props.wargame.data[this.props.wargame.currentTab].timeWarning)}
                />
              </div>
            </Row>

            <Row>
              <label htmlFor="" className="material-label">Start time</label>
              <div className="flex-content flex-content--fill">
                <Flatpickr
                  name="start time"
                  value={this.props.wargame.data[this.props.wargame.currentTab].gameDate}
                  onChange={this.updateStartDate}
                  options={{
                    enableTime: true,
                  }}
                  />
              </div>
            </Row>

            <Row>
              <div className="flex-content flex-content--fill">
                <Checkbox
                  id="show-access-codes"
                  label="Show Access codes"
                  isChecked={this.props.wargame.data[this.props.wargame.currentTab].showAccessCodes}
                  updateStore={this.updateShowAccessCodes}
                />
              </div>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ wargame }) => ({
  wargame
});

export default connect(mapStateToProps)(SettingsTab);
