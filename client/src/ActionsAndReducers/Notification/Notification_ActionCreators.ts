import * as ActionConstant from 'src/config'
import { Dispatch } from 'redux'
import uniqid from 'uniqid'
import { Notification } from '../../Views/Version'

export interface AddNotificationInterface {
  type: typeof ActionConstant.ADD_NOTIFICATION
  payload: {
    message: string
    type: string
    id: string
    autoHide: boolean
    subType: string
  }
}

export const addNotification = (message: string, type: string, autoHide = true, subType = 'alert'): AddNotificationInterface => ({
  type: ActionConstant.ADD_NOTIFICATION,
  payload: {
    message,
    type,
    id: uniqid.time(),
    autoHide,
    subType
  }
})

export const hide = (id: Notification) => ({
  type: ActionConstant.HIDE_NOTIFICATION,
  id
})

export const hideNotification = (id: Notification) => {
  return (dispatch: Dispatch) => {
    dispatch(hide(id))
  }
}
