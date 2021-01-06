import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  getWargame,
  setForce,
  setRole,
  startListening,
  setAllTemplates,
  failedLoginFeedbackMessage,
  initiateGame,
} from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { addNotification } from "../ActionsAndReducers/Notification/Notification_ActionCreators";
import { getSergeGameInformation } from "../ActionsAndReducers/sergeInfo/sergeInfo_ActionCreators";
import { umpireForceTemplate, expiredStorage } from "../consts";
import { populateWargameStore } from "../ActionsAndReducers/dbWargames/wargames_ActionCreators";
import { populateMessageTypesDb } from "../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators";
import LoaderScreen from "../Components/LoaderScreen";
import PlayerUiLandingScreen from "./PlayerUiLandingScreen";
import PlayerUiInitiate from "./PlayerUiInitiate";
import PlayerUiLobby from "./PlayerUiLobby";
import GameChannelsWithTour from "./GameChannelsWithTour";
import { PlayerStateContext } from "../Store/PlayerUi";
import "@serge/themes/App.scss";

class PlayerUi extends Component {
  static contextType = PlayerStateContext;

  constructor(props) {
    super(props);
    this.state = {
      screen: 'landing',
      selectedWargame: '',
      wargameAccessCode: '',
      rolePassword: '',
      tourIsOpen: false,
      loggedIn: false
    };

    this.props.dispatch(populateMessageTypesDb());
    this.props.dispatch(populateWargameStore());
    this.props.dispatch(getSergeGameInformation());
  };

  componentDidMount() {
    const [ state ] = this.context;
    window.channelTabsContainer = window.channelTabsContainer || {};

    if(state.selectedForce && state.selectedRole) {
      const storageTourIsOpen = expiredStorage.getItem(`${state.wargameTitle}-${state.selectedForce}-${state.selectedRole}-tourDone`) !== "done";
      if (storageTourIsOpen !== this.state.tourIsOpen) {
        this.setState({
          tourIsOpen: storageTourIsOpen,
        })
      }
    }
  }

  componentDidUpdate() {
    const { wargame } = this.props;
    const { wargameList } = wargame;
    const { loggedIn } = this.state;

    if (wargameList && wargameList.length && !loggedIn) {
      this.byPassLogin()
    }
  }

  goBack = () => {
    const [ , dispatch ] = this.context;
    dispatch(setForce(""));
  };

  setRolePassword = (value) => {
    this.setState({
      rolePassword: value,
    });
  };

  setRolePasswordDemo = (e, pass) => {
    e.preventDefault();
    this.setState({
      rolePassword: pass,
    });
  };

  setStorageKey = () => {
    const [ state ] = this.context;
    return {
      tourDone: `${state.wargameTitle}-${state.selectedForce}-${state.selectedRole}-tourDone`,
    }
  };

  byPassLogin = async () => {
    const [ , dispatch ] = this.context
    const { wargame } = this.props
    const { searchParams } = new URL(window.location.href)
    const _wargame = searchParams.get('wargame')
    const _access = searchParams.get('access')
    if (_wargame && _access) {
      const selectedWargame = wargame.wargameList.filter(game => game.name.match(_wargame))
      if (selectedWargame.length) {
        this.setState({ loggedIn: true })
        await getWargame(selectedWargame[0].name)(dispatch)
        this.checkPassword(_access)
      }
    }
  };

  checkPassword = (pass) => {
    const [ state, dispatch ] = this.context;
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
    this.setState({
      screen: 'player'
    })
  };

  roleOptions() {
    const [ state ] = this.context;
    return state.allForces.map((force) => ({name: force.name, roles: force.roles}));
  }

  enterSerge = () => {
    this.setState({
      screen: 'lobby',
    })
  };

  initiateGameplay = () => {
    const [ state, dispatch ] = this.context;
    initiateGame(state.currentWargame)(dispatch);
  };

  isUmpire() {
    const [ state ] = this.context;
    return state.selectedForce === umpireForceTemplate.uniqid && state.isGameControl;
  }

  render() {
    const [ state ] = this.context;
    const { tourIsOpen, screen } = this.state;
    const { gameInfo, wargame } = this.props;
    const tourStorageKey = this.setStorageKey().tourDone;
    let render = null;

    if(screen === 'landing') {
      render = <PlayerUiLandingScreen gameInfo={gameInfo} enterSerge={this.enterSerge} />;
    } else if(screen === 'lobby') {
      render = <PlayerUiLobby wargameList={wargame.wargameList} roleOptions={this.roleOptions()} checkPassword={this.checkPassword} />;
    } else {
      if( state.wargameInitiated ) {
        render = <GameChannelsWithTour storageKey={tourStorageKey} tourIsOpen={tourIsOpen} />
      } else {
        render = this.isUmpire() ? <PlayerUiInitiate initiateGameplay={this.initiateGameplay} /> : <LoaderScreen />;
      }
    }

    return render;
  }
}

const mapStateToProps = ({ wargame, messageTypes, gameInfo }) => ({
  wargame,
  messageTypes,
  gameInfo,
});

export default connect(mapStateToProps)(PlayerUi);
