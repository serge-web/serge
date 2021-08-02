import React from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import CollabWorkingBoard from './index'
import docs from './README.md'

import { GameChannels, GameMessagesMockRFI, forces } from '@serge/mocks'
import { MessageCustom, ForceRole, Role } from '@serge/custom-types'
import Props from './types/props'
import { mostRecentOnly } from '@serge/helpers'

const whiteGC: Role = forces[0].roles[0]
const blueCO: Role = forces[1].roles[0]
const blueOther: Role = forces[1].roles[1]


export default {
  title: 'local/CollabWorkingBoard',
  component: CollabWorkingBoard,
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
    role: {
      description: 'Player Role'
    },
  }
}

const roles = [
  'Game Control',
  'Logistics',
  'Air',
  'Land'
]

const Template: Story<Props> = (args) => {
  return <CollabWorkingBoard {...args} />
}

// filter to only show the most recent versions of messages
const mostRecentMessages = mostRecentOnly(GameMessagesMockRFI) as MessageCustom[]
const whiteGCRole: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: whiteGC.roleId, roleName: 'Game Control' }
const blueCORole: ForceRole = { forceId: 'blue', forceName: 'Blue', roleId: blueCO.roleId, roleName: 'CO' }
const blueOtherRole: ForceRole = { forceId: 'blue', forceName: 'Blue', roleId: blueOther.roleId, roleName: 'Comms' }

export const WhiteGC = Template.bind({})
WhiteGC.args = {
  roles: roles,
  channel: GameChannels[4],
  rfiMessages: mostRecentMessages,
  role: whiteGCRole
}

export const BlueCO = Template.bind({})
BlueCO.args = {
  roles: roles,
  channel: GameChannels[4],
  rfiMessages: mostRecentMessages,
  role: blueCORole
}

export const BlueOther = Template.bind({})
BlueOther.args = {
  roles: roles,
  channel: GameChannels[4],
  rfiMessages: mostRecentMessages,
  role: blueOtherRole
}
