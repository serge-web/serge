import { ForceRole, MessageCustom } from '@serge/custom-types'
import { CollaborativeMessageStates } from '@serge/config'
import moment from 'moment'

export const editFinalise = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        status: CollaborativeMessageStates.Finalized,
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
        response: answer,
        owner: undefined
      }
    }
  }
}