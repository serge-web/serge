import { deepCopy, checkParticipantStates, getParticipantStates } from '../'
import { ChannelData, Participant, Role, TemplateBodysByKey } from '@serge/custom-types'
import { forces } from '@serge/mocks'

const gameControl: Role = forces[0].roles[0]
const redLogs: Role = forces[2].roles[1]

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
      roles: [redLogs.roleId],
      subscriptionId: 'k63pjsbv',
      templates: [{
        title: 'RFI',
        _id: 'rfi'
      }, {
        title: 'Weather',
        _id: 'wather'
      }]
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

const defaultMessageId = 'chat'

const allTemplatesNoChat: TemplateBodysByKey = {
  rfi: {
    title: 'RFI',
    _id: 'rfi',
    _rev: '',
    completed: false,
    lastUpdated: '',
    details: {}
  },
  wather: {
    title: 'Weather',
    _id: 'wather',
    _rev: '',
    completed: false,
    lastUpdated: '',
    details: {}
  }
}

const allTemplates: TemplateBodysByKey = {
  [defaultMessageId]: {
    title: 'Chat',
    _id: defaultMessageId,
    _rev: '',
    completed: false,
    lastUpdated: '',
    details: {}
  },
  ...allTemplatesNoChat
}

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
  const selRole = 'rkrlw6f5f'
  const res = checkParticipantStates(allForcesChannel, selForce, selRole, false)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeTruthy()
  expect(res.allRolesIncluded).toBeFalsy()
  expect(res.participatingRoles).toEqual([allForcesChannel.participants[1]])
})

it('Check non-member force in named role in channel', () => {
  const selForce = 'Red'
  const selRole = 'rkrlw6f5m'
  const res = checkParticipantStates(allForcesChannel, selForce, selRole, false)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeFalsy()
  expect(res.allRolesIncluded).toBeFalsy()
})

it('Check non-member force in named role in channel where no roles named', () => {
  const selForce = 'Blue'
  const selRole = 'rkrlw6f5n'
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
  const selRole = gameControl.roleId
  const res = checkParticipantStates(newChannel, selForce, selRole, false)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeFalsy()
})

it('Check missing force in channel if observer', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelData = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: Participant) => part.forceUniqid !== 'umpire')
  const selForce = 'umpire'
  const selRole = gameControl.roleId
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
  const selRole = gameControl.roleId
  const states = getParticipantStates(newChannel, selForce, selRole, true, allTemplates, defaultMessageId)
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
  const selRole = 'rkrlw6f5f'
  const states = getParticipantStates(newChannel, selForce, selRole, false, allTemplates, defaultMessageId)
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
  const selRole = 'rkrlw6f5m'
  const states = getParticipantStates(newChannel, selForce, selRole, false, allTemplates, defaultMessageId)
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
  const selRole = 'rkrlw6f5n'
  const states = getParticipantStates(newChannel, selForce, selRole, false, allTemplates, defaultMessageId)
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
  const selForce = 'Blue'
  const selRole = 'Dragon'
  const states = getParticipantStates(newChannel, selForce, selRole, false, allTemplatesNoChat, '')
  expect(states).toBeTruthy()
  expect(states.isParticipant).toBeTruthy()
  expect(states.observing).toBeFalsy() // since member is participant
  expect(states.templates.length).toEqual(0) // since chat template missing
  expect(states.allRolesIncluded).toEqual(newChannel.participants[1])
})
