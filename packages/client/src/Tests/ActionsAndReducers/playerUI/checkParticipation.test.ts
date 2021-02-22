import { checkParticipantStates } from '../../../ActionsAndReducers/playerUi/helpers/participantStates'
import { ChannelData, ForceData, Participant, Role } from '@serge/custom-types'

import { forces, WargameExportedMock} from '@serge/mocks'
import { deepCopy } from '@serge/helpers'

const gameControl: Role = forces[0].roles[0]
const allForcesChannel: ChannelData = {
  name: 'Channel 16',
  participants: [
    {
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'k63pjpfv',
      templates: []
    },
    {
      force: 'Red',
      forceUniqid: 'Red',
      roles: [],
      subscriptionId: 'k63pjsbv',
      templates: []
    },
    {
      force: 'Blue',
      forceUniqid: 'Blue',
      roles: [],
      subscriptionId: 'k63pju7l',
      templates: []
    }
  ],
  uniqid: 'channel-k63pjit0'
}

// describe('Check umpire in channel', () => {
//   const selForce = 'umpire'
//   const selRole = gameControl.name
//   const isObserver = false
//   const res = checkParticipantStates(channel, selForce, selRole, false)
//   expect(res).toBeTruthy()
//   expect(res.isParticipant).toBeTruthy()
//   expect(res.allRolesIncluded).toBeTruthy()
//   expect(res.participatingRole).toEqual(channel.participants[0])
// })

// describe('Check missing force not in channel', () => {
//   const selForce = 'dragon'
//   const selRole = gameControl.name
//   const res = checkParticipantStates(channel, selForce, selRole, false)
//   expect(res).toBeTruthy()
//   expect(res.isParticipant).toBeFalsy()
// })


describe('Check missing force in channel if observer', () => {
  const newChannel: ChannelData = deepCopy(allForcesChannel)
  // get rid of the white force mmembership
  newChannel.participants = newChannel.participants.filter((part: Participant) => part.forceUniqid !== 'umpire')
  const selForce = 'umpire'
  const selRole = gameControl.name
  const res = checkParticipantStates(newChannel, selForce, selRole, true)
  console.log('res', res)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeTruthy()
})