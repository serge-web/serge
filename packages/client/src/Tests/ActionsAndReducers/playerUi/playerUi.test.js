// import configureStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
import ActionConstant from '../../../ActionsAndReducers/ActionConstants'
import { playerUiReducer } from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'
import {
  matchedForce,
  matchedRole,
  matchedForceAndRole,
  matchedAllRoles,
  checkParticipantStates,
  getParticipantStates
} from '../../../ActionsAndReducers/playerUi/playerUi_helpers'

import {} from '../../../consts'

import playerUiData from './playerUiData'

describe('playerUi reducer helpers', () => {

  it('matchedForce - Should return true or false if force matches', () => {
    expect(matchedForce({ forceUniqid: 'blue' }, 'blue')).toBeTruthy()
    expect(matchedForce({ forceUniqid: 'red' }, 'blue')).toBeFalsy()
  })

  it('matchedRole - Should return true or false if role matches', () => {
    expect(matchedRole({ value: 'recon' }, 'recon')).toBeTruthy()
    expect(matchedRole({ value: 'recon' }, 'supplies')).toBeFalsy();
  })

  it('matchedForceAndRole - Should return true or false if role and force matches', () => {

    const participant = {
      roles: [{ value: 'recon' }],
      forceUniqid: 'blue'
    }

    expect(matchedForceAndRole(participant, { selectedForce: 'blue', selectedRole: 'recon' })).toBeTruthy()
    expect(matchedForceAndRole(participant, { selectedForce: 'red', selectedRole: 'recon' })).toBeFalsy()
    expect(matchedForceAndRole(participant, { selectedForce: 'blue', selectedRole: 'supplies' })).toBeFalsy()
    expect(matchedForceAndRole(participant, { selectedForce: 'red', selectedRole: 'supplies' })).toBeFalsy()
  })

  it('matchedAllRoles - Should return true or false if all viewing all roles', () => {

    const participantTruthy = {
      roles: [],
      forceUniqid: 'blue'
    }

    const participantFalsy = {
      roles: [{ value: 'recon' }],
      forceUniqid: 'blue'
    }

    const participantFalsyTwo = {
      roles: [{ value: 'recon' }],
      forceUniqid: 'red'
    }

    expect(matchedAllRoles(participantTruthy, 'blue')).toBeTruthy()
    expect(matchedAllRoles(participantFalsy, 'blue')).toBeFalsy()
    expect(matchedAllRoles(participantFalsyTwo, 'blue')).toBeFalsy()

  })

  it('checkParticipantStates - Should return empty object, not participating force or observer', () => {

    const mockState = {
      selectedForce: 'blue',
      selectedRole: 'recon',
      isObserver: false
    }

    const mockChannel = {
      participants: [
        {
          forceUniqid: 'red',
          roles: [{ value: 'recon' }, {value: 'supplies' }]
        },
        {
          forceUniqid: 'red',
          roles: [{ value: 'attack' }, { value: 'supplies' }]
        }
      ]
    }

    expect(checkParticipantStates(mockChannel, mockState)).toEqual({})

  })

  it('checkParticipantStates - Should return return isParticipant and participatingRole - allRolesIncluded should be undefined', () => {

    const mockState = {
      selectedForce: 'blue',
      selectedRole: 'recon',
      isObserver: false
    } 

    const mockChannel = {
      participants: [
        { 
          forceUniqid: 'blue',
          roles: [{ value: 'recon' }, {value: 'supplies' }]
        }
      ]
    }

    expect(checkParticipantStates(mockChannel, mockState)).toEqual({ isParticipant: true, participatingRole: mockChannel.participants[0], allRolesIncluded: undefined })
  })

  it('checkParticipantStates - Should return return allRolesIncluded - isParticipant should be false, participatingRole should be undefined', () => {

    const mockState = {
      selectedForce: 'blue',
      selectedRole: 'recon',
      isObserver: false
    } 

    const mockChannel = {
      participants: [
        { 
          forceUniqid: 'blue',
          roles: []
        }
      ]
    }

    expect(checkParticipantStates(mockChannel, mockState)).toEqual({ isParticipant: false, participatingRole: undefined, allRolesIncluded: mockChannel.participants[0] })

  })

  it('getParticipantStates - Should get state of participant in particular channel', () => {

    const mockState = {
      selectedForce: 'blue',
      selectedRole: 'recon',
      isObserver: false,
      allTemplates: []
    } 

    const mockChannel = {
      participants: [
        { 
          forceUniqid: 'blue',
          roles: [{ value: 'recon' }],
          templates: [{ value: true }, { value: true }]
        }
      ]
    }

    expect(getParticipantStates(mockChannel, mockState)).toEqual({
      allRolesIncluded: undefined,
      isParticipant: true,
      observing: false,
      templates: [true, true]
    })
  })

  it('getParticipantStates - Should get state of observing participant in particular channel', () => {

    const mockState = {
      selectedForce: 'blue',
      selectedRole: 'recon',
      isObserver: true,
      allTemplates: []
    } 

    const mockChannel = {
      participants: [
        { 
          forceUniqid: 'red',
          roles: [],
          templates: [{ value: true }, { value: true }]
        }
      ]
    }

    expect(getParticipantStates(mockChannel, mockState)).toEqual({
      allRolesIncluded: undefined,
      isParticipant: false,
      observing: true,
      templates: []
    })
  })

  it('getParticipantStates - Should get state of participant in particular channel', () => {

    const mockState = {
      selectedForce: 'blue',
      selectedRole: 'recon',
      isObserver: false,
      allTemplates: []
    } 

    const mockChannel = {
      participants: [
        { 
          forceUniqid: 'blue',
          roles: [],
          templates: [{ value: true }, { value: true }]
        }
      ]
    }

    expect(getParticipantStates(mockChannel, mockState)).toEqual({
      allRolesIncluded: {
        forceUniqid: 'blue',
        roles: [],
        templates: [{ value: true }, { value: true }]
      },
      isParticipant: false,
      observing: false,
      templates: [true, true]
    });
  })
})

