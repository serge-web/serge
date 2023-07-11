import * as ActionConstant from 'src/config'
import { SetCurrentViewFromURI } from 'src/custom-types'

export const setCurrentViewFromURI = (path: string): SetCurrentViewFromURI => ({
  type: ActionConstant.SET_CURRENT_VIEW_FROM_URI,
  payload: path
})
