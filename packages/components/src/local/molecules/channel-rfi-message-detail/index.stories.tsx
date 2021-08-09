import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import ChannelRfiMessageDetail from './index'
import RFIPropTypes from './types/props'

import docs from './README.md'
import { GameMessagesMockRFI } from '@serge/mocks'
import { mostRecentOnly } from '@serge/helpers'
import { MessageCustom, ForceRole } from '@serge/custom-types'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/molecules/ChannRfilMessageDetail',
  component: ChannelRfiMessageDetail,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  },
  argTypes: {
    isUmpire: {
      description: 'Player is from umpire force',
      control: 'boolean'
    },
    isRFIManager: {
      description: 'Player role has RFI Manager attribute',
      control: 'boolean'
    },
    role: {
      description: 'Player Role',
      control: {
        type: 'radio',
        options: [
          'Comms',
          'Logistics'
        ]
      }
    }
  }
}

// reverse the items
const messages = GameMessagesMockRFI.reverse()
const newest = mostRecentOnly(messages)

const unallocated = newest[3] as MessageCustom
const inProgress = newest[2] as MessageCustom
const forReview = newest[1] as MessageCustom
const released = newest[0] as MessageCustom

const Template: Story<RFIPropTypes> = (args) => {
  const { isUmpire, role, message, isRFIManager } = args
  const [messageState, setMessageState] = useState<MessageCustom>(message)
  const [roleState, setRoleState] = useState<ForceRole | undefined>(undefined)
  // we wish to update message state for a new story. We do
  // this by tracking the role, since each story has
  // a new role.
  if (role !== roleState) {
    setRoleState(role)
    setMessageState(message)
  }

  return (
    <ChannelRfiMessageDetail
      message={messageState}
      isRFIManager={isRFIManager}
      onChange={(nextMessage): void => setMessageState(nextMessage)}
      role={role}
      isUmpire={isUmpire}
    />
  )
}

export const Unallocated = Template.bind({})
Unallocated.args = {
  message: unallocated,
  isUmpire: true,
  isRFIManager: true,
  role: { forceId: 'umpire', forceName: 'White', roleId: 'game control', roleName: 'CO' }
}

export const InProgress = Template.bind({})
InProgress.args = {
  message: inProgress,
  isRFIManager: true,
  isUmpire: true,
  role: { forceId: 'umpire', forceName: 'White', roleId: 'game control 2', roleName: 'CO 2' }
}

export const ForReview = Template.bind({})
ForReview.args = {
  message: forReview,
  isRFIManager: true,
  isUmpire: true,
  role: { forceId: 'umpire', forceName: 'White', roleId: 'game control 3', roleName: 'CO 3' }
}

export const Released = Template.bind({})
Released.args = {
  message: released,
  isRFIManager: true,
  isUmpire: true,
  role: { forceId: 'umpire', forceName: 'White', roleId: 'game control 4', roleName: 'CO 4' }
}
