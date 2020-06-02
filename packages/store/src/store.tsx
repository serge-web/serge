import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import { messageTypesReducer } from './reducers/message-types'
import { messagesReducer } from './reducers/messages'
import { currentModal } from './reducers/modal'
import { currentViewURIReducer } from './reducers/set-current-view-uri'
import { umpireMenuReducer } from './reducers/umpire-menu'
import { wargamesReducer } from './reducers/wargames'
import { notificationReducer } from './reducers/notification'
import { loadingDbReducer } from './reducers/loading-db'
import { exportItems } from './reducers/export-items'
import { gameInfo } from './reducers/serge-info'


const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

export default createStore(combineReducers({
  messageTypes: messageTypesReducer,
  messages: messagesReducer,
  umpireMenu: umpireMenuReducer,
  currentViewURI: currentViewURIReducer,
  currentModal,
  notifications: notificationReducer,
  wargame: wargamesReducer,
  dbLoading: loadingDbReducer,
  exportItems,
  gameInfo
}), applyMiddleware(...middlewares))
