import { SET_CHANNEL_TAB } from './ChannelTabsActions'
import ChannelTabsActionTypes from './types.d'

const initialState: string = ''

export const tabReducer = (state: string = initialState, action: ChannelTabsActionTypes): string  => {
  if (action.type === SET_CHANNEL_TAB) {
    return action.payload
  }
  return state
}
