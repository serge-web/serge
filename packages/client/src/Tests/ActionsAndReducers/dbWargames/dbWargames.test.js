import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as wargames from '../../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { wargamesReducer } from '../../../ActionsAndReducers/dbWargames/wargames_Reducer'
import * as wargamesApi from '../../../api/wargames_api'
import {
  forceTemplate,
  umpireForceTemplate,
  channelTemplate
} from '../../../consts'

// import * as ActionConstant from '@serge/config'
import * as Globals from '@serge/config'
import _ from 'lodash'
import deepCopy from '../../../Helpers/copyStateHelper'

// eslint-disable-next-line no-undef
jest.mock('uniqid', () => ({
  time: () => 'k335grni'
}))

const mockStore = configureStore([thunk])

const wargameLocal = {
  name: 'wargame-juli0v4i',
  tabs: { 0: {}, 1: {}, 2: {} },
  wargameTitle: 'wargame-juli0v4i',
  wargameInitiated: true,
  data: {},
  _id: Globals.wargameSettings,
  _rev: '0-1'
}

const wargameList = [
  { name: 'wargame-juli0v4i', title: 'wargame-juli0v4i' },
  { name: 'wargame-jul4aij3', title: 'wargame-test' }
]

const tabs = {
  0: {
    name: 'Overview - settings',
    data: {
      gameDescription: '',
      spatialRepresentation: '',
      gameTurnTime: null,
      realtimeTurnTime: null,
      turnStrategy: ''
    }
  },
  1: {
    name: 'Forces',
    forces: [umpireForceTemplate],
    selectedForce: '',
    dirty: false
  },
  2: {
    name: 'Channels',
    channels: [],
    selectedChannel: '',
    dirty: false
  }
}

describe('wargames actions', () => {
  beforeEach(() => {
    wargamesApi.populateWargame = jest.fn(() => {
      return wargameList
    })

    wargamesApi.createWargame = jest.fn(() => {
      return wargameLocal
    })

    wargamesApi.editWargame = jest.fn(() => {
      return wargameLocal
    })

    wargamesApi.exportWargame = jest.fn(() => {
      return wargameLocal
    })

    wargamesApi.updateWargame = jest.fn(() => {
      return wargameLocal
    })

    wargamesApi.duplicateWargame = jest.fn(() => {
      return wargameList
    })
  })

  it('creates wargame databases ActionConstant.ALL_WARGAME_NAMES_SAVED after successful creation', async () => {
    const expectedActions = [
      { type: Globals.ALL_WARGAME_NAMES_SAVED, payload: wargameList }
    ]

    const store = mockStore({})

    return store.dispatch(wargames.populateWargameList()).then(() => {
      // return of async actions
      expect(store.getActions().payload).toEqual(expectedActions.payload)
    })
  })

  it('creates a new wargame ActionConstant.ALL_WARGAME_NAMES_SAVED after successful creation', async () => {
    const expectedActions = [
      { type: Globals.SET_CURRENT_WARGAME, payload: _.omit(wargameLocal, ['_id', '_rev']) }
    ]

    const store = mockStore({})

    return store.dispatch(wargames.createNewWargameDB()).then(() => {
      // return of async actions
      expect(store.getActions().payload).toEqual(expectedActions.payload)
    })
  })

  it('edits a wargame ActionConstant.SET_CURRENT_WARGAME after setting to edit', async () => {
    const expectedActions = [
      { type: Globals.SET_CURRENT_WARGAME, payload: wargameLocal }
    ]

    const store = mockStore({})

    return store.dispatch(wargames.editWargame(wargameList[0].name)).then(() => {
      // return of async actions
      expect(store.getActions().payload).toEqual(expectedActions.payload)
    })
  })

  it('duplicates a wargame ActionConstant.SET_CURRENT_WARGAME after setting to edit', async () => {
    const expectedActions = [
      { type: Globals.ALL_WARGAME_NAMES_SAVED, payload: wargameList }
    ]

    const store = mockStore({})

    return store.dispatch(wargames.duplicateWargame(wargameList[0].name)).then(() => {
      // return of async actions
      expect(store.getActions().payload).toEqual(expectedActions.payload)
    })
  })
})

