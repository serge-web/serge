import React from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import RfiStatusBoard from './index'
import docs from './README.md'

import { GameChannels, GameMessagesMockRFI } from '@serge/mocks'
import { MessageCustom, ForceRole } from '@serge/custom-types'
import Props from './types/props'
import { mostRecentOnly } from '@serge/helpers'

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

// filter to only show the most recent versions of messages
const mostRecentMessages = mostRecentOnly(GameMessagesMockRFI) as MessageCustom[]
const role: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'game control', roleName: 'Game Control' }

export const Demonstration = Template.bind({})
Demonstration.args = {
  roles: roles,
  channels: GameChannels,
  rfiMessages: mostRecentMessages,
  isRFIManager: true,
  isUmpire: true,
  role: role
}
