import * as ActionConstant from '@serge/config'

export const setCurrentViewFromURI = (path) => ({
  type: ActionConstant.SET_CURRENT_VIEW_FROM_URI,
  payload: path
})
