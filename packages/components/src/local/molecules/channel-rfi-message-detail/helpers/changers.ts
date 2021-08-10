import { MessageCustom, ForceRole } from '@serge/custom-types'
import { CollaborativeMessageStates } from '@serge/config'

export const takeOwnership = (message: MessageCustom, role: ForceRole): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
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
        response: response,
        owner: _role
      }
    }
  }
}
