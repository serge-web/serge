import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React, { useEffect, useState } from 'react'

// Import component files
import { INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE, Phase, PLANNING_MESSAGE } from '@serge/config'
import { Asset, ChannelPlanning, CoreMessage, InteractionDetails, MessageAdjudicationOutcomes, MessageDetails, MessageDetailsFrom, MessageInfoTypeClipped, MessageInteraction, MessagePlanning, Role } from 'src/custom-types'
import { forceColors } from '@serge/helpers'
import { P9BMock, planningMessages as planningChannelMessages, turnPeriod } from '@serge/mocks'
import uniqBy from 'lodash/uniqBy'
import moment from 'moment-timezone'
import AdjudicationMessagesList from './index'
import docs from './README.md'
import MessageListPropTypes from './types/props'

const wargame = P9BMock.data
const planningChannel = P9BMock.data.channels.channels[0] as ChannelPlanning
const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>
const forces = P9BMock.data.forces.forces

// console.clear()

export default {
  title: 'local/organisms/AdjudicationMessagesList',
  component: AdjudicationMessagesList,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    playerForceId: {
      name: 'Player force',
      defaultValue: 'Blue',
      options: [
        'White',
        'Blue',
        'Red'
      ],
      control: {
        type: 'radio'
      }
    }
  }
}

const planningActivities = wargame.activities ? wargame.activities.activities : []

const copyMessages = JSON.parse(JSON.stringify(planningChannelMessages)) as Array<MessagePlanning | MessageInteraction | MessageInfoTypeClipped>

