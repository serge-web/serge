import React from 'react'
import Box from '@material-ui/core/Box'
import { styled } from '@material-ui/core/styles'
import { boolean, withKnobs } from '@storybook/addon-knobs'

// Import component files
import ChatMessagesList from './index'
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
  title: 'local/organisms/ChatMessagesList',
  component: ChatMessagesList,
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
    title: 'MESSAGE ONE ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet',
    timestamp: '2020-09-18T05:41:17.349Z',
    role: 'CO',
    messageType: 'Chat',
    hasBeenRead: true,
    authorForceId: 'Red',
    playerForceId: 'White',
    privateMessage: 'This is first example of a private message.'
  },
  {
    id: '2',
    title: 'MESSAGE TWO ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet',
    timestamp: '2020-09-18T05:43:17.349Z',
    role: 'ENG',
    messageType: 'Chat',
    hasBeenRead: false,
    authorForceId: 'Blue',
    playerForceId: 'White',
    isUmpire: false,
    privateMessage: 'This is second example of a private message.'
  },
  {
    id: '3',
    title: 'MESSAGE THREE ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet',
    timestamp: '2020-09-18T05:45:17.349Z',
    role: 'ENG',
    messageType: 'Chat',
    hasBeenRead: false,
    authorForceId: 'White',
    playerForceId: 'White',
    isUmpire: false,
    privateMessage: 'This is second example of a private message.'
  }
]

export const Default: React.FC = () => (
  <BlueContainer>
    <ChatMessagesList
      isUmpire={boolean('Player from umpire force', true)}
      messages={messages}
      colors={forceColorList}
      onSendMessage={(): any => console.log('hi')}
      onChange={(): any => console.log('hello')}
    />
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
