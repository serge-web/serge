import { applyMiddleware, combineReducers, createStore } from 'redux'
import { messageTypesReducer } from '../ActionsAndReducers/dbMessageTypes/messageTypes_Reducer'
import { messagesReducer } from '../ActionsAndReducers/dbMessages/messages_Reducer'
import { currentModal } from '../ActionsAndReducers/Modal/Modal_Reducer'
import { currentViewURIReducer } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_Reducer'
import { umpireMenuReducer } from '../ActionsAndReducers/UmpireMenu/umpireMenu_Reducer'
import { wargamesReducer } from '../ActionsAndReducers/dbWargames/wargames_Reducer'
import { notificationReducer } from '../ActionsAndReducers/Notification/Notification_Reducer'
import { loadingDbReducer } from '../ActionsAndReducers/loadingDb_Reducer'
import { exportItems } from '../ActionsAndReducers/ExportItems/ExportItems_Reducer'
import { gameInfo } from '../ActionsAndReducers/sergeInfo/sergeInfo_Reducer'
import { addPlayerLogReducer } from '../ActionsAndReducers/PlayerLog/PlayerLog_Reducer'

import thunk from 'redux-thunk'

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
  playerLog: addPlayerLogReducer,
  wargame: wargamesReducer,
  dbLoading: loadingDbReducer,
  exportItems,
  gameInfo
}), applyMiddleware(...middlewares))
