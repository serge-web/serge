import React from 'react'
import Box from '@material-ui/core/Box'
import { styled } from '@material-ui/core/styles'
import { withKnobs } from '@storybook/addon-knobs'

// Import component files
import ChatChannelMessage from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  padding: '20px',
  borderRadius: '2px'
})
const wrapper: React.FC = (storyFn: any) => <div>{storyFn()}</div>
export default {
  title: 'local/molecules/ChatChannelMessage',
  component: ChatChannelMessage,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => (
  <BlueContainer>
    <ChatChannelMessage />
  </BlueContainer>
)
