import { CollaborativeMessageStates, SpecialChannelTypes } from '@serge/config'
import { ChannelData, ForceRole, MessageCustom } from '@serge/custom-types'
import { CoreParticipant } from '@serge/custom-types/participant'

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

/** whether this user can see the collaborative aspects of this channel */
export const userCanSeeCollab = (_channel: ChannelData, _role: ForceRole): boolean => {
  const parts = _channel.participants
  return !!parts.find((part: CoreParticipant) => {
    // is this our force?
    if (part.forceUniqid === _role.forceId) {
      // does this participant collaborate?
      // if (part.canCollaborate) {
      //   // it could be me :-)
      //   if (part.roles && part.roles.length) {
      //     return part.roles.find((role: string) => role === _role.roleId)
      //   } else {
      //     // no discrete roles specified, go for it
      //     return true
      //   }
      // }
    }
    return false
  })
}

export const formEditable = (message: MessageCustom, role: ForceRole): boolean => {
  const beingEdited = isThisState(message, CollaborativeMessageStates.BeingEdited) || isThisState(message, CollaborativeMessageStates.BeingEdited)
  return beingEdited && isThisRole(message, role)
}

// Collaborative Editing buttons
export const ColEditPendingReview = (message: MessageCustom, channel: ChannelData, canReleaseMessages: boolean | undefined): boolean => {
  return isThisChannel(channel, cEdit) && isThisState(message, CollaborativeMessageStates.PendingReview) && !!canReleaseMessages
}

export const ColEditDocumentPending = (message: MessageCustom, channel: ChannelData, canCollaborate: boolean | undefined): boolean => {
  return isThisChannel(channel, cEdit) && isThisState(message, CollaborativeMessageStates.Pending) && !!canCollaborate
}

export const ColEditClosed = (message: MessageCustom, channel: ChannelData, canReleaseMessages: boolean | undefined): boolean => {
  const inClosedState = isThisState(message, CollaborativeMessageStates.Closed) ||
    isThisState(message, CollaborativeMessageStates.Finalized)
  return isThisChannel(channel, cEdit) && inClosedState && !!canReleaseMessages
}

export const ColEditDocumentBeingEdited = (message: MessageCustom, channel: ChannelData, canCollaborate: boolean | undefined, role: ForceRole): boolean => {
  return isThisChannel(channel, cEdit) && isThisState(message, CollaborativeMessageStates.BeingEdited) && !!canCollaborate && isThisRole(message, role)
}

export const ColDocumentBeingEditedByOther = (message: MessageCustom, canUnClaimMessages: boolean | undefined): boolean => {
  return isThisState(message, CollaborativeMessageStates.BeingEdited) && !!canUnClaimMessages
}

// Collaborative Responding buttons
export const ColRespPendingReview = (message: MessageCustom, channel: ChannelData, canReleaseMessages: boolean | undefined): boolean => {
  return isThisChannel(channel, cResponse) && isThisState(message, CollaborativeMessageStates.PendingReview) && !!canReleaseMessages
}

export const ColRespResponsePending = (message: MessageCustom, channel: ChannelData, canCollaborate: boolean | undefined): boolean => {
  return isThisChannel(channel, cResponse) && isThisState(message, CollaborativeMessageStates.Pending) && !!canCollaborate
}

export const ColRespDocumentBeingEdited = (message: MessageCustom, channel: ChannelData, canCollaborate: boolean | undefined, role: ForceRole): boolean => {
  return isThisChannel(channel, cResponse) && isThisState(message, CollaborativeMessageStates.BeingEdited) && !!canCollaborate && isThisRole(message, role)
}

export const ColResponseClosed = (message: MessageCustom, channel: ChannelData, canReleaseMessages: boolean | undefined): boolean => {
  const inClosedState = isThisState(message, CollaborativeMessageStates.Closed) ||
    isThisState(message, CollaborativeMessageStates.Released)
  return isThisChannel(channel, cResponse) && inClosedState && !!canReleaseMessages
}
