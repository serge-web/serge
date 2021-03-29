import { MessageCustom, Role } from '@serge/custom-types'
import { CollaborativeMessageStates } from '@serge/config'

export const takeOwnership = (message: MessageCustom, role: Role['name'], _isUmpire = false): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        status: CollaborativeMessageStates.InProgress,
        owner: role
      }
    }
  }
}

export const sendForReview = (message: MessageCustom, _role: Role['name'], _isUmpire = false): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        status: CollaborativeMessageStates.PendingReview
        // todo add question field
      }
    }
  }
}

export const release = (message: MessageCustom, _role: Role['name'], _isUmpire = false, response: string): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.Released,
        response
      }
    }
  }
}

export const reject = (message: MessageCustom, _role: Role['name'], _isUmpire = false, response: string): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.Unallocated,
        response
      }
    }
  }
}
export const saveDraft = (message: MessageCustom, _role: Role['name'], _isUmpire = false): MessageCustom => {
  return message
}
