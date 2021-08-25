import { Participant } from "@serge/custom-types"
import getAssignees from "./assignees"
import { forces } from '@serge/mocks'

const namedWhite: Participant[] = [
  {
    canCollaborate: false,
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

const allWhite: Participant[] = [
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

describe('Determine assignees for channel', () => {
  it('Can produce named roles', () => {
    // white user in collab channel without collab rights
    expect(getAssignees(namedWhite, forces)).toBeTruthy()
    expect(getAssignees(namedWhite, forces).length).toEqual(1)
  })
})
