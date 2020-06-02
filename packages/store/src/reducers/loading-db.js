import { copyState } from '@serge/helpers'

import ActionConstant from '../constants'

const initialState = {
  loadingMessageTypes: true,
  loadingWargames: true
}

export const loadingDbReducer = (state = initialState, action) => {
  let newState = copyState(state)

  switch (action.type) {
    case ActionConstant.POPULATE_MESSAGE_TYPES_DB:
      newState.loadingMessageTypes = action.isLoading
      return newState

    case ActionConstant.POPULATE_WARGAMES_DB:
      newState.loadingWargames = action.isLoading
      return newState

    default:
      return newState
  }
}
