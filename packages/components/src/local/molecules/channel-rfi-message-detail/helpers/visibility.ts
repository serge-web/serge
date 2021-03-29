import { MessageCustom, Role } from '@serge/custom-types'
import { CollaborativeMessageStates } from '@serge/config'

export const showSendForReview = (message: MessageCustom, _role: Role['name'], _isUmpire = false): boolean => {
  return typeof message.details.collaboration === 'undefined'
}
export const showTakeOwnership = (message: MessageCustom, _role: Role['name'], _isUmpire = false): boolean => {
  const { collaboration } = message.details
  return typeof collaboration !== 'undefined' && collaboration.status !== CollaborativeMessageStates.Released
}
export const showReject = (message: MessageCustom, _role: Role['name'], _isUmpire = false): boolean => {
  const { collaboration } = message.details
  return typeof collaboration !== 'undefined' && collaboration.status !== CollaborativeMessageStates.Unallocated
}
export const showRelease = (message: MessageCustom, _role: Role['name'], _isUmpire = false): boolean => {
  const { collaboration } = message.details
  return typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.PendingReview
}
export const showSaveDraft = (message: MessageCustom, _role: Role['name'], _isUmpire = false): boolean => {
  const { collaboration } = message.details
  return typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.PendingReview
}
