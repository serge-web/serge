import { MessageCustom, ChannelData, ForceRole } from '@serge/custom-types'
import { CollaborativeMessageStates, SpecialChannelTypes } from '@serge/config'

/** shortcut constants to make code more legible */
const cEdit = SpecialChannelTypes.CHANNEL_COLLAB_EDIT
const cResponse = SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE

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
const isThisChannel = (channel: ChannelData, channelType: SpecialChannelTypes): boolean => {
  return channel.format === channelType
}

export const formEditable = (message: MessageCustom, _role: ForceRole): boolean => {
  return isThisState(message, CollaborativeMessageStates.InProgress) && isThisRole(message, _role)
}

// Collaborative Editing buttons
export const ColEditPendingReview = (message: MessageCustom, channel: ChannelData, canReleaseMessages: boolean | undefined): boolean => {
  return isThisChannel(channel, cEdit) && isThisState(message, CollaborativeMessageStates.PendingReview) && !!canReleaseMessages
}

export const ColEditDocumentPending = (message: MessageCustom, channel: ChannelData, canCollaborate: boolean | undefined): boolean => {
  return isThisChannel(channel, cEdit) && isThisState(message, CollaborativeMessageStates.DocumentPending) && !!canCollaborate
}

export const ColEditDocumentBeingEdited = (message: MessageCustom, channel: ChannelData, canCollaborate: boolean | undefined): boolean => {
  return isThisChannel(channel, cEdit) && isThisState(message, CollaborativeMessageStates.EditDocument) && !!canCollaborate
}

// Collaborative Responding buttons
export const ColRespRelManReview = (message: MessageCustom, channel: ChannelData, canReleaseMessages: boolean | undefined): boolean => {
  return isThisChannel(channel, cResponse) && isThisState(message, CollaborativeMessageStates.PendingReview) && !!canReleaseMessages
}

export const ColRespResponsePending = (message: MessageCustom, channel: ChannelData, canCollaborate: boolean | undefined): boolean => {
  return isThisChannel(channel, cResponse) && isThisState(message, CollaborativeMessageStates.ResponsePending) && !!canCollaborate
}

export const ColRespDocumentBeingEdited = (message: MessageCustom, channel: ChannelData, canCollaborate: boolean | undefined): boolean => {
  return isThisChannel(channel, cResponse) && isThisState(message, CollaborativeMessageStates.EditResponse) && !!canCollaborate
}
