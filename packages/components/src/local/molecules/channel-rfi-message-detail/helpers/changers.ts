import { MessageCustom, Role } from '@serge/custom-types'
import { CollaborativeMessageStates } from '@serge/config'

export const takeOwnership = (message: MessageCustom, roleName: Role['name']): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.InProgress,
        owner: roleName
      }
    }
  }
}

export const sendForReview = (message: MessageCustom, _role: Role['name'], privMessage: string, response: string): MessageCustom => {
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

export const release = (message: MessageCustom, _role: Role['name']): MessageCustom => {
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

export const reject = (message: MessageCustom, _role: Role['name']): MessageCustom => {
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
export const saveDraft = (message: MessageCustom, _role: Role['name'], privMessage: string, response: string): MessageCustom => {
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
