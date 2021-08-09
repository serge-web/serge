import React, { useState } from 'react'

// Import component files
import ChannelRFIMessagesList from './index'
import docs from './README.md'
import { Story } from '@storybook/react/types-6-0'
import { GameMessagesMockRFI } from '@serge/mocks'
import { MessageCustom } from '@serge/custom-types'
import { mostRecentOnly } from '@serge/helpers'
import RFIListPropTypes from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/ChannelRFIMessagesList',
  component: ChannelRFIMessagesList,
  decorators: [wrapper],
  parameters: {
    options: {
      showPanel: true
    },
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    isUmpire: {
      description: 'Player is from umpire force',
      control: 'boolean'
    },
    isRFIManager: {
      description: 'Player role has RFI Manager attribute',
      control: 'boolean'
    },
    role: {
      description: 'Player Role',
      control: {
        type: 'radio',
        options: [
          'Comms',
          'Logistics'
        ]
      }
    }
  }
}

/** RFI message file includes multiple versions of messages,
 * reduce to just the newest one
 */
const newestMessages = mostRecentOnly(GameMessagesMockRFI) as MessageCustom[]

const Template: Story<RFIListPropTypes> = (args) => {
  const { isUmpire, role, isRFIManager } = args
  const icons = ['./images/default_img/forceDefault.png']
  const colors = ['#0F0']
  const [messages, setMessages] = useState<MessageCustom[]>(newestMessages)

  const markAllAsRead = (): void => {
    setMessages(messages.map(msg => ({ ...msg, hasBeenRead: true })))
  }

  const onRead = (detail: MessageCustom): void => {
    const id = detail._id || 'a'
    setMessages(messages.map(msg => {
      if (msg._id === id) msg.hasBeenRead = true
      return msg
    }))
  }
  const handleChange = (nextMsg: MessageCustom): void => {
    setMessages(messages.map(msg => {
      if (msg._id === nextMsg._id) return nextMsg
      return msg
    }))
  }

  return (
    <ChannelRFIMessagesList
      messages={messages}
      icons={icons}
      colors={colors}
      onMarkAllAsRead={markAllAsRead}
      onRead={onRead}
      onChange={handleChange}
      role={role}
      isRFIManager={isRFIManager}
      isUmpire={isUmpire}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  isUmpire: true,
  isRFIManager: true,
  role: { forceId: 'umpire', forceName: 'White', roleId: 'game control', roleName: 'CO' }
}
