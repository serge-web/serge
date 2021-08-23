import { FeedbackItem, MessageCustom } from '@serge/custom-types'
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

const processMessageFeedback = (message: MessageCustom): FeedbackItem[] => {
  const feedback = message.message.feedback
  const collaboration = message.details.collaboration
  if (feedback) {
    if (collaboration) {
      const feedbackItems = collaboration.feedback || []
      feedbackItems.push(feedback)
      return feedbackItems
    } else {
      return [feedback]
    }
  }

  return []
}

export const requestChanges = (message: MessageCustom): MessageCustom => {
  const feedback = processMessageFeedback(message)

  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.DocumentPending,
        owner: undefined,
        feedback
      }
    }
  }
}

export const endorse = (message: MessageCustom): MessageCustom => {
  const feedback = processMessageFeedback(message)

  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.DocumentPending,
        owner: undefined,
        feedback
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

export const submitForReview = (message: MessageCustom): MessageCustom => {
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
