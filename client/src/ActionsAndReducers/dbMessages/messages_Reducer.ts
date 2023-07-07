import * as ActionConstant from '@serge/config'
import { MessagesActionTypes } from 'src/custom-types'
import copyState from '../../Helpers/copyStateHelper.js'

const initialState = {
  isLoading: false,
  messages: [],
  messagePreviewId: '',
  messagePreview: {}
}

export const messagesReducer = (state = initialState, action: MessagesActionTypes) => {
  // redux works on the principle of keeping your data immutable.
  // directly editing the state will cause an error, it leaves immutability up to you,
  // the simplest solution with smallest footprint I've found so far is to use this deepCopy helper I found online.
  const newState = copyState(state)

  switch (action.type) {
    case ActionConstant.DB_MESSAGES_GET:
      newState.isLoading = action.isLoading
      return newState

    case ActionConstant.DB_MESSAGE_SAVED:
      newState.messages = action.payload
      return newState

    case ActionConstant.DB_RETURNED_MESSAGE:
      newState.messagePreviewId = action.payload._id
      newState.messagePreview = action.payload
      return newState

    case ActionConstant.RESET_MESSAGE_PREVIEW:
      newState.messagePreviewId = ''
      newState.messagePreview = {}
      return newState

    default:
      return newState
  }
}
