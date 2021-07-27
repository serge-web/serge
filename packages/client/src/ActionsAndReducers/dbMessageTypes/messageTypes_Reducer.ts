import * as ActionConstant from '@serge/config'
import copyState from '../../Helpers/copyStateHelper'
import { MessageTypes, MessageTypesActionTypes } from '@serge/custom-types'

const initialState: MessageTypes = {
  loadingDb: false,
  isLoading: false,
  messages: [],
  messagesByKey: {}
}

export const messageTypesReducer = (state: MessageTypes = initialState, action: MessageTypesActionTypes): MessageTypes => {
  var newState = copyState(state)

  switch (action.type) {
    case ActionConstant.DB_MESSAGE_TYPES_GET:
      newState.isLoading = action.payload
      return newState

    case ActionConstant.DB_MESSAGE_TYPES_SAVED:
      newState.messages = action.payload
      newState.messagesByKey = {}
      // save messagesByKey for easy access
      for (const template of action.payload) {
        newState.messagesByKey[template._id] = template
      }
      return newState

    default:
      return newState
  }
}
