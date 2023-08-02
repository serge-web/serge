import { RootState } from 'src/custom-types'
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { messageTypesReducer } from '../ActionsAndReducers/dbMessageTypes/messageTypes_Reducer'
import { wargamesReducer } from '../ActionsAndReducers/dbWargames/wargames_Reducer'
import { addPlayerLogReducer } from '../ActionsAndReducers/PlayerLog/PlayerLog_Reducer'
import { currentViewURIReducer } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_Reducer'
import { logger } from 'redux-logger'
import {
  currentModalWithType,
  exportItemsReducerWithType,
  gameInfoReducerWithType,
  loadingDbReducerWithType,
  messagesTypesReducerWithType,
  notificationReducerWithType,
  umpireMenuReducerWithType
} from './RootReducer'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const store: Store<RootState> = createStore<RootState, any, any, any>(combineReducers({
  messageTypes: messageTypesReducer,
  messages: messagesTypesReducerWithType,
  umpireMenu: umpireMenuReducerWithType,
  currentViewURI: currentViewURIReducer,
  currentModal: currentModalWithType,
  notifications: notificationReducerWithType,
  playerLog: addPlayerLogReducer,
  wargame: wargamesReducer,
  dbLoading: loadingDbReducerWithType,
  exportItems: exportItemsReducerWithType,
  gameInfo: gameInfoReducerWithType
}), applyMiddleware(...middlewares))

export default store
