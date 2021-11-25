import { CollaborativePermission as Permission, CollaborativeMessageStates2 as States } from '@serge/config'
import { createActionTable, actionsFor, ActionTable } from './actions-for'

describe('Action table & actions', () => {
  it('Table generation', () => {
    const table: ActionTable = createActionTable(['Approve1'], ['Request1', 'Endorse1'], ['Finalise'])
    expect(table[States.Unallocated]).toBeTruthy()
    expect(table[States.Unallocated].length).toEqual(2) // we have handler in second slot
    expect(table[States.Unallocated][0]).toBeFalsy() // empty first slot
    expect(table[States.Unallocated][1]).toBeTruthy() // populated second slot
    expect(table[States.Unallocated][1].length).toEqual(1) // just one handler
    expect(table[States.Unallocated][1][0].handler).toBeTruthy() // populated second slot
    expect(table[States.Unallocated][1][0].verbs.length).toEqual(2) // just one verb
  })

  it('Retrieve actions', () => {
    const table: ActionTable = createActionTable(['Approve1'], ['Request1', 'Endorse1'], ['Finalise'])
    // initial state
    const canSaveBeingEdited = actionsFor(table, States.InProgress, Permission.CanEdit)
    expect(canSaveBeingEdited).toBeTruthy()
    expect(canSaveBeingEdited.length).toEqual(1)
    expect(canSaveBeingEdited[0].verbs.length).toEqual(1)
    expect(canSaveBeingEdited[0].verbs[0]).toEqual('Save')
    expect(canSaveBeingEdited[0].handler).toBeTruthy()
    const releaseBeingEdited = actionsFor(table, States.InProgress, Permission.CanEdit)
    expect(releaseBeingEdited).toEqual(canSaveBeingEdited)

    const canEditWithFinalised = actionsFor(table, States.Released, Permission.CanEdit)
    expect(canEditWithFinalised.length).toEqual(0) // doesn't have permission to do anything

    const canReleaseWithFinalised = actionsFor(table, States.Released, Permission.CanRelease)
    expect(canReleaseWithFinalised.length).toEqual(1) // doesn't have permission to do anything

    const canReleaseWithPending = actionsFor(table, States.PendingReview, Permission.CanApprove)
    expect(canReleaseWithPending.length).toEqual(3) // could be approve, request changes or claim
  })
})
