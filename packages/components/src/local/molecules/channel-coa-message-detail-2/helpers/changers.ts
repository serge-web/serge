import { ForceRole, MessageCustom } from '@serge/custom-types'
import { CollaborativeMessageStates, CollaborativeMessageStates2 } from '@serge/config'
import moment from 'moment'

export const editFinalise = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.Finalized,
        status2: CollaborativeMessageStates2.Released,
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        owner: undefined
      }
    }
  }
}

export const responseRelease = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.Released,
        status2: CollaborativeMessageStates2.Released,
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
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.Closed,
        status2: CollaborativeMessageStates2.Closed,
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
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.Pending,
        status2: CollaborativeMessageStates2.Unallocated,
        owner: undefined
      }
    }
  }
}

export const assign = (
  message: MessageCustom,
  owner: ForceRole
): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.BeingEdited,
        status2: CollaborativeMessageStates2.InProgress,
        owner: owner
      }
    }
  }
}

export const editSubmit = (message: MessageCustom, newMsg: {[property: string]: any}, privateMessage: string): MessageCustom => {
  return {
    ...message,
    message: {
      ...message.message,
      ...newMsg
    },
    details: {
      ...message.details,
      privateMessage: privateMessage,
      collaboration: {
        ...message.details.collaboration,
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.PendingReview,
        status2: CollaborativeMessageStates2.PendingReview,
        owner: undefined
      }
    }
  }
}

export const responseSubmit = (
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
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.PendingReview,
        status2: CollaborativeMessageStates2.PendingReview,
        response: answer,
        owner: undefined
      }
    }
  }
}
