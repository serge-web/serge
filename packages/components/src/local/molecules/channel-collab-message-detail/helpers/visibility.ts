import { MessageCustom, ForceRole } from '@serge/custom-types'
import { CollaborativeMessageStates } from '@serge/config'

export const showTakeOwnership = (message: MessageCustom, _role: ForceRole, _isUmpire = false, _isRFIManager: boolean): boolean => {
  const { collaboration } = message.details
  return (typeof collaboration === 'undefined' || collaboration.status === CollaborativeMessageStates.Unallocated) && _isUmpire
}

export const showSendForReview = (message: MessageCustom, _role: ForceRole, _isUmpire = false, _isRFIManager: boolean): boolean => {
  const { collaboration } = message.details
  return typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.InProgress && _isUmpire && _role.roleId === collaboration.owner?.roleId
}

export const showReject = (message: MessageCustom, _role: ForceRole, _isUmpire = false, _isRFIManager: boolean): boolean => {
  const { collaboration } = message.details
  return _isRFIManager && typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.PendingReview && _isUmpire
}

export const showRelease = (message: MessageCustom, _role: ForceRole, _isUmpire = false, _isRFIManager: boolean): boolean => {
  const { collaboration } = message.details
  return _isRFIManager && typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.PendingReview && _isUmpire
}

export const showSaveDraft = (message: MessageCustom, _role: ForceRole, _isUmpire = false, _isRFIManager: boolean): boolean => {
  const { collaboration } = message.details
  return typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.InProgress && _isUmpire && _role.roleId === collaboration.owner?.roleId
}

export const formEditable = (message: MessageCustom, _role: ForceRole, _isUmpire = false, _isRFIManager: boolean): boolean => {
  const { collaboration } = message.details
  return typeof collaboration !== 'undefined' && collaboration.status === CollaborativeMessageStates.InProgress && _isUmpire && collaboration.owner?.roleId === _role.roleId && _isUmpire
}
