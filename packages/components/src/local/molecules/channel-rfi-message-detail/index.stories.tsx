import React, { useState } from 'react'
import { withKnobs } from '@storybook/addon-knobs'

// Import component files
import ChannelRfiMessageDetail from './index'
import docs from './README.md'
import { GameMessagesMockRFI } from '@serge/mocks'
const [defMessage] = GameMessagesMockRFI

export default {
  title: 'local/molecules/ChannRfilMessageDetail',
  component: ChannelRfiMessageDetail,
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}

export const Default: React.FC = () => {
  const [message, setMessage] = useState(defMessage)
  return (
    <ChannelRfiMessageDetail
      message={message}
      onChange={nextMessage => setMessage(nextMessage)}
      role='CO'
      isUmpire={true}
    />
  )
}
