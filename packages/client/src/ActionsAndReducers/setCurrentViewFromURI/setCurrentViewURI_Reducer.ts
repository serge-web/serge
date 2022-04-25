import * as ActionConstant from '@serge/config'
import { SetCurrentViewFromURI } from '@serge/custom-types'

export const currentViewURIReducer = (state = '/', action: SetCurrentViewFromURI) => {
  let newState = state

  switch (action.type) {
    case ActionConstant.SET_CURRENT_VIEW_FROM_URI:
      newState = action.payload
      return newState

    default:
      return newState
  }
}
