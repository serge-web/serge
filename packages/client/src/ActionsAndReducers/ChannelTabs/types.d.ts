import { SET_CHANNEL_TAB } from './ChannelTabsActions'

interface SetChannelTabType {
  type: typeof SET_CHANNEL_TAB,
  payload: string
}

type ChannelTabsActionTypes = SetChannelTabType

export default ChannelTabsActionTypes
