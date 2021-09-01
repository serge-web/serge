import { MessageCustom, ForceRole } from '@serge/custom-types'
import { CollaborativeMessageStates } from '@serge/config'

export const takeOwnership = (message: MessageCustom, role: ForceRole): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        status: CollaborativeMessageStates.InProgress,
        owner: role
      }
    }
  }
}

export const sendForReview = (message: MessageCustom, _role: ForceRole, privMessage: string, response: string): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      privateMessage: privMessage,
      collaboration: {
        status: CollaborativeMessageStates.PendingReview,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        response: response,
        owner: _role
      }
    }
  }
}

export const release = (message: MessageCustom, _role: ForceRole): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.Released,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        owner: undefined
      }
    }
  }
}

export const reject = (message: MessageCustom, _role: ForceRole): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.Unallocated,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        owner: undefined
      }
    }
  }
}
export const saveDraft = (message: MessageCustom, _role: ForceRole, privMessage: string, response: string): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      privateMessage: privMessage,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.InProgress,
        lastUpdated: '2020-03-25T15:08:47.540Z',
        response: response,
        owner: _role
      }
    }
  }
}
