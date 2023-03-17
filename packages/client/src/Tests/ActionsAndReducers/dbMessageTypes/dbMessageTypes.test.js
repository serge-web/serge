import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { describe, it, expect, jest, beforeEach } from '@jest/globals'

import * as messageTypes from '../../../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators'
import * as messageTypesApi from '../../../api/messageTypes_api'
import { messageTypesReducer } from '../../../ActionsAndReducers/dbMessageTypes/messageTypes_Reducer'
import machineryFailure from '../../../Schemas/machinery_failure.json'
import * as ActionConstant from '@serge/config'
import { MESSAGE_TEMPLATE_ROUTE } from '../../../consts'

const mockStore = configureStore([thunk])

describe('messageTypes actions', () => {
  beforeEach(() => {
    messageTypesApi.postNewMessage = jest.fn(() => {
      return {
        ok: true,
        _id: 'id',
        _rev: 'revision1'
      }
    })
    messageTypesApi.getAllMessagesFromDb = jest.fn(() => {
      return [{ message: 'message' }]
    })
    messageTypesApi.duplicateMessageInDb = jest.fn(() => {
      return true
    })
    messageTypesApi.updateMessageInDb = jest.fn(() => {
      return {
        ok: true,
        _id: 'id',
        _rev: 'revision1'
      }
    })
    messageTypesApi.deleteMessageFromDb = jest.fn(() => {
      return true
    })
  })

  // var message = {
  //   Date: '2019-04-18T18:18',
  //   Description: 'description',
  //   Status: 'Minor',
  //   title: 'Test'
  // }

  it('creates a messageType ActionConstant.DB_MESSAGE_SAVED after successful save', async () => {
    const expectedActions = [
      { type: ActionConstant.DB_MESSAGE_CREATION_LOADING, payload: true },
      {
        type: ActionConstant.DB_MESSAGE_STATUS,
        payload: {
          _id: 'id',
          _rev: 'revision1',
          ok: true
        }
      },
      { type: ActionConstant.DB_MESSAGE_TYPES_SAVED, payload: [{ message: 'message' }] },
      { type: ActionConstant.DB_MESSAGE_CREATION_LOADING, payload: false },
      { type: ActionConstant.SET_CURRENT_VIEW_FROM_URI, payload: MESSAGE_TEMPLATE_ROUTE }
    ]

    const store = mockStore({})

    return store.dispatch(messageTypes.createMessageType(machineryFailure)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('duplicates a messageType ActionConstant.DB_MESSAGE_SAVED after successful save', async () => {
    const expectedActions = [
      { type: ActionConstant.DB_MESSAGE_CREATION_LOADING, payload: true },
      { type: ActionConstant.DB_MESSAGE_STATUS, payload: true },
      { type: ActionConstant.DB_MESSAGE_TYPES_SAVED, payload: [{ message: 'message' }] },
      { type: ActionConstant.DB_MESSAGE_CREATION_LOADING, payload: false }
    ]

    const store = mockStore({})

    return store.dispatch(messageTypes.duplicateMessageType('fakeId')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('updates a messageType ActionConstant.DB_MESSAGE_SAVED after successful save', async () => {
    const expectedActions = [
      { type: ActionConstant.DB_MESSAGE_CREATION_LOADING, payload: true },
      { type: ActionConstant.DB_MESSAGE_STATUS, payload: true },
      { type: ActionConstant.DB_MESSAGE_TYPES_SAVED, payload: [{ message: 'message' }] },
      { type: ActionConstant.DB_MESSAGE_CREATION_LOADING, payload: false },
      { type: ActionConstant.SET_CURRENT_VIEW_FROM_URI, payload: MESSAGE_TEMPLATE_ROUTE }
    ]

    const store = mockStore({})

    return store.dispatch(messageTypes.updateMessageType(machineryFailure, 'fakeId')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('deletes a messageType ActionConstant.DB_MESSAGE_TYPES_SAVED after successful delete', async () => {
    const expectedActions = [
      { type: ActionConstant.DB_MESSAGE_CREATION_LOADING, payload: true },
      { type: ActionConstant.DB_MESSAGE_TYPES_SAVED, payload: [{ message: 'message' }] },
      { type: ActionConstant.DB_MESSAGE_CREATION_LOADING, payload: false }
    ]

    const store = mockStore({})

    return store.dispatch(messageTypes.deleteMessageType('fakeId')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('gets all messageTypes ActionConstant.DB_MESSAGE_TYPES_SAVED after successful get', async () => {
    const expectedActions = [
      { type: ActionConstant.DB_MESSAGE_TYPES_GET, payload: true },
      { type: ActionConstant.DB_MESSAGE_TYPES_SAVED, payload: [{ message: 'message' }] },
      { type: ActionConstant.DB_MESSAGE_TYPES_GET, payload: false }
    ]

    const store = mockStore({})

    return store.dispatch(messageTypes.getAllMessageTypes('fakeId')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('messageTypes reducer', () => {
  it('should save messageTypes to store', () => {
    const saveMessagesAction = {
      type: ActionConstant.DB_MESSAGE_TYPES_SAVED,
      payload: [{ message: 'Test', _id: 'id' }]
    }

    expect(messageTypesReducer({ isLoading: false, messages: [] }, saveMessagesAction)).toEqual({
      isLoading: false,
      messages: [{ message: 'Test', _id: 'id' }],
      templatesByKey: {
        id: { message: 'Test', _id: 'id' }
      }
    })
  })

  it('should set isLoading to true', () => {
    const action = {
      type: ActionConstant.DB_MESSAGE_TYPES_GET,
      payload: true
    }

    expect(messageTypesReducer({ isLoading: false }, action)).toEqual({
      isLoading: true
    })
  })
})
