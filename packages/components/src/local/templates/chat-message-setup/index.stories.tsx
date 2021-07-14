import React from 'react'

// Import component files
import ChatMessageSetup from './index'
import docs from './README.md'
import { Story } from '@storybook/react/types-6-0'
import { ChatMessagesMock } from '@serge/mocks'
import Props from './types/props'

export default {
  title: 'local/templates/ChatMessageSetup',
  component: ChatMessageSetup,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    isUmpire: {
      description: 'Player from umpire force'
    },
    forceName: {
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
  icon: '',
  iconURL: ''
}

const Template: Story<Props> = (args) => {
  const { selectedForce, isUmpire, userId, forceName } = args
  return <ChatMessageSetup
    isUmpire={isUmpire}
    forceName={forceName}
    userId={userId}
    chatChannel={ChatMessagesMock}
    selectedForce={selectedForce}
    selectedRole="Game Control" />
}

export const Demonstration = Template
Demonstration.args = {
  isUmpire: true,
  selectedForce: force,
  forceName: 'Blue',
  userId: 'CO'
}
