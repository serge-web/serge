import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { ChatMessagesMock } from '@serge/mocks'
import Props from './types/props'

// Import component files
import ChatMessagesList from './index'
import docs from './README.md'

export default {
  title: 'local/organisms/ChatMessagesList',
  component: ChatMessagesList,
  decorators: [],
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
    },
  }
}

const Template: Story<Props> = (args) => {
  const icons = [
    './images/default_img/forceDefault.png'
  ]
  const colors = [
    '#0F0'
  ]
  const { playerForce, isUmpire } = args
  return <ChatMessagesList
    messages={ChatMessagesMock}
    icons={icons}
    playerForce={playerForce}
    isUmpire={isUmpire}
    colors={colors}
  />
}

export const Demonstration = Template
Demonstration.args = {
  isUmpire: true,
  playerForce: 'Red'
}

