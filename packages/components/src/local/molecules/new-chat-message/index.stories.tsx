import React from 'react'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import { withKnobs, boolean } from '@storybook/addon-knobs'

// Import component files
import NewChatMessage from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  padding: '20px',
  borderRadius: '2px',
  color: '#fff'
})

export default {
  title: 'local/molecules/NewChatMessage',
  component: NewChatMessage,
  decorators: [withKnobs, (story: Function): React.ReactElement => (
    <BlueContainer>{ story() }</BlueContainer>
  )],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  return (
    <NewChatMessage isUmpire={boolean('Player from umpire force', true)} onSendMessage={(): any => window.alert('Click Send')} onChange={(): any => console.log('here')} />
  )
}

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