describe('playerUi Reducer', () => {
  it('should set selectedForce and force color', () => {
    const selectedForce = 'forceUniqid'
    const action = {
      type: ActionConstant.SET_FORCE,
      payload: selectedForce
    }

    expect(playerUiReducer({ 
      selectedForce: '',
      forceColor: '',
      allForces: [
        {
          uniqid: 'noMatch',
          color: '#111111'
        },
        {
          uniqid: 'forceUniqid',
          color: '#000000'
        }
      ]}, action)).toEqual({
      selectedForce: 'forceUniqid',
      forceColor: '#000000',
      allForces: [
        {
          uniqid: 'noMatch',
          color: '#111111'
        },
        {
          uniqid: 'forceUniqid',
          color: '#000000'
        }
      ]
    })
  })
  it('should set selectedRole and view options', () => {
    const action = {
      type: ActionConstant.SET_ROLE,
      payload: {
        name: 'roleselected',
        control: false,
        isObserver: false,
        isInsightViewer: false
      }
    }

    expect(playerUiReducer({}, action)).toEqual({
      selectedRole: 'roleselected',
      controlUi: false,
      isObserver: false,
      isInsightViewer: false
    })
  })

  it('should set all templates', () => {
    const action = {
      type: ActionConstant.SET_ALL_TEMPLATES_PLAYERUI,
      payload: [{template: 'one'}, {template: 'two'}]
    }

    expect(playerUiReducer({}, action)).toEqual({
      allTemplates: [{template: 'one'}, {template: 'two'}]
    })
  })

  it('should set objectives to hidden', () => {
    const action = {
      type: ActionConstant.SHOW_HIDE_OBJECTIVES
    }

    expect(playerUiReducer({ showObjective: true }, action)).toEqual({
      showObjective: false
    })
  })

  it('should set all feedback messages', () => {
    const action = {
      type: ActionConstant.SET_FEEDBACK_MESSAGES,
      payload: [{ message: 'one' }, { message: 'two' }]
    }

    expect(playerUiReducer({}, action)).toEqual({
      feedbackMessages: [{ message: 'one' }, { message: 'two' }]
    })
  })

  it('should set latest feedback message', () => {
    const action = {
      type: ActionConstant.SET_LATEST_FEEDBACK_MESSAGE,
      payload: { message: 'three' }
    }

    expect(playerUiReducer({ feedbackMessages: [{ message: 'one' }, { message: 'two' }] }, action)).toEqual({
      feedbackMessages: [{ message: 'three' }, { message: 'one' }, { message: 'two' }]
    })
  })

  it('Should set game turn marker message in all channels', () => {

    const action = {
      type: ActionConstant.SET_LATEST_WARGAME_MESSAGE,
      payload: {
        infoType: true,
        gameTurn: 1
      }
    }

    const message = {
      details: {
        channel: expect.any(String)
      },
      infoType: true,
      gameTurn: 1
    }

    expect(playerUiReducer(playerUiData, action)).toEqual({
      ...playerUiData,
      ...playerUiData.channels['channel-k3jz7h07'].messages.unshift(message),
      ...playerUiData.channels['channel-k3jz7591'].messages.unshift(message)
    })
  })
})
