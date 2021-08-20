import { MessageCustom, ChannelData, ForceRole } from '@serge/custom-types'
import { CollaborativeMessageStates, SpecialChannelTypes } from '@serge/config'

/**
 * @param message the message we're looking at
 * @param state the state we're checking for
 * @returns is this message in the required state?
 */
const isThisState = (message: MessageCustom, state: CollaborativeMessageStates): boolean => {
  const { collaboration } = message.details
  return typeof collaboration !== 'undefined' && collaboration.status === state
}

/**
 * @param message the message we're looking at
 * @param role the role we're checking for
 * @returns is this message owned by the indicated role
 */
const isThisRole = (message: MessageCustom, role: ForceRole): boolean => {
  const { collaboration } = message.details
  return typeof collaboration !== 'undefined' && collaboration.owner?.roleId === role.roleId
}

/**
 * @param channel the channel we're in
 * @param role the role we're checking for
 * @returns is this channel the type we're looking for
 */
const isThisChannelType = (channel: ChannelData, channelType: SpecialChannelTypes): boolean => {
  return channel.format === channelType
}

export const formEditable = (message: MessageCustom, _role: ForceRole): boolean => {
  return isThisState(message, CollaborativeMessageStates.InProgress) && isThisRole(message, _role)
}

export const ColEditRelManReview = (message: MessageCustom, channel: ChannelData, canReleaseMessages: boolean | undefined): boolean => {
  const { collaboration } = message.details
  return isThisChannelType(channel, SpecialChannelTypes.CHANNEL_COLLAB_EDIT) && typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.PendingReview && !!canReleaseMessages
}

export const ColEditCollPartAssClaim = (message: MessageCustom, channel: ChannelData, canCollaborate: boolean | undefined): boolean => {
  const { collaboration } = message.details
  return channel.format === SpecialChannelTypes.CHANNEL_COLLAB_EDIT && typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.DocumentPending && !!canCollaborate
}

export const ColEditCollPartEditDoc = (message: MessageCustom, channel: ChannelData, canCollaborate: boolean | undefined): boolean => {
  const { collaboration } = message.details
  return channel.format === SpecialChannelTypes.CHANNEL_COLLAB_EDIT && typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.EditDocument && !!canCollaborate
}

// Collaborative Responding buttons
export const ColRespRelManReview = (message: MessageCustom, channel: ChannelData, canReleaseMessages: boolean | undefined): boolean => {
  const { collaboration } = message.details
  return channel.format === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE && typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.PendingReview && !!canReleaseMessages
}

export const ColRespRelManRespPen = (message: MessageCustom, channel: ChannelData, canCollaborate: boolean | undefined): boolean => {
  const { collaboration } = message.details
  return channel.format === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE && typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.ResponsePending && !!canCollaborate
}

export const ColRespRelManEditResp = (message: MessageCustom, channel: ChannelData, canCollaborate: boolean | undefined): boolean => {
  const { collaboration } = message.details
  return channel.format === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE && typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.EditResponse && !!canCollaborate
}
