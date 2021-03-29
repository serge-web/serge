import React, { useState } from 'react'

// Import component files
import ChannelMessage from './index'
import docs from './README.md'

import { GameMessagesMockRFI } from '@serge/mocks'

export default {
  title: 'local/molecules/ChannelRFIMessage',
  component: ChannelMessage,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const [defMessage] = GameMessagesMockRFI

export const Default: React.FC = () => {
  const [message, setMessage] = useState(defMessage)
  return (
    <ChannelMessage
      message={message}
      borderColor='#0F0'
      isRFIManager={true}
      onRead={(readMessage): void => setMessage({ ...readMessage, hasBeenRead: true })}
      onChange={(nextMessage): void => setMessage(nextMessage)}
      role='CO'
      isUmpire={true}
    />
  )
}