describe('wargames reducer', () => {
  it('should save wargames names', () => {
    const wargameNamesAction = {
      type: Globals.ALL_WARGAME_NAMES_SAVED,
      payload: wargameList // important to pass correct payload, that's what the tests are for ;)
    }

    expect(wargamesReducer({}, wargameNamesAction)).toEqual({ wargameList })
  })

  it('should set current wargame', () => {
    const setCurrentAction = {
      type: Globals.SET_CURRENT_WARGAME,
      payload: wargameLocal // important to pass correct payload, that's what the tests are for ;)
    }

    expect(wargamesReducer({}, setCurrentAction)).toEqual({
      currentWargame: wargameLocal.name,
      wargameTitle: wargameLocal.wargameTitle,
      data: wargameLocal.data,
      wargameInitiated: wargameLocal.wargameInitiated
    })
  })

  it('should set current game tab', () => {
    const setTabAction = {
      type: Globals.SET_CURRENT_GAME_SETUP_TAB,
      payload: 1
    }

    expect(wargamesReducer({ tabs, currentTab: 0 }, setTabAction)).toEqual({
      tabs,
      currentTab: 1
    })
  })

  it('should set game data', () => {
    const newData = deepCopy(tabs)
    const gameDescription = 'description'

    newData[0].data = {
      ...newData[0].data,
      gameDescription
    }

    const setDataAction = {
      type: Globals.SET_GAME_SETUP_DATA,
      payload: { data: newData[0].data }
    }

    expect(wargamesReducer({ data: tabs, currentTab: 0 }, setDataAction)).toEqual({
      data: newData,
      currentTab: 0
    })
  })

  it('should add a new force', () => {
    const newData = deepCopy(tabs)

    newData[1].forces.push(forceTemplate)

    const addForceAction = {
      type: Globals.ADD_NEW_FORCE,
      payload: {
        name: 'black',
        uniqid: 'uid'
      }
    }

    expect(wargamesReducer({ data: tabs, currentTab: 1 }, addForceAction)).toEqual({
      data: newData,
      currentTab: 1
    })
  })

  it('set selected force', () => {
    const newData = deepCopy(tabs)

    newData[1].selectedForce = newData[1].forces[0]

    const addForceAction = {
      type: Globals.SET_SELECTED_FORCE,
      payload: newData[1].forces[0]
    }

    expect(wargamesReducer({ data: tabs, currentTab: 1 }, addForceAction)).toEqual({
      data: newData,
      currentTab: 1
    })
  })

  it('add new channel', () => {
    const newData = deepCopy(tabs)

    newData[2].channels.push(channelTemplate)

    const addChannelAction = {
      type: Globals.ADD_NEW_CHANNEL,
      payload: {
        name: 'black',
        uniqid: 'uid'
      }
    }

    expect(wargamesReducer({ data: tabs, currentTab: 2 }, addChannelAction)).toEqual({
      data: newData,
      currentTab: 2
    })
  })

  it('set selected channel', () => {
    const newData = deepCopy(tabs)

    newData[2].selectedChannel = newData[2].channels[0]

    const addForceAction = {
      type: Globals.SET_SELECTED_CHANNEL,
      payload: newData[2].channels[0]
    }

    expect(wargamesReducer({ data: tabs, currentTab: 2 }, addForceAction)).toEqual({
      data: newData,
      currentTab: 2
    })
  })

  it('add recipient', () => {
    const oldData = deepCopy(tabs)
    oldData[2].channels = [channelTemplate]
    oldData[2].selectedChannel = oldData[2].channels[0]
    oldData[2].channels[0].participants = []

    const newData = deepCopy(oldData)
    newData[2].channels[0].participants = [oldData[1].forces[0]]
    newData[2].channels[0].participants[0].subscriptionId = 'k335grni'
    newData[1].forces[0].subscriptionId = 'k335grni'

    const addRecipientAction = {
      type: Globals.ADD_NEW_RECIPIENT,
      payload: oldData[1].forces[0]
    }

    expect(wargamesReducer({ data: oldData, currentTab: 2 }, addRecipientAction)).toEqual({
      data: newData,
      currentTab: 2
    })
  })
})
