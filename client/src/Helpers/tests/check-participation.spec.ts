import { CHANNEL_CUSTOM, PARTICIPANT_CUSTOM } from 'src/config'
import { ChannelCustom, Role, TemplateBodysByKey } from 'src/custom-types'
import { CoreParticipant } from 'src/custom-types/participant'
import { forces } from '@serge/mocks'
import { checkLegacyParticipantStates, deepCopy, getParticipantStates } from '../'

const gameControl: Role = forces[0].roles[0]
const redLogs: Role = forces[2].roles[1]

const allForcesChannel: ChannelCustom = {
  name: 'Channel 16',
  channelType: CHANNEL_CUSTOM,
  participants: [
    {
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'k63pjpfv',
      pType: PARTICIPANT_CUSTOM,
      templates: []
    },
    {
      forceUniqid: 'Red',
      roles: [redLogs.roleId],
      subscriptionId: 'k63pjsbv',
      pType: PARTICIPANT_CUSTOM,
      templates: []
    },
    {
      forceUniqid: 'Blue',
      roles: [],
      subscriptionId: 'k63pju7l',
      pType: PARTICIPANT_CUSTOM,
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
  const res = checkLegacyParticipantStates(allForcesChannel, selForce, selRole, isObserver)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeTruthy()
  expect(res.templatesIDs).toBeTruthy()
  expect(res.templatesIDs.length).toEqual(0)
  expect(res.allRolesIncluded).toBeTruthy()
})

it('Check member force in named role in channel', () => {
  const selForce = 'Red'
  const selRole = redLogs.roleId
  const res = checkLegacyParticipantStates(allForcesChannel, selForce, selRole, false)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeTruthy()
  expect(res.templatesIDs).toBeTruthy()
  expect(res.templatesIDs.length).toEqual(0)
  expect(res.allRolesIncluded).toBeFalsy()
})

it('Check non-member force in named role in channel', () => {
  const selForce = 'Red'
  const selRole = 'rkrlw6f5m'
  const res = checkLegacyParticipantStates(allForcesChannel, selForce, selRole, false)
  expect(res).toBeTruthy()
  expect(res.templatesIDs).toBeTruthy()
  expect(res.isParticipant).toBeFalsy()
  expect(res.templatesIDs.length).toEqual(0)
  expect(res.allRolesIncluded).toBeFalsy()
})

it('Check non-member force in named role in channel where no roles named', () => {
  const selForce = 'Blue'
  const selRole = 'rkrlw6f5n'
  const res = checkLegacyParticipantStates(allForcesChannel, selForce, selRole, false)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeTruthy()
  expect(res.templatesIDs).toBeTruthy()
  expect(res.templatesIDs.length).toEqual(0)
  expect(res.allRolesIncluded).toBeTruthy()
})

it('Check missing force not in channel', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelCustom = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: CoreParticipant) => part.forceUniqid !== 'Blue')
  const selForce = 'Blue'
  const selRole = gameControl.roleId
  const res = checkLegacyParticipantStates(newChannel, selForce, selRole, false)
  expect(res).toBeTruthy()
  expect(res.templatesIDs).toBeTruthy()
  expect(res.isParticipant).toBeFalsy()
})

it('Check missing force in channel if observer', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelCustom = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: CoreParticipant) => part.forceUniqid !== 'umpire')
  const selForce = 'umpire'
  const selRole = gameControl.roleId
  const res = checkLegacyParticipantStates(newChannel, selForce, selRole, true)
  expect(res).toBeTruthy()
  expect(res.isParticipant).toBeFalsy()
  expect(res.templatesIDs).toBeTruthy()
  expect(res.allRolesIncluded).toBeFalsy()
})

it('Check states for observer who is not registered', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelCustom = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: CoreParticipant) => part.forceUniqid !== 'umpire')
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
  const newChannel: ChannelCustom = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: CoreParticipant) => part.forceUniqid !== 'umpire')
  const selForce = 'Red'
  const selRole = redLogs.roleId
  const states = getParticipantStates(newChannel, selForce, selRole, false, allTemplates, defaultMessageId)
  expect(states).toBeTruthy()
  expect(states.isParticipant).toBeTruthy()
  expect(states.observing).toBeFalsy() // since member is participant
  expect(states.templates.length).toEqual(1)
})

it('Check states for role who is not registered', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelCustom = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: CoreParticipant) => part.forceUniqid !== 'umpire')
  const selForce = 'Red'
  const selRole = 'bad_id'
  const states = getParticipantStates(newChannel, selForce, selRole, false, allTemplates, defaultMessageId)
  expect(states).toBeTruthy()
  expect(states.isParticipant).toBeFalsy()
  expect(states.observing).toBeFalsy() // since member is participant
  expect(states.templates.length).toEqual(0)
})

it('Check states for role in force with all members', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelCustom = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: CoreParticipant) => part.forceUniqid !== 'umpire')
  const selForce = 'Blue'
  const selRole = 'rkrlw6f5n'
  const states = getParticipantStates(newChannel, selForce, selRole, false, allTemplates, defaultMessageId)
  expect(states).toBeTruthy()
  expect(states.isParticipant).toBeTruthy()
  expect(states.observing).toBeFalsy() // since member is participant
  expect(states.templates.length).toEqual(1) // since it should return chat template
})

it('Check states for role in force with all members, but with no chat templates provided', () => {
  // get rid of the white force mmembership
  const newChannel: ChannelCustom = deepCopy(allForcesChannel)
  newChannel.participants = newChannel.participants.filter((part: CoreParticipant) => part.forceUniqid !== 'umpire')
  const selForce = 'Blue'
  const selRole = 'Dragon'
  const states = getParticipantStates(newChannel, selForce, selRole, false, allTemplatesNoChat, '')
  expect(states).toBeTruthy()
  expect(states.isParticipant).toBeTruthy()
  expect(states.observing).toBeFalsy() // since member is participant
  expect(states.templates.length).toEqual(0) // since chat template missing
})
