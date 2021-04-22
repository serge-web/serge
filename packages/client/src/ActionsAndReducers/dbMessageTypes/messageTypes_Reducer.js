import * as ActionConstant from '@serge/config'
import copyState from '../../Helpers/copyStateHelper'

const initialState = {
  loadingDb: false,
  isLoading: false,
  messages: []
}

export const messageTypesReducer = (state = initialState, action) => {
  const newState = copyState(state)

  switch (action.type) {
    case ActionConstant.DB_MESSAGE_TYPES_GET:
      newState.isLoading = action.isLoading
      return newState

    case ActionConstant.DB_MESSAGE_TYPES_SAVED:
      newState.messages = action.payload
      return newState

    default:
      return newState
  }
}
