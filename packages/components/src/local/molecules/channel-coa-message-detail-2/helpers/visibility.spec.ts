import { MessageCustom, ForceRole, ChannelData } from '@serge/custom-types'
import { channelCollaborativeEditing, channelCollaborativeResponding, messageDataCollaborativeEditing } from '@serge/mocks'
import { CollaborativeMessageStates, SpecialChannelTypes } from '@serge/config'
import { deepCopy } from '@serge/helpers'
import { ColDocumentBeingEditedByOther, ColEditPendingReview, ColRespPendingReview, formEditable, userCanSeeCollab } from './visibility'

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

const coaChannel = channelCollaborativeEditing
const rfiChannel = channelCollaborativeResponding

const messageEmptyCollab = deepCopy(message)
messageEmptyCollab.details.collaboration = undefined

const messageOwnedByUmpire = deepCopy(message)
messageOwnedByUmpire.details.collaboration = {
  lastUpdated: '2020-03-25T15:08:47.540Z',
  status: CollaborativeMessageStates.PendingReview,
  owner: whiteUmpire
}

const canReleaseMessages = true
const cannotReleaseMessages = false

const canUnClaimMessages = true
const cannotUnClaimMessages = false

const messageStates: CollaborativeMessageStates[] = [
  CollaborativeMessageStates.Unallocated,
  CollaborativeMessageStates.PendingReview,
  CollaborativeMessageStates.Released,
  CollaborativeMessageStates.Finalized,
  CollaborativeMessageStates.Closed,
  CollaborativeMessageStates.Pending,
  CollaborativeMessageStates.BeingEdited,
  CollaborativeMessageStates.BeingEdited,
  CollaborativeMessageStates.Pending
]

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
    expect(userCanSeeCollab(coaChannel, whiteUmpire)).toBeFalsy()
    // blue user in collab channel without participation
    expect(userCanSeeCollab(coaChannel, blueLogs)).toBeFalsy()

    // white user in collab channel with collab rights
    expect(userCanSeeCollab(rfiChannel, whiteUmpire)).toBeTruthy()

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
      const nonProgressStates = messageStates.filter((state) => state !== CollaborativeMessageStates.BeingEdited)
      const nonProgressStates2 = nonProgressStates.filter((state) => state !== CollaborativeMessageStates.BeingEdited)
      nonProgressStates2.forEach(state => {
        collabStatus.status = state
        expect(formEditable(messageOwnedByUmpire, whiteUmpire)).toEqual(false)
      })

      // now the in progress one
      collabStatus.status = CollaborativeMessageStates.BeingEdited
      expect(formEditable(messageOwnedByUmpire, whiteUmpire)).toEqual(true)
    }
  })
  it('Editable by correct role', () => {
    const collabStatus = messageOwnedByUmpire.details.collaboration
    expect(collabStatus).toBeTruthy()
    if (collabStatus) {
      collabStatus.status = CollaborativeMessageStates.BeingEdited
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
      collabStatus.status = CollaborativeMessageStates.BeingEdited
      // in wrong state
      expect(collabStatus.status).toEqual(CollaborativeMessageStates.BeingEdited)
      expect(ColEditPendingReview(message, coaChannel, canReleaseMessages)).toBeFalsy()

      // user doesn't have permission
      expect(ColEditPendingReview(message, coaChannel, cannotReleaseMessages)).toBeFalsy()

      // make correct status
      collabStatus.status = CollaborativeMessageStates.PendingReview
      expect(ColEditPendingReview(message, coaChannel, canReleaseMessages)).toBeTruthy()
    }
  })
  it('collab response review stage ', () => {
    const message = deepCopy(messageOwnedByUmpire)
    const collabStatus = message.details.collaboration
    expect(collabStatus).toBeTruthy()
    if (collabStatus) {
      collabStatus.status = CollaborativeMessageStates.BeingEdited
      // in wrong state
      expect(collabStatus.status).toEqual(CollaborativeMessageStates.BeingEdited)
      expect(ColRespPendingReview(message, rfiChannel, canReleaseMessages)).toBeFalsy()

      // user doesn't have permission
      expect(ColRespPendingReview(message, rfiChannel, cannotReleaseMessages)).toBeFalsy()

      // make correct status
      collabStatus.status = CollaborativeMessageStates.PendingReview
      expect(ColRespPendingReview(message, rfiChannel, canReleaseMessages)).toBeTruthy()
    }
  })
  it('collab unclaim ', () => {
    const message = deepCopy(messageOwnedByUmpire)
    const collabStatus = message.details.collaboration
    expect(collabStatus).toBeTruthy()
    if (collabStatus) {
      collabStatus.status = CollaborativeMessageStates.Finalized
      // in wrong state
      expect(collabStatus.status).toEqual(CollaborativeMessageStates.Finalized)
      expect(ColDocumentBeingEditedByOther(message, canUnClaimMessages)).toBeFalsy()

      // user doesn't have permission
      expect(ColDocumentBeingEditedByOther(message, cannotUnClaimMessages)).toBeFalsy()

      // make correct status
      collabStatus.status = CollaborativeMessageStates.BeingEdited
      expect(ColDocumentBeingEditedByOther(message, canUnClaimMessages)).toBeTruthy()
    }
  })
})
