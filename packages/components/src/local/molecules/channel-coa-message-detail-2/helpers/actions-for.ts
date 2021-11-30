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

type ActionList = Array<Action>
export type ActionTable = Array<Array<ActionList>>

export const createActionTable = (approveVerbs: string[], requestChangesVerbs: string[], releaseVerbs: string[]): ActionTable => {
  // whole structure
  const actions: ActionTable = []

  // now one array per states
  actions[States.Unallocated] = []
  actions[States.InProgress] = []
  actions[States.PendingReview] = []
  actions[States.Released] = []
  actions[States.Closed] = []

  // finally populate handlers
  actions[States.Unallocated][Permission.CanEdit] = [{ handler: handlers.edit, verbs: [ASSIGN_MESSAGE, CLAIM_MESSAGE] }]
  actions[States.InProgress][Permission.CanEdit] = [{ handler: handlers.save, verbs: ['Save'] }]
  actions[States.InProgress][Permission.CanSubmitForReview] = [{ handler: handlers.submitForReview, verbs: ['Submit for review'] }]
  actions[States.InProgress][Permission.CanRelease] = [{ handler: handlers.release, verbs: releaseVerbs }]
  actions[States.InProgress][Permission.CanUnClaim] = [{ handler: handlers.unclaim, feedback: true, verbs: ['Unclaim'] }]
  actions[States.PendingReview][Permission.CanEdit] = [{ handler: handlers.edit, verbs: ['Claim'] }]
  actions[States.PendingReview][Permission.CanApprove] = [{ handler: handlers.requestChanges, feedback: true, verbs: requestChangesVerbs }, { handler: handlers.approve, verbs: approveVerbs }]
  actions[States.PendingReview][Permission.CanRelease] = [{ handler: handlers.release, verbs: releaseVerbs }, { handler: handlers.discard, feedback: true, verbs: ['Discard'] }]
  actions[States.Released][Permission.CanRelease] = [{ handler: handlers.reopen, feedback: true, verbs: ['Re-open'] }]
  actions[States.Closed][Permission.CanRelease] = [{ handler: handlers.reopen, feedback: true, verbs: ['Re-open'] }]
  return actions
}

export const actionsFor = (actionTable: ActionTable, state: States, permission: Permission): Action[] => {
  const forState: ActionList = actionTable[state]
  const actions = forState.filter((_element: any, index: number) => index <= permission)
  return actions.flat()
}
