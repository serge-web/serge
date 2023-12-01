import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE, Phase } from 'src/config'
import { ChannelPlanning, ForceData, InteractionDetails, MessageDetails, MessageDetailsFrom, MessageInfoTypeClipped, MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlanningActivity, Role, TemplateBody } from 'src/custom-types'
import { deepCopy, incrementGameTime } from 'src/Helpers'
import { P9BMock, planningMessages as mockMessages, turnPeriod } from 'src/mocks'
import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import { cloneDeep, noop, uniqBy } from 'lodash'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { generateAllTemplates } from '../../local/molecules/json-editor/helpers/generate-p9-templates'
import { generateTestData2 } from './helpers/gen-test-mapping-data'
import PlanningChannel from './index'
import docs from './README.md'
import PlanningChannelProps from './types/props'

// console.clear()

type ScriptDecoratorProps = {
  scripts: string[]
  children: React.ReactElement
  style: CSSProperties
}

const ScriptDecorator: React.FC<ScriptDecoratorProps> = ({ scripts, children, style }) => {
  const [loaded, setLoaded] = useState<boolean>(false)

  const loadScript = (script: string): Promise<boolean> => {
    return new Promise(resolve => {
      const head = document.querySelector('head')
      const scriptElm = document.createElement('script')
      if (!head) {
        return
      }
      scriptElm.async = true
      scriptElm.src = script
      scriptElm.onload = () => {
        resolve(true)
      }
      head.appendChild(scriptElm)
    })
  }

  useEffect(() => {
    Promise.all(scripts.map(script => loadScript(script))).then(() => setLoaded(true))
  }, [])

  return (
    loaded ? <div style={style}>{children}</div> : null
  )
}

const wrapper: React.FC = (storyFn: any) =>
  <ScriptDecorator scripts={[
    '/leaflet/select/leaflet.select.js',
    '/leaflet/ruler/leaflet.ruler.js',
    '/leaflet/timeline/leaflet.timeline.js'
  ]} style={{ height: '600px' }}>
    {storyFn()}
  </ScriptDecorator>

const wargame = P9BMock.data
const channels = wargame.channels.channels
const forces = wargame.forces.forces
const platformTypes = wargame.platformTypes ? wargame.platformTypes.platformTypes : []
const templates = wargame.templates ? wargame.templates.templates : []
const areas = wargame.areas ? wargame.areas.areas : []

// fix the URL for the openstreetmap mapping, because we don't have arabian
// sea in StoryBook
const planningChannelTmp = channels.find((channel) => channel.channelType === 'ChannelPlanning') as ChannelPlanning
const planningChannel = deepCopy(planningChannelTmp) as ChannelPlanning
if (planningChannel.channelType === 'ChannelPlanning') {
  if (planningChannel.constraints.tileLayer) {
    planningChannel.constraints.tileLayer.url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  }
}

// generate list of roles, for dropdown control
const allRoles: string[] = []
forces.forEach((force: ForceData) => {
  force.roles.forEach((role: Role) => {
    allRoles.push(force.uniqid + ' ~ ' + role.roleId)
  })
})

const activities = P9BMock.data.activities ? P9BMock.data.activities.activities : []

export default {
  title: 'local/organisms/PlanningChannel',
  component: PlanningChannel,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // We have no addons enabled in this story, so the addon panel should be hidden
      showPanel: false
    },
    controls: {
      expanded: false
    }
  },
  argTypes: {
    selectedRoleId: {
      name: 'View as',
      options: allRoles,
      defaultValue: allRoles[1],
      control: {
        type: 'select'
      }
    }
  },
  phase: {
    name: 'Game phase',
    options: [
      Phase.Planning,
      Phase.Adjudication
    ],
    defaultValue: Phase.Adjudication,
    control: {
      type: 'radio'
    }
  },
  wargameInitiated: {
    name: 'Wargame has been initiated',
    control: {
      type: 'boolean'
    }
  },
  children: {
    table: {
      disable: true
    }
  }
}