const Template: Story<MessageListPropTypes> = (args) => {
  const { playerRoleId, messages, gameDate } = args
  const [isRead, setIsRead] = useState([true, false])

  const markAllAsRead = (): void => {
    setIsRead(isRead.map(() => true))
  }
  const onRead = (detail: MessagePlanning): void => {
    const newState = isRead.map((state, id) => {
      if (id === localMessages.findIndex((item: any) => item._id === detail._id)) {
        state = true
      }
      return state
    })
    setIsRead(newState)
  }

  const handler = (interDetails: InteractionDetails, outcomes: MessageAdjudicationOutcomes): void => {
    const selectedForce = forces[0]
    const role = selectedForce.roles.find((role: Role) => role.roleId === playerRoleId)
    const from: MessageDetailsFrom = {
      force: selectedForce.uniqid,
      forceId: selectedForce.uniqid,
      forceColor: selectedForce.color,
      iconURL: selectedForce.iconURL,
      roleId: (role && role.roleId) || '',
      roleName: (role && role.name) || ''
    }
    const details: MessageDetails = {
      channel: 'any',
      from: from,
      interaction: interDetails,
      messageType: 'any',
      timestamp: moment().toISOString(),
      turnNumber: 3
    }
    const newMessage: MessageInteraction = {
      _id: moment().toISOString(),
      // defined constat for messages, it's not same as message.details.messageType,
      // ex for all template based messages will be used CUSTOM_MESSAGE Type
      messageType: 'InteractionMessage',
      details,
      message: { ...outcomes, Reference: 'umpire-' + (interactionMessages.length + 1) },
      hasBeenRead: false
    }
    setLocalMessages([...localMessages, newMessage])
  }

  const handler2 = (details: MessageDetails, outcomes: MessageAdjudicationOutcomes): void => {
    const newMessage: MessageInteraction = {
      _id: moment().toISOString(),
      // defined constat for messages, it's not same as message.details.messageType,
      // ex for all template based messages will be used CUSTOM_MESSAGE Type
      messageType: 'InteractionMessage',
      message: outcomes,
      details,
      hasBeenRead: false
    }
    setLocalMessages([...localMessages, newMessage])
  }

  const [localMessages, setLocalMessages] = useState<Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped>>(messages as Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped>)
  const [planningMessages, setPlanningMessages] = useState<Array<MessagePlanning>>([])
  const [interactionMessages, setInteractionMessages] = useState<Array<MessageInteraction>>([])

  useEffect(() => {
    const nonInfoMessages = localMessages.filter((msg: MessageInteraction | MessagePlanning | MessageInfoTypeClipped) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessageInteraction | MessagePlanning>
    const interactions = nonInfoMessages.filter((msg: MessageInteraction | MessagePlanning) => msg.messageType === INTERACTION_MESSAGE) as Array<MessageInteraction>
    // reverse list, so we only show the latest instance
    const reverseInter = interactions.reverse() as Array<MessageInteraction>
    const deDupeInteractions = uniqBy(reverseInter, function (inter: MessageInteraction) {
      return inter.message.Reference
    })
    const correctOrder = deDupeInteractions.reverse() as Array<MessageInteraction>
    setInteractionMessages(correctOrder)
    setPlanningMessages(nonInfoMessages.filter((msg: MessageInteraction | MessagePlanning) => msg.messageType === PLANNING_MESSAGE) as Array<MessagePlanning>)
  }, [localMessages])

  // remove later versions
  const platformTypes = P9BMock.data.platformTypes ? P9BMock.data.platformTypes.platformTypes : []
  // const gameStartTime = '2022-11-14T03:00:00.000Z' // P9BMock.data.overview.gameDate

  // run through an adjudication
  // const interactions: MessageInteraction[] = []
  const gameStartTimeLocal = gameDate || P9BMock.data.overview.gameDate

  // const turnLength = P9BMock.data.overview.gameTurnTime
  // const turnEnd = incrementGameTime(gameStartTimeLocal, turnLength)
  // const results: InteractionResults | false = !7 && planningMessages.length && getNextInteraction2(planningMessages, planningActivities, interactions, 0, 30, gameStartTimeLocal, turnEnd, forces, false)
  // console.log('next interaction', results)

  const templates = wargame.templates ? wargame.templates.templates : []
  return <AdjudicationMessagesList
    currentWargame={P9BMock.name}
    forces={forces}
    periods={turnPeriod}
    platformTypes={platformTypes}
    currentTurn={1}
    phase={Phase.Adjudication}
    interactionMessages={interactionMessages}
    turnPlanningMessages={planningMessages}
    allPlanningMessages={planningMessages}
    forceColors={forceColors(forces)}
    channel={planningChannel}
    gameDate={gameStartTimeLocal}
    gameTurnLength={P9BMock.data.overview.gameTurnTime}
    template={templates[0]}
    playerRoleId={playerRoleId}
    onMarkAllAsRead={markAllAsRead}
    onRead={onRead}
    turnFilter={-1}
    forcePlanningActivities={planningActivities}
    handleAdjudication={handler}
    mapPostBack={handler2}
  />
}

const umpireForce = P9BMock.data.forces.forces[0]
const umpireFole = umpireForce.roles[1]

export const Default = Template.bind({})
Default.args = {
  playerRoleId: umpireFole.roleId,
  messages: copyMessages as CoreMessage[]
}

const planningMessages = copyMessages.filter((msg: MessagePlanning | MessageInteraction | MessageInfoTypeClipped) => {
  if (msg.messageType !== INFO_MESSAGE_CLIPPED) {
    return msg.details.messageType !== 'p9adjudicate'
  }
  return true
}) as MessagePlanning[]

// const interMessages = copyMessages.filter((msg: MessagePlanning | MessageInteraction | MessageInfoTypeClipped) => {
//   if (msg.messageType !== INFO_MESSAGE_CLIPPED) {
//     return msg.details.messageType === 'p9adjudicate'
//   }
//   return false
// })

// const oneInterMessage = planningMessages.concat(interMessages[0] as MessagePlanning)
// export const OneInteraction = Template.bind({})
// OneInteraction.args = {
//   playerRoleId: umpireFole.roleId,
//   messages: oneInterMessage as CoreMessage[]
// }

// const openInter = JSON.parse(JSON.stringify(interMessages[0])) as MessageInteraction
// if (openInter.details.interaction) {
//   openInter.details.interaction.complete = false
//   openInter.details.from = { ...openInter.details.from, roleId: umpireFole.roleId }
// }
// const firstAsset = forces[1].assets ? forces[1].assets[0].uniqid : 'unknown'
// openInter.message.perceptionOutcomes.push({ force: forces[1].uniqid, asset: firstAsset })
// const oneOpenInterMessage = planningMessages.concat(openInter as any as MessagePlanning)

// export const OneOpenInteraction = Template.bind({})
// OneOpenInteraction.args = {
//   playerRoleId: umpireFole.roleId,
//   messages: oneOpenInterMessage as CoreMessage[]
// }

// export const ZeroInteractions = Template.bind({})
// ZeroInteractions.args = {
//   playerRoleId: umpireFole.roleId,
//   messages: planningMessages as CoreMessage[]
// }

// find an istar asset
let istarAsset: Asset | undefined
forces.some((force) => {
  return force.assets && force.assets.some((asset) => {
    if (asset.platformTypeId.toLowerCase().includes('istar')) {
      istarAsset = asset
      return true
    } else {
      return false
    }
  })
})
const istarEvent = planningMessages.find((msg) => msg.message.activity.includes('ISTAR') && msg.message.ownAssets && msg.message.ownAssets.length > 0)
if (istarAsset && istarEvent && istarEvent.message.ownAssets) {
  istarEvent.message.ownAssets.push({ asset: istarAsset.uniqid, number: 4 })
}
const eventIdsOfInterest = istarEvent ? [istarEvent.message.Reference] : []
export const TestIstar = Template.bind({})
TestIstar.args = {
  playerRoleId: umpireFole.roleId,
  messages: planningMessages.filter((msg: MessagePlanning) => eventIdsOfInterest.includes(msg.message.Reference))
}

// const interactionIdsOfInterest = ['Red-5', 'Blue-17']
// const istarInterMessages = planningMessages.filter((msg: MessagePlanning) => interactionIdsOfInterest.includes(msg.message.Reference)) as CoreMessage[]
// // get an adjudication
// const openInter2 = JSON.parse(JSON.stringify(interMessages[0])) as MessageInteraction
// if (openInter2.details && openInter2.details.interaction) {
//   //  openInter2.details.interaction = { ...openInter2.details.interaction, id: 'm_f-red_9 i-random' }
//   istarInterMessages.push(openInter2)
// }
// export const istarInteraction = Template.bind({})
// istarInteraction.args = {
//   playerRoleId: umpireFole.roleId,
//   gameDate: '2022-05-01T00:05:00.000Z',
//   messages: istarInterMessages
// }

// const cyberEvent = ['Blue-17']
// export const CyberEvent = Template.bind({})
// CyberEvent.args = {
//   playerRoleId: umpireFole.roleId,
//   messages: planningMessages.filter((msg: MessagePlanning) => cyberEvent.includes(msg.message.Reference)) as CoreMessage[]
// }

// const idsOfInterest = ['Green-5']
// const greenMission = planningMessages.find((msg) => idsOfInterest.includes(msg.message.Reference))
// if (greenMission) {
//   greenMission.message.activity = 'f-red-Air-Stand Off Strike'
//   // mangle the opp assetsc
//   const blueF = forces[1].assets || []
//   const airfields = blueF.filter((asset) => asset.attributes && asset.attributes.a_Type === 'Airfield')
//   const rndA = airfields.length > 2 && airfields[Math.floor(airfields.length / 2)]
//   const other = greenMission.message.otherAssets
//   if (other && rndA) {
//     other.push({ asset: rndA.uniqid })
//   }
// }

// export const TestSubjects = Template.bind({})
// TestSubjects.args = {
//   playerRoleId: umpireFole.roleId,
//   messages: planningMessages.filter((msg: MessagePlanning) => idsOfInterest.includes(msg.message.Reference)) as CoreMessage[]
// }
