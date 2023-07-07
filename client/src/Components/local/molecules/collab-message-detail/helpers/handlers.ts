import { CollaborativeMessageStates } from '@serge/config'
import { ForceRole, MessageCustom } from 'src/custom-types'
import newDate from '@serge/helpers/build/new-date'

export const CORE_HANDLER = 'CORE_HANDLER'
export const SUBMIT_HANDLER = 'SUBMIT_HANDLER'
export const CLAIM_HANDLER = 'CLAIM_HANDLER'

/** functions that just change the state of the message */
export interface CoreFunc {
  (_role: ForceRole, verb: string, _message: MessageCustom): MessageCustom
}

/** functions that represent storing the current editor */
export interface SubmitFunc {
    (_role: ForceRole, verb: string, _message: MessageCustom,
      newMsg: { [property: string]: any }, privateMessage: string): MessageCustom
}

/** functions where someone is taking (or being given) ownership of a message */
export interface ClaimFunc {
  (assignee: ForceRole, roleId: ForceRole, verb: string, _message: MessageCustom): MessageCustom
}

export interface CoreHandler {
  handlerType: typeof CORE_HANDLER
  handler: CoreFunc
}

export interface SubmitHandler {
  handlerType: typeof SUBMIT_HANDLER
  handler: SubmitFunc
}

export interface ClaimHandler {
  handlerType: typeof CLAIM_HANDLER
  handler: ClaimFunc
}

export type ActionHandler = CoreHandler | ClaimHandler | SubmitHandler

export const edit: ClaimHandler = {
  handlerType: CLAIM_HANDLER,
  handler:
    (assignee: ForceRole, _role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
      return {
        ...message,
        details: {
          ...message.details,
          collaboration: {
            ...message.details.collaboration,
            lastUpdated: newDate(),
            status: CollaborativeMessageStates.InProgress,
            owner: assignee
          }
        }
      }
    }
}

export const release: CoreHandler = {
  handlerType: CORE_HANDLER,
  handler: (_role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
    return {
      ...message,
      details: {
        ...message.details,
        collaboration: {
          ...message.details.collaboration,
          status: CollaborativeMessageStates.Released,
          lastUpdated: newDate(),
          owner: undefined
        }
      }
    }
  }
}

export const saveEditAndRelease: SubmitHandler = {
  handlerType: SUBMIT_HANDLER,
  handler: (_role: ForceRole, _verb: string, message: MessageCustom,
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
          lastUpdated: newDate(),
          status: CollaborativeMessageStates.Released,
          owner: undefined
        }
      }
    }
  }
}

export const save: SubmitHandler = {
  handlerType: SUBMIT_HANDLER,
  handler: (_role: ForceRole, _verb: string, message: MessageCustom,
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
          lastUpdated: newDate(),
          status: CollaborativeMessageStates.Unallocated,
          owner: undefined
        }
      }
    }
  }
}

export const saveResponseAndRelease: SubmitHandler = {
  handlerType: SUBMIT_HANDLER,
  handler: (_role: ForceRole, _verb: string, message: MessageCustom,
    response: { [property: string]: any }, privateMessage: string): MessageCustom => {
    return {
      ...message,
      details: {
        ...message.details,
        privateMessage: privateMessage,
        collaboration: {
          ...message.details.collaboration,
          response: response,
          lastUpdated: newDate(),
          status: CollaborativeMessageStates.Released,
          owner: undefined
        }
      }
    }
  }
}

export const saveResponse: SubmitHandler = {
  handlerType: SUBMIT_HANDLER,
  handler: (_role: ForceRole, _verb: string, message: MessageCustom,
    response: { [property: string]: any }, privateMessage: string): MessageCustom => {
    return {
      ...message,
      details: {
        ...message.details,
        privateMessage: privateMessage,
        collaboration: {
          ...message.details.collaboration,
          response: response,
          lastUpdated: newDate(),
          status: CollaborativeMessageStates.Unallocated,
          owner: undefined
        }
      }
    }
  }
}

export const submitResponse: SubmitHandler = {
  handlerType: SUBMIT_HANDLER,
  handler: (_role: ForceRole, _verb: string, message: MessageCustom,
    response: { [property: string]: any }, privateMessage: string): MessageCustom => {
    return {
      ...message,
      details: {
        ...message.details,
        privateMessage: privateMessage,
        collaboration: {
          ...message.details.collaboration,
          response: response,
          lastUpdated: newDate(),
          status: CollaborativeMessageStates.PendingReview,
          owner: undefined
        }
      }
    }
  }
}

export const submitForReview: SubmitHandler = {
  handlerType: SUBMIT_HANDLER,
  handler: (_role: ForceRole, _verb: string, message: MessageCustom,
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
          lastUpdated: newDate(),
          status: CollaborativeMessageStates.PendingReview,
          owner: undefined
        }
      }
    }
  }
}

export const unclaim: CoreHandler = {
  handlerType: CORE_HANDLER,
  handler: (_role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
    return {
      ...message,
      details: {
        ...message.details,
        collaboration: {
          ...message.details.collaboration,
          lastUpdated: newDate(),
          status: CollaborativeMessageStates.Unallocated,
          owner: undefined
        }
      }
    }
  }
}

export const requestChanges: CoreHandler = {
  handlerType: CORE_HANDLER,
  handler: (_role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
    return {
      ...message,
      details: {
        ...message.details,
        collaboration: {
          ...message.details.collaboration,
          lastUpdated: newDate(),
          status: CollaborativeMessageStates.Unallocated,
          owner: undefined
        }
      }
    }
  }
}

export const approve: CoreHandler = {
  handlerType: CORE_HANDLER,
  handler: (_role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
    return {
      ...message,
      details: {
        ...message.details,
        collaboration: {
          ...message.details.collaboration,
          lastUpdated: newDate(),
          status: CollaborativeMessageStates.PendingReview,
          owner: undefined
        }
      }
    }
  }
}

export const discard: CoreHandler = {
  handlerType: CORE_HANDLER,
  handler: (_role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
    return {
      ...message,
      details: {
        ...message.details,
        collaboration: {
          ...message.details.collaboration,
          lastUpdated: newDate(),
          status: CollaborativeMessageStates.Closed,
          owner: undefined
        }
      }
    }
  }
}

export const reopen: CoreHandler = {
  handlerType: CORE_HANDLER,
  handler: (_role: ForceRole, _verb: string, message: MessageCustom): MessageCustom => {
    return {
      ...message,
      details: {
        ...message.details,
        collaboration: {
          ...message.details.collaboration,
          lastUpdated: newDate(),
          status: CollaborativeMessageStates.Unallocated,
          owner: undefined
        }
      }
    }
  }
}
