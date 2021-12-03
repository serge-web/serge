import { CollaborativeMessageStates2 as States, CollaborativePermission as Permission } from '@serge/config'
import * as handlers from './handlers'

export interface Action {
  /** the verb being used */
  readonly verbs: string[]
  /** if this action requires feedback */
  readonly feedback?: boolean
  /** the handler for this action */
  readonly handler: handlers.ActionHandler
}

export const ASSIGN_MESSAGE = 'Assign'
export const CLAIM_MESSAGE = 'Claim'
export const SAVE_MESSAGE = 'Save'
export const SUBMIT_FOR_REVIEW = 'Submit for review'

type ActionList = Array<Action>
export type ActionTable = Array<Array<ActionList>>

export const createActionTable = (approveVerbs: string[], requestChangesVerbs: string[], releaseVerbs: string[], isResponse: boolean): ActionTable => {
  // whole structure
  const actions: ActionTable = []

  // now one array per states
  actions[States.Unallocated] = []
  actions[States.InProgress] = []
  actions[States.PendingReview] = []
  actions[States.Released] = []
  actions[States.Closed] = []

  const submitHandler = isResponse ? handlers.submitResponse : handlers.submitForReview
  const saveHandler = isResponse ? handlers.saveResponse : handlers.submitResponse

  // finally populate handlers
  actions[States.Unallocated][Permission.CanEdit] = [{ handler: handlers.edit, verbs: [ASSIGN_MESSAGE, CLAIM_MESSAGE] }]
  actions[States.InProgress][Permission.CanEdit] = [{ handler: saveHandler, verbs: [SAVE_MESSAGE] }]
  actions[States.InProgress][Permission.CanSubmitForReview] = [{ handler: submitHandler, verbs: [SUBMIT_FOR_REVIEW] }]
  actions[States.InProgress][Permission.CanRelease] = [{ handler: handlers.release, verbs: releaseVerbs }]
  actions[States.InProgress][Permission.CanUnClaim] = [{ handler: handlers.unclaim, feedback: true, verbs: ['Unclaim'] }]
  actions[States.PendingReview][Permission.CanEdit] = [{ handler: handlers.edit, verbs: ['Claim'] }]
  actions[States.PendingReview][Permission.CanApprove] = [{ handler: handlers.requestChanges, feedback: true, verbs: requestChangesVerbs }, { handler: handlers.approve, verbs: approveVerbs }]
  actions[States.PendingReview][Permission.CanRelease] = [{ handler: handlers.release, verbs: releaseVerbs }, { handler: handlers.discard, feedback: true, verbs: ['Discard'] }]
  actions[States.Released][Permission.CanRelease] = [{ handler: handlers.reopen, feedback: true, verbs: ['Re-open'] }]
  actions[States.Closed][Permission.CanRelease] = [{ handler: handlers.reopen, feedback: true, verbs: ['Re-open'] }]
  return actions
}

/** utility function to get permission value from the string representation of a permission */
const permissionFor = (permission: Readonly<string>): Permission => {
  switch (permission) {
    case 'CannotCollaborate':
      return Permission.CannotCollaborate
    case 'CanEdit':
      return Permission.CanEdit
    case 'CanSubmitForReview':
      return Permission.CanSubmitForReview
    case 'CanApprove':
      return Permission.CanApprove
    case 'CanRelease':
      return Permission.CanRelease
    case 'CanUnClaim':
      return Permission.CanUnClaim
    default: {
      console.error('Failed to match permission string for', permission)
      return Permission.CannotCollaborate
    }
  }
}

export const actionsFor = (actionTable: ActionTable, state: States, permission: Permission): Action[] => {
  const forState: ActionList = actionTable[state]
  // the permission parameter may be the string representation of the permission - since that's more legible
  // when viewing the JSON for a saved channel
  // note: the '+1' in the following line needed to be added when we moved from StoryBook to Serge
  const correctedPermission = typeof(permission) === 'string' ? permissionFor(permission) + 1 : permission
  const actions = forState.filter((_element: any, index: number) => index <= correctedPermission)
  return actions.flat()
}
