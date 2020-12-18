import * as ActionConstant from '@serge/config'
import copyState from '../../Helpers/copyStateHelper.js'

const initialState = []

export const notificationReducer = (state = initialState, action) => {
  const newState = copyState(state)

  switch (action.type) {
    case ActionConstant.ADD_NOTIFICATION:
      newState.push(action.payload)
      return newState

    case ActionConstant.HIDE_NOTIFICATION:

      const index = newState.findIndex((item) => item.id === action.id)
      newState.splice(index, 1)
      return newState

    default:
      return newState
  }
}
