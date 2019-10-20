import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Tour from "reactour";
import Select from "react-select";
import lineBreak from "../Helpers/splitNewLineBreak";
import {
  getWargame,
  setForce,
  setRole,
  showHideObjectives,
  startListening,
  setAllTemplates,
  failedLoginFeedbackMessage,
  openTour,
  initiateGame,
} from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { addNotification } from "../ActionsAndReducers/Notification/Notification_ActionCreators";
import { getSergeGameInformation } from "../ActionsAndReducers/sergeInfo/sergeInfo_ActionCreators";
import { umpireForceTemplate, expiredStorage, LOCAL_STORAGE_TIMEOUT } from "../consts";
import { populateWargameStore } from "../ActionsAndReducers/dbWargames/wargames_ActionCreators";
import { populateMessageTypesDb } from "../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators";
import TextInput from "../Components/Inputs/TextInput";
import GameChannels from "./GameChannels";
import { PlayerStateContext } from "../Store/PlayerUi";

import "@serge/themes/App.scss";

class PlayerUi extends Component {
  static contextType = PlayerStateContext;

  constructor(props) {
    super(props);
    this.state = {
      landingScreen: true,
      selectedWargame: '',
      wargameAccessCode: '',
      rolePassword: '',
      tourIsOpen: false,
    };

    this.props.dispatch(populateMessageTypesDb());
    this.props.dispatch(populateWargameStore());
    this.props.dispatch(getSergeGameInformation());
  };

  componentDidMount() {
    window.channelTabsContainer = window.channelTabsContainer || {};
  }

  componentDidUpdate() {
    const [ state ] = this.context;
    if(state.selectedForce && state.selectedRole) {
      const storageTourIsOpen = expiredStorage.getItem(`${state.wargameTitle}-${state.selectedForce}-${state.selectedRole}-tourDone`) !== "done";
      if (storageTourIsOpen !== this.state.tourIsOpen) {
        this.setState({
          tourIsOpen: storageTourIsOpen,
        })
      }
    }
  }

  updateSelectedWargame = (selectedWargame) => {
    const [ , dispatch ] = this.context;
    this.setState({selectedWargame});
    getWargame(selectedWargame.value)(dispatch);
  };

  goBack = () => {
    const [ , dispatch ] = this.context;
    dispatch(setForce(""));
  };

  setRolePassword = (value) => {
    this.setState({
      rolePassword: value,
    });
  };

  setRolePasswordDemo = (pass) => {
    this.setState({
      rolePassword: pass,
    });
  };

  checkPassword = () => {
    const [ state, dispatch ] = this.context;
    let pass = this.state.rolePassword;
    let matchRole = (force) => force.roles.find((role) => role.password === pass);
    let force = state.allForces[_.findIndex(state.allForces, matchRole)];

    if (force === undefined) {
      this.props.dispatch(addNotification("Access code incorrect", "warning"));
      failedLoginFeedbackMessage(state.currentWargame, pass);
      return;
    }

    let role = force.roles[_.findIndex(force.roles, (role) => role.password === pass)];

    dispatch(setForce(force.uniqid));
    dispatch(setRole(role));
    dispatch(setAllTemplates(this.props.messageTypes.messages));
    startListening(state.currentWargame)(dispatch);
  };

  roleOptions() {
    const [ state ] = this.context;
    return state.allForces.map((force) => ({name: force.name, roles: force.roles}));
  }

  showHideForceObjectives = () => {
    const [ , dispatch ] = this.context;
    dispatch(showHideObjectives());
  };

  enterSerge = () => {
    this.setState({
      landingScreen: false,
    })
  };

  closeTour = () => {
    const [ state, dispatch ] = this.context;
    expiredStorage.setItem(`${state.wargameTitle}-${state.selectedForce}-${state.selectedRole}-tourDone`, "done", LOCAL_STORAGE_TIMEOUT);
    dispatch(openTour(false));
  };

  initiateGameplay = () => {
    const [ state, dispatch ] = this.context;
    initiateGame(state.currentWargame)(dispatch);
  };

