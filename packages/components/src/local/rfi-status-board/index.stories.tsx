import React from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import RfiStatusBoard from './index'
import docs from './README.md'

import { GameChannels, GameMessagesMockRFI } from '@serge/mocks'

import Props from './types/props'

export default {
  title: 'local/RfiStatusBoard',
  component: RfiStatusBoard,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // We have no addons enabled in this story, so the addon panel should be hidden
      showPanel: true
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
    roles: {
      description: 'Player Roles'
    },
    channels: {
      description: 'All channels of selected player'
    },
    rfiMessages: {
      description: 'RFI message form all RFI channels'
    }
  }
}

const roles = [
  'Game Control',
  'Logistics',
  'Air',
  'Land'
]

const Template: Story<Props> = (args) => {
  return <RfiStatusBoard {...args} />
}

export const Demonstration = Template.bind({})
Demonstration.args = {
  roles: roles,
  channels: GameChannels,
  rfiMessages: GameMessagesMockRFI,
  isRFIManager: true,
  isUmpire: true,
  role: 'Game Control'
}
