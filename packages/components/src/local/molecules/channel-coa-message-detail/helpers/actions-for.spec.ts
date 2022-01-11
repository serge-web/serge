import { CollaborativePermission as Permission, CollaborativeMessageStates as States } from '@serge/config'
import { createActionTable, actionsFor, ActionTable } from './actions-for'

describe('Action table & actions', () => {
  it('Table generation', () => {
    const table: ActionTable = createActionTable(['Approve1'], ['Request1', 'Endorse1'], ['Finalise'], true)
    expect(table[States.Unallocated]).toBeTruthy()
    expect(table[States.Unallocated].length).toEqual(2) // we have handler in second slot
    expect(table[States.Unallocated][0]).toBeFalsy() // empty first slot
    expect(table[States.Unallocated][1]).toBeTruthy() // populated second slot
    expect(table[States.Unallocated][1].length).toEqual(1) // just one handler
    expect(table[States.Unallocated][1][0].handler).toBeTruthy() // populated second slot
    expect(table[States.Unallocated][1][0].verbs.length).toEqual(2) // just one verb
  })

  it('Retrieve actions', () => {
    const table: ActionTable = createActionTable(['Approve1'], ['Request1', 'Endorse1'], ['Finalise'], true)
    // initial state
    const isOwner = true
    const notOwner = false
    const ownerCanSaveBeingEdited = actionsFor(table, States.InProgress, Permission.CanEdit, isOwner)
    expect(ownerCanSaveBeingEdited).toBeTruthy()
    expect(ownerCanSaveBeingEdited.length).toEqual(1)
    expect(ownerCanSaveBeingEdited[0].verbs.length).toEqual(1)
    expect(ownerCanSaveBeingEdited[0].verbs[0]).toEqual('Save')
    expect(ownerCanSaveBeingEdited[0].handler).toBeTruthy()

    const ownerUnClaimBeingEdited = actionsFor(table, States.InProgress, Permission.CanUnClaim, isOwner)
    expect(ownerUnClaimBeingEdited).toBeTruthy()
    expect(ownerUnClaimBeingEdited.length).toEqual(5)
    expect(ownerUnClaimBeingEdited[0].verbs.length).toEqual(1)
    expect(ownerUnClaimBeingEdited[0].verbs[0]).toEqual('Save')
    expect(ownerUnClaimBeingEdited[3].verbs[0]).toEqual('Discard')
    expect(ownerUnClaimBeingEdited[4].verbs[0]).toEqual('Unclaim')
    expect(ownerUnClaimBeingEdited[0].handler).toBeTruthy()

    const notOwnerCannotSaveBeingEdited = actionsFor(table, States.InProgress, Permission.CanEdit, notOwner)
    expect(notOwnerCannotSaveBeingEdited).toBeTruthy()
    expect(notOwnerCannotSaveBeingEdited.length).toEqual(0)

    const notOwnerCanUnclaim = actionsFor(table, States.InProgress, Permission.CanUnClaim, notOwner)
    expect(notOwnerCanUnclaim).toBeTruthy()
    expect(notOwnerCanUnclaim.length).toEqual(1)

    const releaseBeingEdited = actionsFor(table, States.InProgress, Permission.CanEdit, isOwner)
    expect(releaseBeingEdited).toEqual(ownerCanSaveBeingEdited)

    const canEditWithFinalised = actionsFor(table, States.Released, Permission.CanEdit, isOwner)
    expect(canEditWithFinalised.length).toEqual(0) // doesn't have permission to do anything

    const canReleaseWithFinalised = actionsFor(table, States.Released, Permission.CanRelease, isOwner)
    expect(canReleaseWithFinalised.length).toEqual(1) // doesn't have permission to do anything

    const canReleaseWithPending = actionsFor(table, States.PendingReview, Permission.CanApprove, isOwner)
    expect(canReleaseWithPending.length).toEqual(3) // could be approve, request changes or claim
  })
})
