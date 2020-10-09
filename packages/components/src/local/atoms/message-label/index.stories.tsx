import React from 'react'
import { Box, styled } from '@material-ui/core'

// Import component files
import MessageLabel from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#394959',
  padding: '20px'
})

export default {
  title: 'local/atoms/MessageLabel',
  component: MessageLabel,
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
    <MessageLabel label="Default" />
  </BlueContainer>
)
