import { CollaborativeMessageStates2 as States, CollaborativePermission as Permission } from '@serge/config'
import * as handlers from './handlers'

export interface Action {
  /** the verb being used */
  readonly verbs: string[]
  /** the handler for this action */
  readonly handler: handlers.CoreFunc | handlers.ClaimFunc
}

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
  actions[States.Unallocated][Permission.CanEdit] = [{ handler: handlers.edit, verbs: ['Assign', 'Claim'] }]
  actions[States.InProgress][Permission.CanEdit] = [{ handler: handlers.save, verbs: ['Save'] }]
  actions[States.InProgress][Permission.CanSubmitForReview] = [{ handler: handlers.submitForReview, verbs: ['Save'] }]
  actions[States.InProgress][Permission.CanRelease] = [{ handler: handlers.release, verbs: ['Release'] }]
  actions[States.InProgress][Permission.CanUnClaim] = [{ handler: handlers.unclaim, verbs: ['Unclaim'] }]
  actions[States.PendingReview][Permission.CanEdit] = [{ handler: handlers.edit, verbs: ['Claim'] }]
  actions[States.PendingReview][Permission.CanApprove] = [{ handler: handlers.requestChanges, verbs: requestChangesVerbs }, { handler: handlers.approve, verbs: approveVerbs }]
  actions[States.PendingReview][Permission.CanRelease] = [{ handler: handlers.release, verbs: releaseVerbs }, { handler: handlers.discard, verbs: ['Discard'] }]
  actions[States.Released][Permission.CanRelease] = [{ handler: handlers.reopen, verbs: ['Re-open'] }]
  actions[States.Closed][Permission.CanRelease] = [{ handler: handlers.reopen, verbs: ['Re-open'] }]
  return actions
}

export const actionsFor = (actionTable: ActionTable, state: States, permission: Permission): Action[] => {
  const forState: ActionList = actionTable[state]
  const actions = forState.filter((_element: any, index: number) => index <= permission)
  return actions.flat()
}
