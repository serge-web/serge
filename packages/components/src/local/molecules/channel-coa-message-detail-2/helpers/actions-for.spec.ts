import { CollaborativePermission as Permission, CollaborativeMessageStates2 as States } from '@serge/config'
import { createActionTable, actionsFor, ActionTable } from './actions-for'

describe('Changer tests', () => {
  it('simple state changes', () => {
    const table: ActionTable = createActionTable(['Approve1'], ['Request1', 'Endorse1'], ['Finalise'])
    expect(table).toBeTruthy()
    // initial state
    const saveBeingEdited = actionsFor(table, States.InProgress, Permission.CanEdit)
    expect(saveBeingEdited).toBeTruthy()
    expect(saveBeingEdited.length).toEqual(1)
    expect(saveBeingEdited[0].verbs.length).toEqual(1)
    expect(saveBeingEdited[0].handler).toBeTruthy()
    console.log(saveBeingEdited)
  })
})
