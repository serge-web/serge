import { MessageCustom, ForceRole } from '@serge/custom-types'
import { channelDataCollaborativeEditing, channelDataCollaborativeResponding, messageDataCollaborativeEditing } from '@serge/mocks'
import { CollaborativeMessageStates } from '@serge/config'
import { deepCopy } from '@serge/helpers'
import { ColEditPendingReview, formEditable } from './visibility'

const whiteUmpire: ForceRole = {
  forceId: 'white',
  forceName: 'White',
  roleId: 'w3254',
  roleName: 'umpire'
}
const whiteLogs: ForceRole = {
  forceId: 'white',
  forceName: 'White',
  roleId: 'w2222',
  roleName: 'logs'
}
const message: MessageCustom = messageDataCollaborativeEditing[0]

const coaChannel = channelDataCollaborativeEditing
const rfiChannel = channelDataCollaborativeResponding

const messageEmptyCollab = deepCopy(message)
messageEmptyCollab.details.collaboration = undefined

const messageOwnedByUmpire = deepCopy(message)
messageOwnedByUmpire.details.collaboration = {
  status: CollaborativeMessageStates.PendingReview,
  owner: whiteUmpire
}

const canReleaseMessages = true
const cannotReleaseMessages = false

const messageStates: CollaborativeMessageStates[] = [
  CollaborativeMessageStates.Unallocated,
  CollaborativeMessageStates.InProgress,
  CollaborativeMessageStates.PendingReview,
  CollaborativeMessageStates.Released,
  CollaborativeMessageStates.Rejected,
  CollaborativeMessageStates.Finalized,
  CollaborativeMessageStates.Closed,
  CollaborativeMessageStates.DocumentPending,
  CollaborativeMessageStates.EditDocument,
  CollaborativeMessageStates.EditResponse,
  CollaborativeMessageStates.ResponsePending
]

console.log(canReleaseMessages && cannotReleaseMessages && rfiChannel)

describe('Visibility tests', () => {
  it('Not editable', () => {
    // start off with empty collab
    expect(messageEmptyCollab.details.collaboration).toBeUndefined()
    // shouldn't be editable
    expect(formEditable(messageEmptyCollab, whiteUmpire)).toEqual(false)
  })
  it('Editable correct state', () => {
    // check only `InProgress` is editable
    const collabStatus = messageOwnedByUmpire.details.collaboration
    expect(collabStatus).toBeTruthy()
    if (collabStatus) {
      // first the non-editable states
      const nonProgressStates = messageStates.filter((state) => state !== CollaborativeMessageStates.InProgress)
      nonProgressStates.forEach(state => {
        collabStatus.status = state
        expect(formEditable(messageOwnedByUmpire, whiteUmpire)).toEqual(false)
      })

      // now the in progress one
      collabStatus.status = CollaborativeMessageStates.InProgress
      expect(formEditable(messageOwnedByUmpire, whiteUmpire)).toEqual(true)
    }
  })
  it('Editable by correct role', () => {
    const collabStatus = messageOwnedByUmpire.details.collaboration
    expect(collabStatus).toBeTruthy()
    if (collabStatus) {
      collabStatus.status = CollaborativeMessageStates.InProgress
      // owner not current role
      collabStatus.owner = whiteLogs
      expect(formEditable(messageOwnedByUmpire, whiteUmpire)).toEqual(false)

      collabStatus.owner = whiteUmpire
      expect(formEditable(messageOwnedByUmpire, whiteUmpire)).toEqual(true)
    }
  })
  it('collab edit review stage ', () => {
    const message = deepCopy(messageOwnedByUmpire)
    const collabStatus = message.details.collaboration
    expect(collabStatus).toBeTruthy()
    if (collabStatus) {
      // in wrong state
      expect(collabStatus.status).toEqual(CollaborativeMessageStates.InProgress)
      expect(ColEditPendingReview(message, coaChannel, canReleaseMessages)).toBeFalsy()

      // user doesn't have permission
      expect(ColEditPendingReview(message, coaChannel, cannotReleaseMessages)).toBeFalsy()

      // make correct status
      collabStatus.status = CollaborativeMessageStates.PendingReview
      expect(ColEditPendingReview(message, coaChannel, canReleaseMessages)).toBeTruthy()
    }
  })
})
