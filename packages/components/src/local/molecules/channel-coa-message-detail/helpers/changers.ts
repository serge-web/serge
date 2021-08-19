import { MessageCustom } from '@serge/custom-types'
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

export const closed = (message: MessageCustom): MessageCustom => {
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

export const endors = (message: MessageCustom): MessageCustom => {
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

export const assign = (message: MessageCustom): MessageCustom => {
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

export const editingSubmit = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.PendingReview,
        owner: undefined
      }
    }
  }
}

export const CRCPassign = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.EditResponse,
        owner: undefined
      }
    }
  }
}

export const CRCPclaim = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.EditResponse,
        owner: undefined
      }
    }
  }
}

export const CRCPsubmit = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.PendingReview,
        owner: undefined
      }
    }
  }
}

export const CRRMClose = (message: MessageCustom): MessageCustom => {
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

export const CRRMResponsePending = (message: MessageCustom): MessageCustom => {
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
