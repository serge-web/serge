import React from 'react'
import { Box, styled } from '@material-ui/core'
import { withKnobs, boolean, number } from '@storybook/addon-knobs'

// Import component files
import ChatTextInput from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#394959',
  padding: '20px'
})

export default {
  title: 'local/atoms/ChatTextInput',
  component: ChatTextInput,
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const rowValues = {
  range: true,
  min: 1,
  max: 4,
  step: 1
}

export const Default: React.FC = () => (
  <BlueContainer>
    <ChatTextInput multiline={boolean('Multi-Line', true)} fullWidth variant="filled" placeholder="type the text" rowsMax={number('Max rows', 4, rowValues)} rows={number('Rows', 2, rowValues)}/>
  </BlueContainer>
)

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
