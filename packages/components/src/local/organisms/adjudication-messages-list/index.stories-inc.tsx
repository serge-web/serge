import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React, { useEffect, useState } from 'react'

// Import component files
import { INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE, PLANNING_MESSAGE } from '@serge/config'
import { ChannelPlanning, InteractionDetails, MessageAdjudicationOutcomes, MessageDetails, MessageDetailsFrom, MessageInfoTypeClipped, MessageInteraction, MessagePlanning, Role } from '@serge/custom-types'
import { forceColors, incrementGameTime } from '@serge/helpers'
import { P9BMock, planningMessages as planningChannelMessages } from '@serge/mocks'
import uniqBy from 'lodash/uniqBy'
import moment from 'moment-timezone'
import { getNextInteraction2, InteractionResults } from './helpers/getNextInteraction'
import AdjudicationMessagesList from './index'
import docs from './README.md'
import MessageListPropTypes from './types/props'

const wargame = P9BMock.data
const planningChannel = P9BMock.data.channels.channels[0] as ChannelPlanning
const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>
const forces = P9BMock.data.forces.forces

console.clear()

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
  const { playerRoleId } = args
  const [isRead, setIsRead] = useState([true, false])

  const markAllAsRead = (): void => {
    setIsRead(isRead.map(() => true))
  }
  const onRead = (detail: MessagePlanning): void => {
    const newState = isRead.map((state, id) => {
      if (id === messages.findIndex((item: any) => item._id === detail._id)) {
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
      message: outcomes,
      hasBeenRead: false
    }
    setMessages([...messages, newMessage])
  }

  const handler2 = (details: MessageDetails, outcomes: MessageAdjudicationOutcomes): void => {
    const newMessage: MessageInteraction = {
      _id: moment().toISOString(),
      // defined constat for messages, it's not same as message.details.messageType,
      // ex for all template based messages will be used CUSTOM_MESSAGE Type
      messageType: 'InteractionMessage',
      details,
      message: outcomes,
      hasBeenRead: false
    }
    setMessages([...messages, newMessage])
  }

  const [messages, setMessages] = useState<Array<MessageInteraction | MessagePlanning | MessageInfoTypeClipped>>(copyMessages)
  const [planningMessages, setPlanningMessages] = useState<Array<MessagePlanning>>([])
  const [interactionMessages, setInteractionMessages] = useState<Array<MessageInteraction>>([])

  useEffect(() => {
    console.log('messages effect')
    const nonInfoMessages = messages.filter((msg: MessageInteraction | MessagePlanning | MessageInfoTypeClipped) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessageInteraction | MessagePlanning>
    const interactions = nonInfoMessages.filter((msg: MessageInteraction | MessagePlanning) => msg.messageType === INTERACTION_MESSAGE) as Array<MessageInteraction>
    // reverse list, so we only show the latest instance
    const reverseInter = interactions.reverse() as Array<MessageInteraction>
    const deDupeInteractions = uniqBy(reverseInter, function (inter: MessageInteraction) {
      return inter.message.Reference
    })
    setInteractionMessages(deDupeInteractions)
    setPlanningMessages(nonInfoMessages.filter((msg: MessageInteraction | MessagePlanning) => msg.messageType === PLANNING_MESSAGE) as Array<MessagePlanning>)
  }, [messages])

  // remove later versions
  const platformTypes = P9BMock.data.platformTypes ? P9BMock.data.platformTypes.platformTypes : []
  const gameStartTime = '2022-11-14T03:00:00.000Z' // P9BMock.data.overview.gameDate

  // run through an adjudication
  const interactions: MessageInteraction[] = []
  const gameStartTimeLocal = P9BMock.data.overview.gameDate
  const turnLength = P9BMock.data.overview.gameTurnTime
  const turnEnd = incrementGameTime(gameStartTimeLocal, turnLength)
  console.log('game start time', gameStartTimeLocal)
  const results: InteractionResults | false = !7 && planningMessages.length && getNextInteraction2(planningMessages, planningActivities, interactions, 0, 30, gameStartTimeLocal, turnEnd, forces, false)
  console.log('next interaction', results)

  const templates = wargame.templates ? wargame.templates.templates : []
  return <AdjudicationMessagesList
    forces={forces}
    platformTypes={platformTypes}
    interactionMessages={interactionMessages}
    planningMessages={planningMessages}
    forceColors={forceColors(forces)}
    channel={planningChannel}
    gameDate={gameStartTime}
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
  playerRoleId: umpireFole.roleId
}
