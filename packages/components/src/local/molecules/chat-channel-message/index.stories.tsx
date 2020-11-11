import React from 'react'
import Box from '@material-ui/core/Box'
import { styled } from '@material-ui/core/styles'
import { boolean, withKnobs } from '@storybook/addon-knobs'

// Import component files
import ChatChannelMessage from './index'
import docs from './README.md'
import { forces } from '@serge/mocks'
import { forceColors } from '@serge/helpers'

const forceColorList = forceColors(forces)

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

const messages = [
  {
    id: '1',
    title:"lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet",
    timestamp:"2020-09-18T05:41:17.349Z",
    role:"CO",
    messageType:"Chat",
    hasBeenRead: false,
    authorForceId: 'Blue',
    playerForceId: 'Blue',
    isUmpire:true,
    privateMessage:'This is an example of a private message.',
    hasPrivate: false
  },
  {
    id: '2',
    title:"lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet",
    timestamp:"2020-09-18T05:41:17.349Z",
    role:"CO",
    messageType:"Chat",
    hasBeenRead: false,
    authorForceId: 'Blue',
    playerForceId: 'Red',
    isUmpire:true,
    privateMessage:'This is an example of a private message.',
    hasPrivate: false
  }
]

export const Default: React.FC = () => (
  <BlueContainer>
    <ChatChannelMessage
      isUmpire={boolean('Player from umpire force', true)}
      messages={messages}
      colors={forceColorList}
    />
  </BlueContainer>
)
