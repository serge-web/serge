import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as wargames from "../../../ActionsAndReducers/dbWargames/wargames_ActionCreators";
import {wargamesReducer} from "../../../ActionsAndReducers/dbWargames/wargames_Reducer";
import * as wargamesApi from "../../../api/wargames_api";
import {
  forceTemplate,
  channelTemplate,
} from "../../../consts";

import ActionConstant from "../../../ActionsAndReducers/ActionConstants";
import _ from "lodash";
import deepCopy from "../../../Helpers/copyStateHelper";

const mockStore = configureStore([thunk]);

const wargameLocal = {
  name: "wargame-juli0v4i",
  tabs: {0: {}, 1: {}, 2: {}},
  wargameTitle: "wargame-juli0v4i",
  _id: "_local/settings",
  _rev: "0-1"
};

const wargameList = [
  {name: "wargame-juli0v4i", title: "wargame-juli0v4i"},
  {name: "wargame-jul4aij3", title: "wargame-test"},
];

const tabs = {
  0: {
    name: "Overview - settings",
    data: {
      gameDescription: '',
      spatialRepresentation: '',
      gameTurnTime: null,
      realtimeTurnTime: null,
      turnStrategy: '',
    },
    complete: false,
  },
  1: {
    name: "Forces",
    data: {
      forces: {'white': forceTemplate},
      selectedForce: '',
      roles: [],
    },
    complete: false,
  },
  2: {
    name: "Channels",
    data: {
      channels: [{
        force: 'white',
        role: 'weather',
        template: 'weather forecast'
      }],
      selectedChannel: '',
    },
    complete: false,
  },
};

