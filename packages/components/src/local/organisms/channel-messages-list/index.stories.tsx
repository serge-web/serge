import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import MessageListPropTypes from './types/props'
import ChannelMessagesList from './index'
import docs from './README.md'
import { GameMessagesMockRFI } from '@serge/mocks'
import { MessageCustom, MessageChannel } from '@serge/custom-types'
import { mostRecentOnly } from '@serge/helpers'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/ChannelMessagesList',
  component: ChannelMessagesList,
  decorators: [wrapper],
  parameters: {
    options: {
      // No addons are used in this story so don't show the addon panel
      showPanel: false
    },
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    isRFIManager: {
      description: 'Whether current player is RFI manager'
    },
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
  const { messages, playerForceId } = args
  const icons = [
    './images/default_img/forceDefault.png'
  ]
  const colors = [
    '#0F0'
  ]
  const [isRead, setIsRead] = useState([true, false])

  const markAllAsRead = (): void => {
    setIsRead(isRead.map(() => true))
  }
  const onRead = (detail: MessageCustom): void => {
    const newState = isRead.map((state, id) => {
      if (id === messages.findIndex((item: any) => item._id === detail._id)) {
        state = true
      }
      return state
    })
    setIsRead(newState)
  }

  // remove later versions
  const newestMessages = mostRecentOnly(messages)

  return <ChannelMessagesList
    messages={newestMessages}
    icons={icons}
    playerForceId={playerForceId}
    colors={colors}
    onMarkAllAsRead={markAllAsRead}
    onRead={onRead}
    isUmpire={true}
    role={'Comms'}
  />
}

export const LocalTest = Template.bind({})
LocalTest.args = {
  messages: [],
  playerForceId: 'Blue'
}

export const RFITest = Template.bind({})
RFITest.args = {
  messages: GameMessagesMockRFI as unknown as MessageChannel[],
  playerForceId: 'Blue'
}
