import React from 'react'

// Import component files
import ChatMessageSetup from './index'
import docs from './README.md'
import { Story } from '@storybook/react/types-6-0'
import { ChatMessagesMock } from '@serge/mocks'
import Props from './types/props'
import { TurnFormats } from '../../../../../config/build'

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
    },
    turnPresentation: {
      name: 'Turn Format',
      control: {
        type: 'radio',
        defaultValue: TurnFormats.Natural,
        options: [
          TurnFormats.Natural,
          TurnFormats.TurnPairNumbers,
          TurnFormats.TurnPairLetters
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
  const { selectedForce, isUmpire, userId, forceName, turnPresentation } = args
  return <ChatMessageSetup
    isUmpire={isUmpire}
    forceName={forceName}
    userId={userId}
    chatChannel={ChatMessagesMock}
    turnPresentation={turnPresentation}
    selectedForce={selectedForce}
    selectedRoleName="Game Control"
    selectedRole="u235" />
}

export const Demonstration = Template
Demonstration.args = {
  isUmpire: true,
  selectedForce: force,
  turnPresentation: TurnFormats.Natural,
  forceName: 'Blue',
  userId: 'CO'
}