describe('wargames actions', () => {

  beforeEach(() => {
    wargamesApi.populateWargame = jest.fn(() => {
      return wargameList;
    });

    wargamesApi.createWargame = jest.fn(() => {
      return wargameLocal;
    });

    wargamesApi.editWargame = jest.fn(() => {
      return wargameLocal;
    });

    wargamesApi.exportWargame = jest.fn(() => {
      return wargameLocal;
    });

    wargamesApi.updateWargame = jest.fn(() => {
      return wargameLocal;
    });

    wargamesApi.duplicateWargame = jest.fn(() => {
      return wargameList;
    });
  });

  it('creates wargame databases ActionConstant.ALL_WARGAME_NAMES_SAVED after successful creation', async () => {

    const expectedActions = [
      { type: ActionConstant.ALL_WARGAME_NAMES_SAVED, payload: wargameList },
    ];

    const store = mockStore({});

    return store.dispatch(wargames.populateWargameStore()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates a new wargame ActionConstant.ALL_WARGAME_NAMES_SAVED after successful creation', async () => {

    const expectedActions = [
      { type: ActionConstant.SET_CURRENT_WARGAME, payload: _.omit(wargameLocal, ['_id', '_rev']), },
    ];

    const store = mockStore({});

    return store.dispatch(wargames.createNewWargameDB()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('edits a wargame ActionConstant.SET_CURRENT_WARGAME after setting to edit', async () => {

    const expectedActions = [
      { type: ActionConstant.SET_CURRENT_WARGAME, payload: wargameLocal, },
    ];

    const store = mockStore({});

    return store.dispatch(wargames.editWargame(wargameList[0].name)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('updates a wargame ActionConstant.SET_CURRENT_WARGAME after setting to edit', async () => {

    const expectedActions = [
      { type: ActionConstant.SET_CURRENT_WARGAME, payload: wargameLocal, },
    ];

    const store = mockStore({});

    return store.dispatch(wargames.updateWargame(wargameList[0].name, {}, wargameList[0].title)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('duplicates a wargame ActionConstant.SET_CURRENT_WARGAME after setting to edit', async () => {

    const expectedActions = [
      { type: ActionConstant.ALL_WARGAME_NAMES_SAVED, payload: wargameList },
    ];

    const store = mockStore({});

    return store.dispatch(wargames.duplicateWargame(wargameList[0].name)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('wargames reducer', () => {

  it('should save wargames names', () => {

    const wargameNamesAction = {
      type: ActionConstant.ALL_WARGAME_NAMES_SAVED,
      payload: wargameList, // important to pass correct payload, that's what the tests are for ;)
    };

    expect(wargamesReducer({}, wargameNamesAction)).toEqual({wargameList});
  });

  it('should set current wargame', () => {

    const setCurrentAction = {
      type: ActionConstant.SET_CURRENT_WARGAME,
      payload: wargameLocal, // important to pass correct payload, that's what the tests are for ;)
    };

    expect(wargamesReducer({}, setCurrentAction)).toEqual({
      currentWargame: wargameLocal.name,
      wargameTitle: wargameLocal.wargameTitle,
      tabs: wargameLocal.tabs,
    });
  });

  it('should update wargame name', () => {

    const setWargameList = {
      type: ActionConstant.SET_WARGAME_NAME,
      payload: 'New wargame name'
    };

    expect(wargamesReducer({wargameList}, setWargameList)).toEqual({
      wargameList,
      wargameTitle: setWargameList.payload,
    });
  });

  it('should set wargame name as invalid', () => {

    const setWargameList = {
      type: ActionConstant.SET_WARGAME_NAME,
      payload: wargameList[0].title
    };

    expect(wargamesReducer({wargameList}, setWargameList)).toEqual({
      wargameList,
      wargameTitle: setWargameList.payload,
    });
  });

  it('should set current game tab', () => {

    const setTabAction = {
      type: ActionConstant.SET_CURRENT_GAME_SETUP_TAB,
      payload: 1
    };

    expect(wargamesReducer({tabs, currentTab: 0}, setTabAction)).toEqual({
      tabs,
      currentTab: 1,
    });
  });

  it('should set game data', () => {

    let newData = deepCopy(tabs);

    newData[0].data.gameDescription = "description";

    const setDataAction = {
      type: ActionConstant.SET_GAME_SETUP_DATA,
      payload: {gameDescription: 'description'}
    };

    expect(wargamesReducer({tabs, currentTab: 0}, setDataAction)).toEqual({
      tabs: newData,
      currentTab: 0,
    });
  });

  it('should add a new force', () => {

    let newData = deepCopy(tabs);

    newData[1].data.forces.black = forceTemplate;

    const addForceAction = {
      type: ActionConstant.ADD_NEW_FORCE,
      payload: "black"
    };

    expect(wargamesReducer({tabs, currentTab: 1}, addForceAction)).toEqual({
      tabs: newData,
      currentTab: 1,
    });
  });

  it('set selected force', () => {

    let newData = deepCopy(tabs);

    newData[1].data.selectedForce = "black";

    const addForceAction = {
      type: ActionConstant.SET_SELECTED_FORCE,
      payload: "black"
    };

    expect(wargamesReducer({tabs, currentTab: 1}, addForceAction)).toEqual({
      tabs: newData,
      currentTab: 1,
    });
  });

  it('add new channel', () => {

    let newData = deepCopy(tabs);

    newData[2].data.channels.black = channelTemplate;

    const addChannelAction = {
      type: ActionConstant.ADD_NEW_CHANNEL,
      payload: "black"
    };

    expect(wargamesReducer({tabs, currentTab: 2}, addChannelAction)).toEqual({
      tabs: newData,
      currentTab: 2,
    });
  });

  it('set selected channel', () => {

    let newData = deepCopy(tabs);

    newData[2].data.selectedChannel = "black";
    newData[2].complete = true;

    const addForceAction = {
      type: ActionConstant.SET_SELECTED_CHANNEL,
      payload: "black"
    };

    expect(wargamesReducer({tabs, currentTab: 2}, addForceAction)).toEqual({
      tabs: newData,
      currentTab: 2,
    });
  });

  it('set force overview', () => {

    let oldData = deepCopy(tabs);
    let newData = deepCopy(tabs);

    oldData[1].data.selectedForce = "white";
    newData[1].data.selectedForce = "white";
    newData[1].data.forces.white.overview = "Test overview";

    const addForceAction = {
      type: ActionConstant.SET_FORCE_OVERVIEW,
      payload: "Test overview"
    };

    expect(wargamesReducer({tabs: oldData, currentTab: 1}, addForceAction)).toEqual({
      tabs: newData,
      currentTab: 1,
    });
  });

  it('add recipient', () => {

    let oldData = deepCopy(tabs);
    oldData[2].data.selectedChannel = "white";
    oldData[2].data.channels.white = [];

    let newData = deepCopy(oldData);
    newData[2].data.channels.white = ["Test"];
    newData[2].complete = true;

    const addRecipientAction = {
      type: ActionConstant.ADD_NEW_RECIPIENT,
      payload: "Test"
    };

    expect(wargamesReducer({tabs: oldData, currentTab: 2}, addRecipientAction)).toEqual({
      tabs: newData,
      currentTab: 2,
    });
  });
});
