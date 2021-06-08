import * as ActionConstant from '@serge/config'
import copyState from '../Helpers/copyStateHelper'

var initialState = {
  loadingMessageTypes: true,
  loadingWargames: true,
  serverStatus: '',
  serverStatusPingTime: 0
}

export const loadingDbReducer = (state = initialState, action) => {
  var newState = copyState(state)

  switch (action.type) {
    case ActionConstant.POPULATE_MESSAGE_TYPES_DB:
      newState.loadingMessageTypes = action.isLoading
      return newState

    case ActionConstant.POPULATE_WARGAMES_DB:
      newState.loadingWargames = action.isLoading
      return newState

    case ActionConstant.SET_SERVER_STATUS:
      newState.serverStatus = action.payload
      newState.serverStatusPingTime = new Date().getTime()
      return newState

    default:
      return newState
  }
}
