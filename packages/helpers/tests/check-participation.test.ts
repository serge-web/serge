import { checkParticipantStates, getParticipantStates } from '@serge/helpers'
import { ChannelData, Participant, Role } from '@serge/custom-types'

import { forces} from '@serge/mocks'
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
      roles: [{name:'Logs', isGameControl: false, isObserver: false, isInsightViewer: false, password:'aa'}],
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

it('Check umpire in channel', () => {
  const selForce = 'umpire'
  const selRole = gameControl.name
  const isObserver = false
  const res = checkParticipantStates(allForcesChannel, selForce, selRole, isObserver)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeTruthy()
  expect(res.allRolesIncluded).toBeTruthy()
  expect(res.participatingRole).toEqual(allForcesChannel.participants[0])
})

it('Check member force in named role in channel', () => {
  const selForce = 'Red'
  const selRole = 'Logs'
  const res = checkParticipantStates(allForcesChannel, selForce, selRole, false)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeTruthy()
  expect(res.allRolesIncluded).toBeFalsy()
  expect(res.participatingRole).toEqual(allForcesChannel.participants[1])
})

it('Check non-member force in named role in channel', () => {
  const selForce = 'Red'
  const selRole = 'Logs2'
  const res = checkParticipantStates(allForcesChannel, selForce, selRole, false)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeFalsy()
  expect(res.allRolesIncluded).toBeFalsy()
})


it('Check non-member force in named role in channel where no roles named', () => {
  const selForce = 'Blue'
  const selRole = 'Logs2'
  const res = checkParticipantStates(allForcesChannel, selForce, selRole, false)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeTruthy()
  expect(res.allRolesIncluded).toBeTruthy()
})

it('Check missing force not in channel', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelData = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: Participant) => part.forceUniqid !== 'Blue')
  const selForce = 'Blue'
  const selRole = gameControl.name
  const res = checkParticipantStates(newChannel, selForce, selRole, false)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeFalsy()
})

it('Check missing force in channel if observer', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelData = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: Participant) => part.forceUniqid !== 'umpire')
  const selForce = 'umpire'
  const selRole = gameControl.name
  const res = checkParticipantStates(newChannel, selForce, selRole, true)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeTruthy()
  expect(res.participatingRole).toBeFalsy()
  expect(res.allRolesIncluded).toBeFalsy()
})

it('Check states for observer who is not registered', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelData = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: Participant) => part.forceUniqid !== 'umpire')
  const selForce = 'umpire'
  const selRole = gameControl.name
  const allTemplates: any = []
  const states = getParticipantStates(newChannel, selForce, selRole, true, allTemplates)
  console.log(states)
  expect(states).toBeTruthy()
})