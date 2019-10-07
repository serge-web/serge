import ActionConstant from '../ActionConstants';
import copyState from "../../Helpers/copyStateHelper";
import uniqId from "uniqid";

import {
  forceTemplate,
  channelTemplate,
  dbDefaultSettings,
  serverPath, DEFAULT_SERVER,
} from "../../consts";

var initialState = {
  isLoading: false,
  wargameList: [],
  currentWargame: '',
  exportMessagelist: [],
  wargameTitle: '',
  data: {...dbDefaultSettings.data},
  currentTab: Object.keys(dbDefaultSettings.data)[0],
  wargameInitiated: false,
  adminNotLoggedIn: true,
};

var getNameFromPath = function (dbPath) {
  let path = new URL(dbPath).pathname;
  let index = path.lastIndexOf('/');
  return path.substring(index + 1);
};

export const wargamesReducer = (state = initialState, action) => {

  let newState = copyState(state);

  let tab = newState.currentTab;

  let selected;
  let curChannel;
  let index;
  let listWithoutThis;
  // let uniqueName;

  switch (action.type) {

    case ActionConstant.ALL_WARGAME_NAMES_SAVED:
      newState.wargameList = action.payload;
      return newState;

    case ActionConstant.SET_CURRENT_WARGAME:

      newState.currentWargame = action.payload.name;
      newState.wargameTitle = action.payload.wargameTitle;
      newState.data = action.payload.data;
      newState.wargameInitiated = action.payload.wargameInitiated || false;

      return newState;

    case ActionConstant.SET_EXPORT_WARGAME:

      newState.data = action.payload.data;
      newState.currentWargame = action.payload.name;
      newState.wargameTitle = action.payload.wargameTitle;
      newState.exportMessagelist = action.payload.exportMessagelist;
      newState.wargameInitiated = action.payload.wargameInitiated || false;

      return newState;

    case ActionConstant.SET_WARGAME_NAME:

      listWithoutThis = [];

      newState.wargameList.forEach((game) => {
        if (getNameFromPath(game.name) !== newState.currentWargame) listWithoutThis.push(game);
      });

      // uniqueName = listWithoutThis.every((wargame) => wargame.title !== action.payload );

      newState.wargameTitle = action.payload;
      return newState;

    case ActionConstant.SET_CURRENT_GAME_SETUP_TAB:
      newState.currentTab = action.payload;
      break;

    case ActionConstant.SET_GAME_SETUP_DATA:
      newState.data[tab] = {...newState.data[tab], ...action.payload};
      break;

    case ActionConstant.SET_TAB_SAVED:
      newState.data[tab].dirty = false;
      break;

    case ActionConstant.SET_TAB_UNSAVED:
      newState.data[tab].dirty = true;
      break;

    case ActionConstant.ADD_NEW_FORCE:

      let newForce = forceTemplate;
      newForce.name = action.payload.name;
      newForce.uniqid = action.payload.uniqid;
      newForce.roles[0].password = `p${uniqId.time()}`;

      newState.data[tab].forces.push(newForce);
      break;

    case ActionConstant.SET_FORCE_COLOR:
      newState.data[tab].forces.find((force) => force.name === newState.data[tab].selectedForce.name).color = action.payload;
      break;

    case ActionConstant.SET_SELECTED_FORCE:
      newState.data[tab].selectedForce = action.payload;
      break;

    case ActionConstant.ADD_NEW_CHANNEL:

      let newChannel = channelTemplate;
      newChannel.name = action.payload.name;
      newChannel.uniqid = action.payload.uniqid;
      newState.data[tab].channels.push(newChannel);
      break;

    case ActionConstant.SET_SELECTED_CHANNEL:
      newState.data[tab].selectedChannel = action.payload;
      break;

    case ActionConstant.DELETE_SELECTED_CHANNEL:

      let channelIndex = newState.data[tab].channels.findIndex((channel) => channel.name === action.payload);

      newState.data[tab].channels.splice(channelIndex, 1);
      newState.data[tab].selectedChannel = '';
      break;

    case ActionConstant.SET_FORCE_OVERVIEW:
      selected = newState.data[tab].selectedForce.name;
      newState.data[tab].forces.find((f) => f.name === selected).overview = action.payload;
      break;

    case ActionConstant.ADD_NEW_RECIPIENT:
      curChannel = newState.data[tab].selectedChannel.uniqid;
      let newParticipant = {...action.payload, subscriptionId: uniqId.time()};
      newState.data[tab].channels.find((c) => c.uniqid === curChannel).participants.push(newParticipant);
      break;

    case ActionConstant.UPDATE_RECIPIENT:
      curChannel = newState.data[tab].selectedChannel.uniqid;
      index = newState.data[tab].channels.find((c) => c.uniqid === curChannel).participants.findIndex((participant) => participant.subscriptionId === action.payload.id);
      newState.data[tab].channels.find((c) => c.uniqid === curChannel).participants.splice(index, 1, {...action.payload.data, subscriptionId: action.payload.id});
      break;

    case ActionConstant.REMOVE_RECIPIENT:
      curChannel = newState.data[tab].selectedChannel.uniqid;
      index = newState.data[tab].channels.find((c) => c.uniqid === curChannel).participants.findIndex((participant) => participant.subscriptionId === action.payload);
      newState.data[tab].channels.find((c) => c.uniqid === curChannel).participants.splice(index, 1);
      break;

    case ActionConstant.ADD_ROLE_TO_FORCE:
      newState.data[tab].forces.find((force) => force.name === action.payload.force).roles.push(action.payload.role);
      break;

    case ActionConstant.UPDATE_ROLE_NAME:
      index = newState.data[tab].forces.find((force) => force.name === action.payload.force).roles.findIndex((role) => role.name === action.payload.oldName);
      newState.data[tab].forces.find((force) => force.name === action.payload.force).roles.splice(index, 1, action.payload.role);
      break;

    case ActionConstant.REMOVE_ROLE:
      index = newState.data[tab].forces.find((force) => force.name === newState.data[tab].selectedForce.name).roles.findIndex((role) => role.name === action.role);
      newState.data[tab].forces.find((f) => f.name === newState.data[tab].selectedForce.name).roles.splice(index, 1);
      break;

    case ActionConstant.ADD_ICON:

      selected = newState.data[tab].selectedForce.name;
      newState.data[tab].forces.find((f) => f.name === selected).icon = serverPath + action.icon.slice(1);
      break;

    case ActionConstant.LOGIN_ADMIN:

      newState.adminNotLoggedIn = false;
      break;

    default:
      return newState;
  }

  return newState;
};
