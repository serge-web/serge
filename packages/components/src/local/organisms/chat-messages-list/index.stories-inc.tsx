import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { withKnobs } from '@storybook/addon-knobs'

import { ChatMessagesMock, InfoMessagesMock } from '@serge/mocks'
import Props from './types/props'
import { ChatMessage, MessageInfoTypeClipped } from '@serge/custom-types'

// Import component files
import ChatMessagesList from './index'
import docs from './README.md'

export default {
  title: 'local/organisms/ChatMessagesList',
  component: ChatMessagesList,
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
    isUmpire: {
      description: 'Player from umpire force'
    },
    hideForcesInChannel: {
      description: 'Whether to hide forces in channel'
    },
    hideAuthor: {
      description: 'Whether hide force/role of author',
      control: {
        type: 'boolean'
      }
    },
    playerForce: {
      description: 'Force the player belongs to',
      control: {
        type: 'radio',
        defaultValue: 'Blue',
        options: [
          'White',
          'Blue',
          'Red'
        ]
      }
    }
  }
}
const force = {
  name: 'Blue',
  color: '#6699cc',
  icon: ''
}

const info = InfoMessagesMock as Array<ChatMessage | MessageInfoTypeClipped>
const chat = ChatMessagesMock as Array<ChatMessage | MessageInfoTypeClipped>
const messages = info.concat(chat)
const chatMessage = chat[1] as ChatMessage
const playerRole = chatMessage.details.from.roleId

const Template: Story<Props> = (args) => {
  const icons = [
    './images/default_img/forceDefault.png'
  ]
  const colors = [
    '#0F0'
  ]
  const names = [
    'Blue'
  ]
  const { playerForce, isUmpire, hideForcesInChannel, hideAuthor } = args
  return <ChatMessagesList
    messages={messages}
    icons={icons}
    playerForce={playerForce}
    playerRole={playerRole}
    isUmpire={isUmpire}
    colors={colors}
    names={names}
    hideForcesInChannel={hideForcesInChannel}
    hideAuthor={hideAuthor}
  />
}

export const Demonstration = Template
Demonstration.args = {
  isUmpire: true,
  playerForce: force.name,
  hideForcesInChannel: false,
  hideAuthor: false
}
