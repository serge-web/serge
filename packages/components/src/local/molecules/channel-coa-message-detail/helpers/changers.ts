import { FeedbackItem, ForceRole, MessageCustom } from '@serge/custom-types'
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

export const submitForReview = (
  message: MessageCustom,
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
