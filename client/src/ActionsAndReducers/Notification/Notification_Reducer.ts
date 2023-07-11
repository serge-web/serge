import * as ActionConstant from 'src/config'
import { ADD_NOTIFICATION } from 'src/config'
import copyState from '../../Helpers/copyStateHelper.js'
import { AddNotificationInterface } from './Notification_ActionCreators.js'

const initialState: AddNotificationInterface['payload'][] = []

export const notificationReducer = (state = initialState, action: { type: typeof ADD_NOTIFICATION | typeof ActionConstant.HIDE_NOTIFICATION, id: string, payload: string }) => {
  const newState = copyState(state)

  switch (action.type) {
    case ActionConstant.ADD_NOTIFICATION:
      newState.push(action.payload)
      return newState

    case ActionConstant.HIDE_NOTIFICATION:

      const index = newState.findIndex((item: AddNotificationInterface['payload']) => item.id === action.id)
      newState.splice(index, 1)
      return newState

    default:
      return newState
  }
}