  render() {
    const [ state ] = this.context;

    if (this.state.landingScreen) {
      return (
        <div className="flex-content-wrapper flex-content-wrapper--welcome">
          <div className="flex-content flex-content--welcome">
            <div className="flex-content--center contain-welcome-screen">
              <div className="welcome-logo">
                <img className="serge-logo" src={this.props.gameInfo.imageUrl} alt="Serge gaming" />
              </div>
              <div className="welcome-desc">
                <h1>{this.props.gameInfo.title}</h1>
                {lineBreak(this.props.gameInfo.description)}
                <button name="play" className="btn btn-action btn-action--primary" onClick={this.enterSerge}>Play</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const steps = [
      {
        selector: '[data-tour="first-step"]',
        content: "Take a short guided tour to familiarise yourself with the main features of the War Game interface."
      },
      {
        selector: '[data-tour="second-step"]',
        content: "Check your force objectives by clicking on the target icon."
      },
      {
        selector: '[data-tour="third-step"]',
        content: "Give feedback at any time by clicking on the speech bubble."
      },
      {
        selector: '[data-tour="fourth-step"]',
        content: "In-game channels are on the left. Access is limited to specific forces and roles."
      },
      {
        selector: '[data-tour="fifth-step"]',
        content: "Game admin is on the right. All players can read and write in the channel."
      },
      {
        selector: '[data-tour="sixth-step"]',
        content: "This panel will indicate whether you are in a planning or adjudication phase, and how much time is left when in a planning phase."
      },
      {
        selector: '[data-tour="seventh-step"]',
        content: "Send out-of-game messages and questions here. They are visible by all players and umpires."
      },
      {
        selector: '[data-tour="fourth-step"]',
        content: () => (
          <div>
            Drag and drop a tab to create a new column and re-organize your channels. And use the vertical bars to resize the area occupied by channels.
            <span className="link link--noIcon" onClick={this.closeTour} data-qa-type="close-tour">Close the tour</span>
          </div>
        ),
      },
    ];

    if (state.selectedForce === umpireForceTemplate.uniqid && state.controlUi && !state.wargameInitiated) {
      return (
        <div className="flex-content-wrapper">
          <div className="pre-start-screen">
            <button name="initiate-game" className="btn btn-action btn-action--primary" onClick={this.initiateGameplay}>Initiate Game</button>
          </div>
        </div>
      )
    }

    if (state.selectedForce && state.selectedRole && !state.wargameInitiated) {
      return (
        <div className="flex-content-wrapper">
          <div className="pre-start-screen">
            <div id="loading">
              <div>
                <div id="loader"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (state.selectedForce && state.selectedRole) {
      return (
        <>
          <div className="flex-content-wrapper" data-tour="first-step">
            <div className="flex-content flex-content--fill">
              <GameChannels />
            </div>
          </div>
          {/* GUIDED TOUR */}
          <Tour
            steps={steps}
            isOpen={this.state.tourIsOpen}
            onRequestClose={this.closeTour}
            startAt={0}
          />
        </>
      )
    }

    return (
      <div className="flex-content-wrapper flex-content-wrapper--welcome">
        <div className="flex-content flex-content--welcome">
          {!state.selectedForce && !state.selectedRole &&
            <div className={`flex-content--center ${this.state.selectedWargame && state.showAccessCodes ? 'has-demo-passwords': ''}`}>
              <h1>Set wargame</h1>
              <div id="custom-select-wargame-selection">
                <Select
                  name="wargame-selection"
                  value={this.state.selectedWargame}
                  className="react-select"
                  classNamePrefix="react-select"
                  options={this.props.wargame.wargameList.map((wargame) => ({label: wargame.title, value: wargame.name}))}
                  onChange={this.updateSelectedWargame}
                />
              </div>
              <div className="flex-content">
                <TextInput
                  label="Access code"
                  className="material-input"
                  updateStore={this.setRolePassword}
                  options={{numInput: false}}
                  data={this.state.rolePassword || ''}
                />
              </div>
              {this.state.selectedWargame && state.showAccessCodes &&
                <div className="demo-passwords">
                  <h3>Not visible in production</h3>
                  <ul>
                    {this.roleOptions().map((force) => {
                      return (
                        <li key={force.name} className="list-item-demo-passwords">
                          <h4>{force.name}</h4>
                          <ul data-qa-force-name={force.name}>
                            {
                              force.roles.map((role) => (
                                <li key={role.name}>
                                  <button onClick={this.setRolePasswordDemo.bind(this, role.password)} className="btn btn-sm btn-primary">
                                    {role.name}
                                  </button>
                                </li>
                              ))
                            }
                          </ul>
                        </li>
                      )
                    })
                    }
                  </ul>
                </div>
              }
              <button name="enter-game" disabled={!this.state.rolePassword} className="btn btn-action btn-action--primary" onClick={this.checkPassword}>Enter</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ wargame, messageTypes, gameInfo }) => ({
  wargame,
  messageTypes,
  gameInfo,
});

export default connect(mapStateToProps)(PlayerUi);
