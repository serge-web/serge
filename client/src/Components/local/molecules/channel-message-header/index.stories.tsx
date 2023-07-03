import React from 'react'

// Import component files
import ChannelMessageHeader from './index'
import docs from './README.md'

export default {
  title: 'local/molecules/ChannelMessageHeader',
  component: ChannelMessageHeader,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => (
  <ChannelMessageHeader
    isOpen={false}
    title="lorem ipsum do lor sit amet"
    timestamp="2020-09-18T05:41:17.349Z"
    role="CO"
    messageType="Chat"
    hasBeenRead={false}
    forceColor={'#000'}
  />
)

export const Opened: React.FC = () => (
  <ChannelMessageHeader
    isOpen={true}
    title="lorem ipsum do lor sit amet"
    timestamp="2020-09-18T05:41:17.349Z"
    role="CO"
    messageType="Chat"
    hasBeenRead={true}
    forceColor={'#000'}
  />
)
