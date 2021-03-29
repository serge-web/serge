import React, { useState } from 'react'

// Import component files
import ChannelRFIMessagesList from './index'
import docs from './README.md'
import { GameMessagesMockRFI } from '@serge/mocks'
import { MessageCustom } from '@serge/custom-types'
import { mostRecentOnly } from '@serge/helpers'

export default {
  title: 'local/organisms/ChannelRFIMessagesList',
  component: ChannelRFIMessagesList,
  decorators: [],
  parameters: {
    options: {
      // No addons are used in this story so don't show the addon panel
      showPanel: false
    },
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

/** RFI message file includes multiple versions of messages,
 * reduce to just the newest one
 */
const newestMessages = mostRecentOnly(GameMessagesMockRFI)

export const Default: React.FC = () => {
  const icons = ['./images/default_img/forceDefault.png']
  const colors = ['#0F0']
  const [messages, setMessages] = useState<MessageCustom[]>(newestMessages)

  const markAllAsRead = (): void => {
    setMessages(messages.map(msg => ({ ...msg, hasBeenRead: true })))
  }
  const onRead = ({ _id }: MessageCustom): void => {
    setMessages(messages.map(msg => {
      if (msg._id === _id) msg.hasBeenRead = true
      return msg
    }))
  }
  const handleChange = (nextMsg: MessageCustom): void => {
    setMessages(messages.map(msg => {
      if (msg._id === nextMsg._id) return nextMsg
      return msg
    }))
  }

  return <ChannelRFIMessagesList
    messages={messages}
    icons={icons}
    colors={colors}
    onMarkAllAsRead={markAllAsRead}
    onRead={onRead}
    onChange={handleChange}
    role='CO'
    isRFIManager={true}
    isUmpire={true}
  />
}
