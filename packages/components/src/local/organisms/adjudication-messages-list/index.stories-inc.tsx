import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React, { useState } from 'react'

// Import component files
import { INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE, PLANNING_MESSAGE } from '@serge/config'
import { ChannelPlanning, MessageInfoTypeClipped, MessageInteraction, MessagePlanning } from '@serge/custom-types'
import { forceColors } from '@serge/helpers'
import { P9Mock, planningMessages as planningChannelMessages, planningMessageTemplatesMock } from '@serge/mocks'
import { noop } from 'lodash'
import AdjudicationMessagesList from './index'
import docs from './README.md'
import MessageListPropTypes from './types/props'

const planningChannel = P9Mock.data.channels.channels[0] as ChannelPlanning
const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>
const forces = P9Mock.data.forces.forces

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

const Template: Story<MessageListPropTypes> = (args) => {
  const { interactionMessages: messages, playerForceId, playerRoleId, hideForcesInChannel } = args
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

  // remove later versions
  const nonInfoMessages = planningChannelMessages.filter((msg: MessageInteraction | MessagePlanning | MessageInfoTypeClipped) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessageInteraction | MessagePlanning>
  const interactionMessages = nonInfoMessages.filter((msg: MessageInteraction | MessagePlanning) => msg.messageType === INTERACTION_MESSAGE) as Array<MessageInteraction>
  const planningMessages = nonInfoMessages.filter((msg: MessageInteraction | MessagePlanning) => msg.messageType === PLANNING_MESSAGE) as Array<MessagePlanning>

  return <AdjudicationMessagesList
    forces={forces}
    setSelectedOrders={noop}
    selectedOrders={[]}
    interactionMessages={interactionMessages}
    planningMessages={planningMessages}
    forceColors={forceColors(forces)}
    channel={planningChannel}
    gameDate={P9Mock.data.overview.gameDate}
    template={planningMessageTemplatesMock[0]}
    playerForceId={playerForceId}
    playerRoleId={playerRoleId}
    onMarkAllAsRead={markAllAsRead}
    onRead={onRead}
    isUmpire={true}
    hideForcesInChannel={hideForcesInChannel}
  />
}

const blueForce = P9Mock.data.forces.forces[0]
const blueRole = blueForce.roles[0]

export const Default = Template.bind({})
Default.args = {
  interactionMessages: [],
  playerForceId: blueForce.uniqid,
  playerRoleId: blueRole.roleId,
  hideForcesInChannel: true
}
