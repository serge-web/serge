import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React, { useState } from 'react'

// Import component files
import { MessagePlanning } from '@serge/custom-types'
import { mostRecentPlanningOnly } from '@serge/helpers'
import { planningMessages } from '@serge/mocks'
import PlanningMessagesList from './index'
import docs from './README.md'
import MessageListPropTypes from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/PlanningMessagesList',
  component: PlanningMessagesList,
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
  const { messages, playerForceId, hideForcesInChannel } = args
  const icons = [
    './images/default_img/forceDefault.png'
  ]
  const colors = [
    '#0F0'
  ]
  const names = [
    'Blue'
  ]
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
  const newestMessages = mostRecentPlanningOnly(planningMessages)

  return <PlanningMessagesList
    messages={newestMessages}
    icons={icons}
    playerForceId={playerForceId}
    colors={colors}
    names={names}
    onMarkAllAsRead={markAllAsRead}
    onRead={onRead}
    isUmpire={true}
    role={'Comms'}
    hideForcesInChannel={hideForcesInChannel}
  />
}

export const Default = Template.bind({})
Default.args = {
  messages: [],
  playerForceId: 'Blue',
  hideForcesInChannel: true
}
