import { CHANNEL_CUSTOM, PARTICIPANT_CUSTOM } from 'src/config'
import { ChannelCustom, Role, TemplateBodysByKey, TemplateBody } from 'src/custom-types'
import { CoreParticipant } from 'src/custom-types/participant'
import { forces } from 'src/mocks'
import { deepCopy, getParticipantStates, checkV3ParticipantStates } from '../'
import { addTemplate, addTemplatesToChosen } from '../participant-states'
import { getTemplateById, getTemplateByIdNoUndefined } from '../getTemplateById'
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
      templates: [
        { _id: 'k16eedkl', title: 'Chat' }
      ]
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

const defaultMessageId = 'k16eedkl'

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

describe('checkV3ParticipantStates', () => {
  it('Check umpire in channel with V3', () => {
    const selForce = 'umpire'
    const selRole = gameControl.name
    const isObserver = false
    const res = checkV3ParticipantStates(allForcesChannel, selForce, selRole, isObserver)
    expect(res).toBeTruthy()
    expect(res.isParticipant).toBeTruthy()
    expect(res.templatesIDs).toBeTruthy()
    expect(res.templatesIDs.length).toEqual(1)
    expect(res.allRolesIncluded).toBeTruthy()
  })

  it('Check member force in named role in channel with V3', () => {
    const selForce = 'Red'
    const selRole = redLogs.roleId
    const res = checkV3ParticipantStates(allForcesChannel, selForce, selRole, false)
    expect(res).toBeTruthy()
    expect(res.isParticipant).toBeTruthy()
    expect(res.templatesIDs).toBeTruthy()
    expect(res.templatesIDs.length).toEqual(0)
    expect(res.allRolesIncluded).toBeFalsy()
  })
})

describe('addTemplate function', () => {
  it('should add a template to chosenTemplates and update templatesUniqFilter', () => {
    const chosenTemplates: TemplateBody[] = []
    const templatesUniqFilter: { [property: string]: boolean } = {}
    const chatTemplate = getTemplateById(allTemplates, defaultMessageId)
    
    if (typeof chatTemplate !== 'undefined') {
      addTemplate(chatTemplate, chosenTemplates, templatesUniqFilter)
    }

    expect(chosenTemplates.length).toEqual(1)
    expect(templatesUniqFilter).toEqual({ Chat: true })
  })

  it('should not add a template if it already exists in templatesUniqFilter', () => {
    const chosenTemplates: TemplateBody[] = []
    const templatesUniqFilter: { [property: string]: boolean } = {}
    
    addTemplate(
      getTemplateByIdNoUndefined(allTemplates, defaultMessageId),
      chosenTemplates,
      templatesUniqFilter
    )

    expect(chosenTemplates.length).toEqual(1)
    expect(templatesUniqFilter).toEqual({ Chat: true })
  })
})

describe('addTemplatesToChosen', () => {
  it('should add chatTemplate to chosenTemplates when templatesIDs is not provided', () => {
    const selForce = 'Red'
    const selRole = 'rkrlw6f5m'
    const isObserver = false
    const chosenTemplates: TemplateBody[] = []
    const templatesUniqFilter: { [property: string]: boolean } = {}

    const { templatesIDs } = checkV3ParticipantStates(allForcesChannel, selForce, selRole, isObserver)

    addTemplatesToChosen(templatesIDs, allTemplates, chosenTemplates, templatesUniqFilter)

    expect(templatesIDs.length).toEqual(0)
    expect(chosenTemplates.length).toEqual(1)
    expect(chosenTemplates.some(template => template._id === defaultMessageId)).toBe(true)
    expect(templatesUniqFilter).toEqual({ Chat: true })
  })

  it('should add templates to chosenTemplates when templatesIDs is provided', () => {
    const selForce = 'umpire'
    const selRole = gameControl.name
    const isObserver = false
    const chosenTemplates: TemplateBody[] = []
    const templatesUniqFilter: { [property: string]: boolean } = {}

    const { templatesIDs } = checkV3ParticipantStates(allForcesChannel, selForce, selRole, isObserver)

    addTemplatesToChosen(templatesIDs, allTemplates, chosenTemplates, templatesUniqFilter)
    
    expect(templatesIDs.length).toEqual(1)
    expect(chosenTemplates.length).toEqual(1)
    expect(chosenTemplates.some(template => template._id === defaultMessageId)).toBe(true)
    expect(templatesUniqFilter).toEqual({ Chat: true })
  })
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

describe('Test Suite for getParticipantStates', () => {
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
})
