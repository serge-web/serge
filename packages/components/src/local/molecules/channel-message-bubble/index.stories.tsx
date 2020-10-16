import React from 'react'
import Box from '@material-ui/core/Box'
import { styled } from '@material-ui/core/styles'

// Import component files
import ChannelMessageBubble from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  padding: '20px',
  borderRadius: '2px'
})

export default {
  title: 'local/molecules/ChannelMessageBubble',
  component: ChannelMessageBubble,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => (
  <BlueContainer>
    <ChannelMessageBubble
      title="lorem ipsum do lor sit amet"
      timestamp="2020-09-18T05:41:17.349Z"
      role="CO"
      messageType="Chat"
      hasBeenRead={false}
    />
  </BlueContainer>
)
