import { MessageCustom, Role } from '@serge/custom-types'
import { CollaborativeMessageStates } from '@serge/config'

export const showTakeOwnership = (message: MessageCustom, _role: Role['roleId'], _isUmpire = false, _isRFIManager: boolean): boolean => {
  const { collaboration } = message.details
  return (typeof collaboration === 'undefined' || collaboration.status === CollaborativeMessageStates.Unallocated) && _isUmpire
}

export const showSendForReview = (message: MessageCustom, _role: Role['name'], _isUmpire = false, _isRFIManager: boolean): boolean => {
  const { collaboration } = message.details
  return typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.InProgress && _isUmpire && _role === collaboration.owner
}

export const showReject = (message: MessageCustom, _role: Role['name'], _isUmpire = false, _isRFIManager: boolean): boolean => {
  const { collaboration } = message.details
  return _isRFIManager && typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.PendingReview && _isUmpire
}

export const showRelease = (message: MessageCustom, _role: Role['name'], _isUmpire = false, _isRFIManager: boolean): boolean => {
  const { collaboration } = message.details
  return _isRFIManager && typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.PendingReview && _isUmpire
}

export const showSaveDraft = (message: MessageCustom, _role: Role['name'], _isUmpire = false, _isRFIManager: boolean): boolean => {
  const { collaboration } = message.details
  return typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.InProgress && _isUmpire && _role === collaboration.owner
}

export const formEditable = (message: MessageCustom, _role: Role['name'], _isUmpire = false, _isRFIManager: boolean): boolean => {
  const { collaboration } = message.details
  return typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.InProgress && _isUmpire && collaboration.owner === _role && _isUmpire
}

// export const showFinalizedDocument = (message: MessageCustom, _role: Role['name'], _isUmpire = false, _isRFIManager: boolean): boolean => {
//   return true
// }

// export const showClosedDocument = (message: MessageCustom, _role: Role['name'], _isUmpire = false, _isRFIManager: boolean): boolean => {
//   return true
// }