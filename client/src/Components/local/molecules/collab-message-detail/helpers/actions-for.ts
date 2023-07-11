import { CollaborativeMessageStates as States, CollaborativePermission as Permission } from 'src/config'
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
  const saveHandler = isResponse ? handlers.saveResponse : handlers.save
  const saveAndReleaseHandler = isResponse ? handlers.saveResponseAndRelease : handlers.saveEditAndRelease

  // finally populate handlers
  actions[States.Unallocated][Permission.CanEdit] = [{ handler: handlers.edit, verbs: [ASSIGN_MESSAGE, 'Claim'] }]
  actions[States.InProgress][Permission.CanEdit] = [{ handler: saveHandler, verbs: ['Save'] }]
  actions[States.InProgress][Permission.CanSubmitForReview] = [{ handler: submitHandler, verbs: ['Submit for review'] }]
  actions[States.InProgress][Permission.CanRelease] = [{ handler: saveAndReleaseHandler, verbs: releaseVerbs }, { handler: handlers.discard, feedback: true, verbs: ['Discard'] }]
  actions[States.InProgress][Permission.CanUnClaim] = [{ handler: handlers.unclaim, feedback: true, verbs: ['Unclaim'] }]
  actions[States.PendingReview][Permission.CanEdit] = [{ handler: handlers.edit, verbs: ['Claim'] }]
  actions[States.PendingReview][Permission.CanApprove] = [{ handler: handlers.requestChanges, feedback: true, verbs: requestChangesVerbs }, { handler: handlers.approve, verbs: approveVerbs }]
  actions[States.PendingReview][Permission.CanRelease] = [{ handler: handlers.release, verbs: releaseVerbs }, { handler: handlers.discard, feedback: true, verbs: ['Discard'] }]
  actions[States.Released][Permission.CanRelease] = [{ handler: handlers.reopen, feedback: true, verbs: ['Re-open'] }]
  actions[States.Closed][Permission.CanRelease] = [{ handler: handlers.reopen, feedback: true, verbs: ['Re-open'] }]
  return actions
}

export const actionsFor = (actionTable: ActionTable, state: States, permission: Permission, isOwner?: boolean): Action[] => {
  const forState: ActionList = actionTable[state]
  if (state === States.InProgress) {
    // special handling. We only offer save/submit if it's the owner
    if (isOwner) {
      const actions = forState.filter((_element: any, index: number) => index <= permission)
      return actions.flat()
    } else if (permission === Permission.CanUnClaim) {
      const actions = forState.filter((_element: any, index: number) => index === Permission.CanUnClaim)
      return actions.flat()
    } else {
      return []
    }
  } else {
    const actions = forState.filter((_element: any, index: number) => index <= permission)
    return actions.flat()
  }
}
