import { CollaborativeMessageStates, CollaborativeMessageStates2 } from '@serge/config'
import { ForceRole, MessageCustom } from '@serge/custom-types'
import moment from 'moment'

export interface CoreFunc {
  (_role: ForceRole, verb: string, _message: MessageCustom): MessageCustom
}

export interface SubmitFunc {
  (_role: ForceRole, verb: string, _message: MessageCustom,
    newMsg: { [property: string]: any }, privateMessage: string): MessageCustom
}

export interface ClaimFunc {
  (assignee: ForceRole, roleId: ForceRole, verb: string, _message: MessageCustom): MessageCustom
}

export type ActionHandler = CoreFunc | ClaimFunc | SubmitFunc

export const edit: ClaimFunc = (assignee: ForceRole, _role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.BeingEdited,
        status2: CollaborativeMessageStates2.InProgress,
        owner: assignee
      }
    }
  }
}

export const release: CoreFunc = (_role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
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

export const save: SubmitFunc = (_role: ForceRole, _verb: string, message: MessageCustom,
  newMsg: { [property: string]: any }, privateMessage: string): MessageCustom => {
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
        status: CollaborativeMessageStates.Unallocated,
        status2: CollaborativeMessageStates2.Unallocated,
        owner: undefined
      }
    }
  }
}

export const saveResponse: SubmitFunc = (_role: ForceRole, _verb: string, message: MessageCustom,
  response: { [property: string]: any }, privateMessage: string): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      privateMessage: privateMessage,
      collaboration: {
        ...message.details.collaboration,
        response2: response,
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.Unallocated,
        status2: CollaborativeMessageStates2.Unallocated,
        owner: undefined
      }
    }
  }
}

export const submitResponse: SubmitFunc = (_role: ForceRole, _verb: string, message: MessageCustom,
  response: { [property: string]: any }, privateMessage: string): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      privateMessage: privateMessage,
      collaboration: {
        ...message.details.collaboration,
        response2: response,
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.PendingReview,
        status2: CollaborativeMessageStates2.PendingReview,
        owner: undefined
      }
    }
  }
}

export const submitForReview: SubmitFunc = (_role: ForceRole, _verb: string, message: MessageCustom,
  newMsg: { [property: string]: any }, privateMessage: string): MessageCustom => {
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

export const unclaim: CoreFunc = (_role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.Unallocated,
        owner: undefined
      }
    }
  }
}

export const requestChanges: CoreFunc = (_role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
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

export const approve: CoreFunc = (_role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.PendingReview,
        owner: undefined
      }
    }
  }
}

export const discard: CoreFunc = (_role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
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

export const reopen: CoreFunc = (_role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
  return {
    ...message,
    details: {
      ...message.details,
      collaboration: {
        ...message.details.collaboration,
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.Unallocated,
        status2: CollaborativeMessageStates2.Unallocated,
        owner: undefined
      }
    }
  }
}
