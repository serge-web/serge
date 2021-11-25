import { CollaborativeMessageStates2 as States, CollaborativePermission as Permission } from '@serge/config'

interface CoreFunc {
  (verb: string): void
}

interface ClaimFunc {
  (role: string, verb: string): void
}

interface Action {
  /** the verb being used */
  readonly verbs: string[]
  readonly handler: CoreFunc | ClaimFunc
}

const edit: CoreFunc = (_verb: string): void => {
  // to be implemented
}

const save: CoreFunc = (_verb: string): void => {
  // to be implemented
}

const release: CoreFunc = (_verb: string): void => {
  // to be implemented
}

const submitForReview: ClaimFunc = (_verb: string): void => {
  // to be implemented
}

const unclaim: ClaimFunc = (_verb: string): void => {
  // to be implemented
}

const requestChanges: CoreFunc = (_verb: string): void => {
  // to be implemented
}

const approve: CoreFunc = (_verb: string): void => {
  // to be implemented
}

const discard: CoreFunc = (_verb: string): void => {
  // to be implemented
}

const reopen: CoreFunc = (_verb: string): void => {
  // to be implemented
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
  actions[States.Unallocated][Permission.CanEdit] = [{ handler: edit, verbs: ['Claim', 'Assign'] }]
  actions[States.InProgress][Permission.CanEdit] = [{ handler: save, verbs: ['Save'] }]
  actions[States.InProgress][Permission.CanSubmitForReview] = [{ handler: submitForReview, verbs: ['Save'] }]
  actions[States.InProgress][Permission.CanRelease] = [{ handler: release, verbs: ['Release'] }]
  actions[States.InProgress][Permission.CanUnClaim] = [{ handler: unclaim, verbs: ['Unclaim'] }]
  actions[States.PendingReview][Permission.CanEdit] = [{ handler: edit, verbs: ['Claim'] }]
  actions[States.PendingReview][Permission.CanApprove] = [{ handler: requestChanges, verbs: requestChangesVerbs }, { handler: approve, verbs: approveVerbs }]
  actions[States.PendingReview][Permission.CanRelease] = [{ handler: release, verbs: releaseVerbs }, { handler: discard, verbs: ['Discard'] }]
  actions[States.Released][Permission.CanRelease] = [{ handler: reopen, verbs: ['Re-open'] }]
  return actions
}

export const actionsFor = (actionTable: ActionTable, state: States, permission: Permission): Action[] => {
  const forState: ActionList = actionTable[state]
  const actions = forState.filter((_element: any, index: number) => index <= permission)
  return actions.flat(2) || []
}
