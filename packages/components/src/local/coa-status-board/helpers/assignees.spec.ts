import { Participant } from '@serge/custom-types'
import getAssignees from './assignees'
import { forces } from '@serge/mocks'

const namedWhite: Participant[] = [
  {
    canCollaborate: true,
    canReleaseMessages: true,
    force: 'White',
    forceUniqid: 'umpire',
    roles: ['rkrlw6f5f'],
    subscriptionId: 'jvrn',
    templates: [
      { title: 'RFI', _id: 'k16eedkj' }
    ]
  }
]

const allWhiteCollaborate: Participant[] = [
  {
    canCollaborate: true,
    canReleaseMessages: true,
    force: 'White',
    forceUniqid: 'umpire',
    roles: [],
    subscriptionId: 'jvrn',
    templates: [
      { title: 'RFI', _id: 'k16eedkj' }
    ]
  }
]

const allWhiteNonCollab: Participant[] = [
  {
    canCollaborate: false,
    canReleaseMessages: true,
    force: 'White',
    forceUniqid: 'umpire',
    roles: [],
    subscriptionId: 'jvrn',
    templates: [
      { title: 'RFI', _id: 'k16eedkj' }
    ]
  }
]

const multiPart: Participant[] = [
  {
    canCollaborate: true,
    canReleaseMessages: true,
    force: 'White',
    forceUniqid: 'umpire',
    roles: [],
    subscriptionId: 'jvrn',
    templates: [
      { title: 'RFI', _id: 'k16eedkj' }
    ]
  },
  {
    canCollaborate: true,
    canReleaseMessages: true,
    force: 'Blue',
    forceUniqid: 'Blue',
    roles: [],
    subscriptionId: 'jvrn',
    templates: [
      { title: 'RFI', _id: 'k16eedkj' }
    ]
  }

]

describe('Determine assignees for channel', () => {
  it('Can produce named roles for collaborate', () => {
    // white user in collab channel with collab rights
    const res1 = getAssignees(allWhiteCollaborate, forces)
    expect(res1).toBeTruthy()
    expect(res1.length).toEqual(2)
    expect(res1[0].roleId).toEqual('rkrlw6f5f')
    expect(res1[1].roleId).toEqual('rkrlasdd5f')
  })

  it('Can produce named roles for non-collaborate', () => {
    // white user in collab channel with collab rights
    const res1 = getAssignees(allWhiteNonCollab, forces)
    expect(res1).toBeTruthy()
    expect(res1.length).toEqual(0)
  })

  it('Can produce all roles for collaborate', () => {
    // white user in collab channel with collab rights
    const res1 = getAssignees(namedWhite, forces)
    expect(res1).toBeTruthy()
    expect(res1.length).toEqual(1)
    expect(res1[0].roleId).toEqual('rkrlw6f5f')
  })

  it('Can produce multi-participant lists', () => {
    const res1 = getAssignees(multiPart, forces)
    expect(res1).toBeTruthy()
    expect(res1.length).toEqual(4)
    expect(res1[0].roleId).toEqual('rkrlw6f5f')
    expect(res1[0].forceName).toEqual('White')
    expect(res1[1].roleId).toEqual('rkrlasdd5f')
    expect(res1[2].roleId).toEqual('rkrlw445e')
    expect(res1[3].roleId).toEqual('rkrlw6f5emms')
    expect(res1[3].forceName).toEqual('Blue')
  })})
