import { MessageCustom, ForceRole, ChannelData } from '@serge/custom-types'
import { channelDataCollaborativeEditing, channelDataCollaborativeEditingCollaborationParticipant, channelDataCollaborativeResponding, messageDataCollaborativeEditing } from '@serge/mocks'
import { CollaborativeMessageStates, SpecialChannelTypes } from '@serge/config'
import { deepCopy } from '@serge/helpers'
import { ColEditPendingReview, formEditable, userCanSeeCollab } from './visibility'

const whiteUmpire: ForceRole = {
  forceId: 'umpire',
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
const blueLogs: ForceRole = {
  forceId: '-blue-',
  forceName: 'Blue',
  roleId: 'w2aa2',
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
  it('Can see collaborative working', () => {
    const channelWithRoles: ChannelData = {
      collabOptions: {
        extraColumns: [],
        mode: 'edit',
        returnVerbs: ['Endorse', 'Request Changes'],
        startWithReview: true
      },
      format: SpecialChannelTypes.CHANNEL_COLLAB_EDIT,
      name: 'New CE',
      participants: [
        {
          canCollaborate: false,
          canReleaseMessages: false,
          force: 'Red',
          forceUniqid: '-red-',
          roles: ['w2aa2'],
          subscriptionId: 'oq1j',
          templates: [
            { title: 'RFI', _id: 'k16eedkj' }
          ]
        },
        {
          canCollaborate: true,
          canReleaseMessages: false,
          force: 'Blue',
          forceUniqid: '-blue-',
          roles: ['w2aa2'],
          subscriptionId: 'oqoj',
          templates: [
            { title: 'RFI', _id: 'k16eedkj' }
          ]
        }
      ],
      uniqid: 'ks8soryj'
    }

    // white user in collab channel without collab rights
    expect(userCanSeeCollab(channelDataCollaborativeEditing, whiteUmpire)).toBeFalsy()
    // blue user in collab channel without participation
    expect(userCanSeeCollab(channelDataCollaborativeEditing, blueLogs)).toBeFalsy()

    // white user in collab channel with collab rights
    expect(userCanSeeCollab(channelDataCollaborativeEditingCollaborationParticipant, whiteUmpire)).toBeTruthy()

    // now channel with discrete roles
    // white user in collab channel
    expect(userCanSeeCollab(channelWithRoles, whiteUmpire)).toBeFalsy()
    // blue user in collab channel
    expect(userCanSeeCollab(channelWithRoles, blueLogs)).toBeTruthy()
  })

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
