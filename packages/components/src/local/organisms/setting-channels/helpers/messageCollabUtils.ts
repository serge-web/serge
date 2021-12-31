import { CHANNEL_COLLAB } from '@serge/config'
import { ChannelCollab, ChannelData } from '@serge/custom-types'
import { MessageGroupType, MessagesValues } from './genMessageCollabEdit'
import { getSelectedValue } from './messageGroupHelpers'

export const getMessagesValues = (isCollab: boolean, selectedChannel?: ChannelData): MessagesValues => {
  return {
    messageTemplate: isCollab ? getSelectedValue(MessageGroupType.MESSAGE_TEMPLATE, selectedChannel) : [],
    responseTemplate: isCollab ? getSelectedValue(MessageGroupType.RESPONSE_TEMPLATE, selectedChannel) : [],
    documentStatus: isCollab ? getSelectedValue(MessageGroupType.DOCUMENT_STATUS, selectedChannel) : [],
    requestChanges: isCollab ? getSelectedValue(MessageGroupType.REQUEST_CHANGES, selectedChannel) : [],
    approve: isCollab ? getSelectedValue(MessageGroupType.APPROVE, selectedChannel) : [],
    release: isCollab ? getSelectedValue(MessageGroupType.RELEASE, selectedChannel) : [],
    additionalData: isCollab ? getSelectedValue(MessageGroupType.ADDITIONAL_DATA, selectedChannel) : []
  }
}

export const isCollabChannel = (channelData?: ChannelData): boolean => {
  if (!channelData) return false
  return 'channelType' in channelData && (channelData as unknown as ChannelCollab).channelType === CHANNEL_COLLAB
}
