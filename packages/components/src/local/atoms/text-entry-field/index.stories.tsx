import React from 'react'
import { Box, styled } from '@material-ui/core'
import { withKnobs } from '@storybook/addon-knobs'

// Import component files
import TextEntryField from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#394959',
  padding: '20px'
}) 

export default {
  title: 'local/atoms/TextEntryField',
  component: TextEntryField,
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => (
  <BlueContainer>
    <TextEntryField fullWidth variant="filled" placeholder="type the text" />
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
