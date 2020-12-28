import ChannelTabsActionTypes from './types.d'
export const SET_CHANNEL_TAB = 'SET_CHANNEL_TAB'

export const setChannelTab = (forceId: string): ChannelTabsActionTypes => ({
  type: SET_CHANNEL_TAB,
  payload: forceId
})
