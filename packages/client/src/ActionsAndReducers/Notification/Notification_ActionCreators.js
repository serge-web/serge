import * as ActionConstant from '@serge/config'
import uniqid from 'uniqid'

export const addNotification = (message, type, autoHide = true) => ({
  type: ActionConstant.ADD_NOTIFICATION,
  payload: {
    message: message,
    type: type,
    id: uniqid.time(),
    autoHide: autoHide
  }
})

export const hide = (id) => ({
  type: ActionConstant.HIDE_NOTIFICATION,
  id
})

export const hideNotification = (id) => {
  return (dispatch) => {
    dispatch(hide(id))
  }
}
