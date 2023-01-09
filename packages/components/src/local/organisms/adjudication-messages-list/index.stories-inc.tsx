import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React, { useState } from 'react'

// Import component files
import { INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE, PLANNING_MESSAGE } from '@serge/config'
import { ChannelPlanning, MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'
import { forceColors } from '@serge/helpers'
import { P9BMock, planningMessages as planningChannelMessages } from '@serge/mocks'
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
      control: {
        type: 'radio',
        options: [
          'White',
          'Blue',
          'Red'
        ]
      }
    }
  }
}

const planningActivities = wargame.activities ? wargame.activities.activities : []

const Template: Story<MessageListPropTypes> = (args) => {
  const { interactionMessages: messages, playerRoleId } = args
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

  const handler = (contact: any): void => {
    console.log('handling', contact)
  }

  // remove later versions
  const nonInfoMessages = planningChannelMessages.filter((msg: MessageInteraction | MessagePlanning | MessageInfoTypeClipped) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessageInteraction | MessagePlanning>
  const interactionMessages = nonInfoMessages.filter((msg: MessageInteraction | MessagePlanning) => msg.messageType === INTERACTION_MESSAGE) as Array<MessageInteraction>
  const planningMessages = nonInfoMessages.filter((msg: MessageInteraction | MessagePlanning) => msg.messageType === PLANNING_MESSAGE) as Array<MessagePlanning>
  const platformTypes = P9BMock.data.platformTypes ? P9BMock.data.platformTypes.platformTypes : []

  console.log('adj story', planningMessages)
  const gameStartTime = '2022-11-14T03:00:00.000Z' // P9BMock.data.overview.gameDate

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
  />
}

const blueForce = P9BMock.data.forces.forces[0]
const blueRole = blueForce.roles[0]

export const Default = Template.bind({})
Default.args = {
  interactionMessages: [],
  playerRoleId: blueRole.roleId
}