const Template: Story<PlanningChannelProps> = (args) => {
  const {
    selectedRoleId,
    messages,
    phase,
    allForces,
    areas,
    allTemplates,
    forcePlanningActivities
  } = args

  const attributeTypes = wargame.attributeTypes ? wargame.attributeTypes.attributes : []

  const forces1 = allForces || forces

  const localForces = forces1.length !== 0 ? forces1 : generateTestData2(800, planningChannel.constraints, forces, platformTypes, attributeTypes || [])

  const selectedRoleStr: string = selectedRoleId
  // separate out the two elements of the combined role
  const ind = selectedRoleStr.indexOf(' ~ ')
  const forceStr = selectedRoleStr.substring(0, ind)
  const roleStr = selectedRoleStr.substring(ind + 3)
  const force = localForces.find((f: ForceData) => f.uniqid === forceStr)
  const role = force && force.roles.find((r: Role) => r.roleId === roleStr)

  const [stateMessages, setStateMessages] = useState<Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped>>(messages)

  const saveMessage = (_dbName: string, details: MessageDetails, message: any) => {
    console.warn('SAVE MESSAGE', details, message)
    return async (): Promise<void> => {
      const ref = message.Reference ? message.Reference : 'umpire-' + (stateMessages.length + 1)
      const newMessage: MessageInteraction = {
        _id: moment().toISOString(),
        // defined constat for messages, it's not same as message.details.messageType,
        // ex for all template based messages will be used CUSTOM_MESSAGE Type
        messageType: 'InteractionMessage',
        details,
        message: { ...message, Reference: ref },
        hasBeenRead: false
      }
      const newMessagesList = [...stateMessages, newMessage]
      const nonInfoMessages = newMessagesList.filter((msg: MessageInteraction | MessagePlanning | MessageInfoTypeClipped) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessageInteraction | MessagePlanning>
      const reverseMes = nonInfoMessages.reverse()
      const deDupeInteractions = uniqBy(reverseMes, function (inter: MessageInteraction | MessagePlanning) {
        return inter.message.Reference
      })
      const restoreOrder = deDupeInteractions.reverse()
      setStateMessages(restoreOrder)
    }
  }

  const adjudicationTemplate = templates.find((tmp) => tmp._id.includes('djudicat')) || ({} as TemplateBody)

  return <PlanningChannel
    channel={planningChannel}
    messages={stateMessages}
    allTemplates={allTemplates}
    allPeriods={turnPeriod}
    channelId={channels[0].uniqid}
    adjudicationTemplate={adjudicationTemplate}
    dispatch={noop}
    attributeTypes={attributeTypes}
    getAllWargameMessages={(): any => noop}
    saveMessage={saveMessage}
    reduxDispatch={noop}
    saveNewActivityTimeMessage={(): any => noop}
    platformTypes={platformTypes}
    selectedRoleId={role?.roleId || ''}
    selectedRoleName={role?.name || ''}
    currentWargame={P9BMock.wargameTitle}
    selectedForce={force || localForces[1]}
    phase={phase}
    allForces={localForces}
    gameDate={P9BMock.data.overview.gameDate}
    currentTurn={P9BMock.gameTurn}
    gameTurnLength={P9BMock.data.overview.gameTurnTime}
    forcePlanningActivities={forcePlanningActivities}
    areas={areas}
  />
}
const doNotDoIt = 7 // don't transform the messages
const channelMessages = mockMessages.filter((msg) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessagePlanning | MessageInteraction>
const planningMessages = channelMessages.filter((msg) => msg.details.interaction === undefined) as MessagePlanning[]
const fixedMessages = doNotDoIt ? [] : planningMessages.map((msg: MessagePlanning) => {
  const newMsg = { ...msg }
  // drop the legacy entries
  delete newMsg.message.Assets
  delete newMsg.message.Targets
  delete newMsg.message.ActivityType
  // find the force
  const thisForce = newMsg.details.from.forceId
  const activities2 = activities.find((val: PerForcePlanningActivitySet) => val.force === thisForce)
  if (activities2) {
    const grouped = activities2.groupedActivities
    const randomGroup = grouped[Math.floor(Math.random() * grouped.length)]
    const activity = randomGroup.activities[Math.floor(Math.random() * randomGroup.activities.length)]
    if (activity && typeof activity !== 'string') {
      const planAct = activity as PlanningActivity
      newMsg.message.activity = planAct.uniqid
    }
  }
  const randomAssets = (force: ForceData): string[] => {
    const res = []
    if (force && force.assets) {
      const numAssets = 1 + Math.floor(Math.random() * 2)
      for (let i = 0; i < numAssets; i++) {
        const asset = force.assets[Math.floor(Math.random() * force.assets.length)]
        res.push(asset.uniqid)
      }
    }
    return res
  }
  const myForce = forces.find((force: ForceData) => force.uniqid === thisForce)
  const otherForces = forces.filter((force: ForceData) => force.uniqid !== thisForce)
  if (myForce) {
    const myAssetIds = randomAssets(myForce)
    newMsg.message.ownAssets = myAssetIds.map((asset: string) => { return { asset: asset, number: 0 } })
  }
  if (otherForces) {
    const otherAssetIds = randomAssets(otherForces[Math.floor(Math.random() * otherForces.length)])
    newMsg.message.otherAssets = otherAssetIds.map((asset: string) => { return { asset: asset } })
  }
  return newMsg
})

!doNotDoIt && console.log('fixed', fixedMessages)

export const Default = Template.bind({})
Default.args = {
  messages: channelMessages,
  selectedRoleId: allRoles[5],
  phase: Phase.Adjudication,
  allTemplates: templates,
  forcePlanningActivities: activities
}

export const Planning = Template.bind({})
Planning.args = {
  messages: channelMessages,
  selectedRoleId: allRoles[5],
  phase: Phase.Planning,
  allTemplates: templates,
  forcePlanningActivities: activities
}

export const Adjudication = Template.bind({})
Adjudication.args = {
  messages: channelMessages,
  selectedRoleId: allRoles[1],
  allTemplates: templates,
  phase: Phase.Adjudication,
  forcePlanningActivities: activities
}

export const WithAreas = Template.bind({})
WithAreas.args = {
  messages: channelMessages,
  selectedRoleId: allRoles[5],
  phase: Phase.Planning,
  areas: areas,
  forcePlanningActivities: activities
}

const liveData = generateAllTemplates()

export const LiveTemplates = Template.bind({})
LiveTemplates.args = {
  messages: channelMessages,
  selectedRoleId: allRoles[5],
  phase: Phase.Planning,
  areas: areas,
  allTemplates: liveData.templates,
  forcePlanningActivities: liveData.activities
}

const istarEvent = planningMessages.find((msg) => {
  return msg.message.activity.includes('ISTAR')
})
const eventIdsOfInterest = istarEvent ? [istarEvent.message.Reference] : []
export const IstarEvent = Template.bind({})
IstarEvent.args = {
  messages: planningMessages.filter((msg: MessagePlanning) => eventIdsOfInterest.includes(msg.message.Reference)),
  selectedRoleId: allRoles[1],
  phase: Phase.Adjudication,
  forcePlanningActivities: activities
}

const otherForceEvent = planningMessages.find((msg) => {
  return istarEvent && (msg.details.from.forceId !== istarEvent.details.from.forceId)
})
const interactionIdsOfInterest = istarEvent && otherForceEvent ? [istarEvent.message.Reference, otherForceEvent.details.from.forceId] : []
const interMessages = channelMessages.filter((msg: MessagePlanning | MessageInteraction | MessageInfoTypeClipped) => {
  if (msg.messageType !== INFO_MESSAGE_CLIPPED) {
    return msg.details.messageType === 'p9adjudicate'
  }
  return false
})
const istarInterMessages = planningMessages.filter((msg: MessagePlanning) =>
  interactionIdsOfInterest.includes(msg.message.Reference)) as Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped>
// get an adjudication
const openInter2 = JSON.parse(JSON.stringify(interMessages[0])) as MessageInteraction
if (openInter2.details && openInter2.details.interaction) {
  openInter2.details.interaction = { ...openInter2.details.interaction, id: 'm_f-red_9 i-random' }
  istarInterMessages.push(openInter2)
}
export const IstarInteraction = Template.bind({})
IstarInteraction.args = {
  messages: istarInterMessages,
  selectedRoleId: allRoles[1],
  phase: Phase.Adjudication,
  forcePlanningActivities: activities
}

export const BulkForces = Template.bind({})
BulkForces.args = {
  messages: channelMessages,
  selectedRoleId: allRoles[1],
  allForces: [],
  phase: Phase.Planning,
  forcePlanningActivities: activities
}

export const StartOfAdjudication = Template.bind({})
StartOfAdjudication.args = {
  messages: channelMessages.filter((msg) => msg.details.interaction === undefined),
  selectedRoleId: allRoles[1],
  allForces: forces,
  phase: Phase.Adjudication,
  forcePlanningActivities: activities
}

// open an interaction, and make this role the owner - so we have an adjudication open
const adjRole = forces[0].roles[1]
const tmpMessages = [...mockMessages]
const firstInter = mockMessages.find((msg: MessageInteraction | MessagePlanning | MessageInfoTypeClipped) => {
  return (msg.messageType === INTERACTION_MESSAGE)
}) as MessageInteraction
let tmpPlans: Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped> = []
if (firstInter) {
  const inter = firstInter.details.interaction as InteractionDetails
  if (inter) {
    const items = inter.orders2 ? [inter.orders1, inter.orders2] : [inter.orders1]
    const relevant = mockMessages.filter((msg) => msg._id && items.includes(msg._id))
    const interCopy1 = JSON.parse(JSON.stringify(firstInter)) as MessageInteraction
    const interCopy = { ...interCopy1, _id: moment().toISOString() }
    // give it a new, unique id
    const newFrom: MessageDetailsFrom = { ...firstInter.details.from, roleId: adjRole.roleId, roleName: adjRole.name }
    interCopy.details.from = newFrom
    if (interCopy.details.interaction) {
      interCopy.details.interaction.complete = false
    }
    // drop the message we are mangling
    const cleanMessages = tmpMessages.filter((msg) => msg._id !== firstInter._id)
    cleanMessages.push(interCopy)
    cleanMessages.push(...relevant)
    tmpPlans = cleanMessages
  }
}

export const AdjudicationFormOpen = Template.bind({})
AdjudicationFormOpen.args = {
  messages: tmpPlans,
  selectedRoleId: allRoles[1],
  phase: Phase.Adjudication,
  forcePlanningActivities: activities
}

// mangle some dates
const firstTurn = turnPeriod[0]
const startTime = moment.utc(firstTurn.gameDate).valueOf()
const secondTurn = turnPeriod[1]
const secondEnd = incrementGameTime(secondTurn.gameDate, secondTurn.gameTurnTime)
const secondEndTime = moment.utc(secondEnd).valueOf()
const secondStartTime = moment.utc(secondTurn.gameDate).valueOf()
const midPoint = secondStartTime + (secondEndTime - secondStartTime) / 2

const newPlans = cloneDeep(planningMessages) as MessagePlanning[]
const msgToMove1 = newPlans[4]
msgToMove1.message.startDate = moment.utc(midPoint).toISOString()
msgToMove1.message.endDate = moment.utc(midPoint + 500000).toISOString()
const msgToMove2 = newPlans[5]
msgToMove2.message.startDate = moment.utc(startTime - 100000).toISOString()
msgToMove2.message.endDate = moment.utc(midPoint + 500000).toISOString()

export const AdjudicateAcrossTurns = Template.bind({})
AdjudicateAcrossTurns.args = {
  messages: newPlans,
  selectedRoleId: allRoles[1],
  allForces: forces,
  phase: Phase.Adjudication,
  forcePlanningActivities: activities
}
