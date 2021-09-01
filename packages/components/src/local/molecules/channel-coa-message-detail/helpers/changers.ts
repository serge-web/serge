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

export const editRequestChanges = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.DocumentPending,
        owner: undefined
      }
    }
  }
}

export const editAssign = (
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
        status: CollaborativeMessageStates.EditDocument,
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

export const responseAssign = (
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
        status: CollaborativeMessageStates.EditResponse,
        owner: owner
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

export const responseRequestChanges = (message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.ResponsePending,
        owner: undefined
      }
    }
  }
}
