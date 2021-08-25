import { ForceRole, MessageCustom } from '@serge/custom-types'
import { CollaborativeMessageStates } from '@serge/config'

export const finalize = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.Finalized,
        owner: undefined
      }
    }
  }
}

export const close = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.Closed,
        owner: undefined
      }
    }
  }
}

export const requestChanges = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.DocumentPending,
        owner: undefined
      }
    }
  }
}

export const endorse = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.DocumentPending,
        owner: undefined
      }
    }
  }
}

export const collabEditAssign = (
  message: MessageCustom,
  owner: ForceRole
): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.EditDocument,
        owner: owner
      }
    }
  }
}

export const claim = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.EditDocument,
        owner: undefined
      }
    }
  }
}

export const submitForReview = (message: MessageCustom, newMsg: {[property: string]: any}, privateMessage: string): MessageCustom => {
  return {
    ...message,
    message: newMsg,
    details: {
      ...message.details,
      privateMessage: privateMessage,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.PendingReview,
        owner: undefined
      }
    }
  }
}

export const collabResponseAssign = (
  message: MessageCustom,
  owner: ForceRole
): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.EditResponse,
        owner: owner
      }
    }
  }
}

export const CRCPsubmit = (
  message: MessageCustom,
  answer: string,
  privateMessage: string
): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      privateMessage: privateMessage,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.PendingReview,
        response: answer,
        owner: undefined
      }
    }
  }
}

export const CRRMRelease = (message: MessageCustom): MessageCustom => {
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

export const CRRMRequestChanges = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.ResponsePending,
        owner: undefined
      }
    }
  }
}
