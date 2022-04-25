import * as ActionConstant from '@serge/config'
import { SetCurrentViewFromURI } from '@serge/custom-types'

export const setCurrentViewFromURI = (path: string): SetCurrentViewFromURI => ({
  type: ActionConstant.SET_CURRENT_VIEW_FROM_URI,
  payload: path
})
