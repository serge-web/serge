import React from 'react'
import Box from '@material-ui/core/Box'
import { styled } from '@material-ui/core/styles'
import { forces } from "@serge/mocks";
import { withKnobs, radios, boolean } from '@storybook/addon-knobs'

// Import component files
import ChatMessageBubble from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  padding: '20px',
  borderRadius: '2px'
})
const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>
export default {
  title: 'local/molecules/ChatMessageBubble',
  component: ChatMessageBubble,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const forceValues = {
  Blue: 'Blue',
  White: 'White',
  Red: 'Red'
}

export const Default: React.FC = () => (
  <BlueContainer>
    <ChatMessageBubble
      title="lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet"
      timestamp="2020-09-18T05:41:17.349Z"
      role="CO"
      messageType="Chat"
      hasBeenRead={boolean('Has been read', false)}
      authorForceId={radios('Author force', forceValues, 'Blue')}
      playerForceId={radios('Player force', forceValues, 'Blue')}
      forces={forces}
    />
  </BlueContainer>
)
