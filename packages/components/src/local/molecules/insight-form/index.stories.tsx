import React from 'react'
import { Box, styled } from '@material-ui/core'

// Import component files
import InsightForm from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  borderRadius: '2px'
})

export default {
  title: 'local/molecules/InsightForm',
  component: InsightForm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => (
  <InsightForm
    onCancel={(): any => window.alert('Click Cancel')}
    onSend={(): any => window.alert('Click Send')}
  />
)
export const Background: React.FC = () => (
  <BlueContainer color="common.white">
    <InsightForm
      onCancel={(): any => window.alert('Click Cancel')}
      onSend={(): any => window.alert('Click Send')}
      darkMode
    />
  </BlueContainer>
)
