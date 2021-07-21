import { deepCopy, checkParticipantStates, getParticipantStates } from '../'
import { ChannelData, Participant, Role } from '@serge/custom-types'
import { forces } from '@serge/mocks'

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
      roles: [{ name: 'Logs', isGameControl: false, isObserver: false, isInsightViewer: false, password: 'aa' }],
      subscriptionId: 'k63pjsbv',
      templates: [{ title: 'a', a: 'a' }, { title: 'b', b: 'b' }]
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

const allTemplates: any = [{ title: 'Chat' }, { title: 'RFI' }, { title: 'Weather' }]

it('Check umpire in channel', () => {
  const selForce = 'umpire'
  const selRole = gameControl.name
  const isObserver = false
  const res = checkParticipantStates(allForcesChannel, selForce, selRole, isObserver)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeTruthy()
  expect(res.allRolesIncluded).toBeTruthy()
  expect(res.participatingRoles).toEqual([allForcesChannel.participants[0]])
})

it('Check member force in named role in channel', () => {
  const selForce = 'Red'
  const selRole = 'Logs'
  const res = checkParticipantStates(allForcesChannel, selForce, selRole, false)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeTruthy()
  expect(res.allRolesIncluded).toBeFalsy()
  expect(res.participatingRoles).toEqual([allForcesChannel.participants[1]])
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
  expect(res.isParticipant).toBeFalsy()
  expect(res.participatingRoles.length > 0).toBeFalsy()
  expect(res.allRolesIncluded).toBeFalsy()
})

it('Check states for observer who is not registered', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelData = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: Participant) => part.forceUniqid !== 'umpire')
  const selForce = 'umpire'
  const selRole = gameControl.name
  const states = getParticipantStates(newChannel, selForce, selRole, true, allTemplates)
  expect(states).toBeTruthy()
  expect(states.observing).toBeTruthy() // since member is participant
  expect(states.isParticipant).toBeFalsy()
  expect(states.templates.length).toEqual(0)
})

it('Check states for role who is registered', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelData = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: Participant) => part.forceUniqid !== 'umpire')
  const selForce = 'Red'
  const selRole = 'Logs'
  const states = getParticipantStates(newChannel, selForce, selRole, false, allTemplates)
  expect(states).toBeTruthy()
  expect(states.isParticipant).toBeTruthy()
  expect(states.observing).toBeFalsy() // since member is participant
  expect(states.templates.length).toEqual(2)
  expect(states.allRolesIncluded).toBeFalsy()
})

it('Check states for role who is not registered', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelData = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: Participant) => part.forceUniqid !== 'umpire')
  const selForce = 'Red'
  const selRole = 'Logs2'
  const states = getParticipantStates(newChannel, selForce, selRole, false, allTemplates)
  expect(states).toBeTruthy()
  expect(states.isParticipant).toBeFalsy()
  expect(states.observing).toBeFalsy() // since member is participant
  expect(states.templates.length).toEqual(0)
  expect(states.allRolesIncluded).toBeFalsy()
})

it('Check states for role in force with all members', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelData = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: Participant) => part.forceUniqid !== 'umpire')
  const selForce = 'Blue'
  const selRole = 'Dragon'
  const states = getParticipantStates(newChannel, selForce, selRole, false, allTemplates)
  expect(states).toBeTruthy()
  expect(states.isParticipant).toBeTruthy()
  expect(states.observing).toBeFalsy() // since member is participant
  expect(states.templates.length).toEqual(1) // since it should return chat template
  expect(states.allRolesIncluded).toEqual(newChannel.participants[1])
})

it('Check states for role in force with all members, but with no chat templates provided', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelData = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: Participant) => part.forceUniqid !== 'umpire')
  const noChat: any = allTemplates.filter((tem:any) => tem.title !== 'Chat')
  const selForce = 'Blue'
  const selRole = 'Dragon'
  const states = getParticipantStates(newChannel, selForce, selRole, false, noChat)
  expect(states).toBeTruthy()
  expect(states.isParticipant).toBeTruthy()
  expect(states.observing).toBeFalsy() // since member is participant
  expect(states.templates.length).toEqual(0) // since chat template missing
  expect(states.allRolesIncluded).toEqual(newChannel.participants[1])
})
