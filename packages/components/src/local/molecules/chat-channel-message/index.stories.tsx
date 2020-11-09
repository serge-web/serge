import React from 'react'
import Box from '@material-ui/core/Box'
import { styled } from '@material-ui/core/styles'
import { boolean, radios, withKnobs } from '@storybook/addon-knobs'

// Import component files
import ChatChannelMessage from './index'
import docs from './README.md'
import { forces } from '@serge/mocks'
import { forceColors } from '@serge/helpers'

const forceColorList = forceColors(forces)

const forceValues = {
  Blue: 'Blue',
  White: 'White',
  Red: 'Red'
}

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
    <ChatChannelMessage 
      title="lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet"
      timestamp="2020-09-18T05:41:17.349Z"
      role="CO"
      messageType="Chat"
      hasBeenRead={boolean('Has been read', false)}
      authorForceId={radios('Author force', forceValues, 'Blue')}
      playerForceId={radios('Player force', forceValues, 'Blue')}
      forceColors={forceColorList}
      isUmpire={boolean('Player from umpire force', true)}
      privateMessage={'This is an example of a private message.'}
      hasPrivate={boolean('Has Private Message', false)}
    />
  </BlueContainer>
)
