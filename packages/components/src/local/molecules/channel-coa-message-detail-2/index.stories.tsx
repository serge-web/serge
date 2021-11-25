import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import ChannelCoaMessageDetail2 from './index'
import RFIPropTypes from './types/props'

import {
  MessageTemplatesMockByKey,
  messageDataCollaborativeEditing,
  GameChannels2,
  GameMessagesMock,
  WargameMock
} from '@serge/mocks'
import docs from './README.md'

import { MessageCustom, ForceRole, ChannelCollab } from '@serge/custom-types'
import { CollaborativePermission } from '@serge/config'
const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/molecules/ChannelCoaMessageDetail2',
  component: ChannelCoaMessageDetail2,
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
    isObserver: {
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

const Template: Story<RFIPropTypes> = (args) => {
  const { isObserver, role, message, isUmpire } = args
  const [messageState, setMessageState] = useState<MessageCustom>(message)
  const [roleState, setRoleState] = useState<ForceRole | undefined>(undefined)
  // we wish to update message state for a new story. We do
  // this by tracking the role, since each story has
  // a new role.
  if (role !== roleState) {
    setRoleState(role)
    setMessageState(message)
  }

  const collabChannel = GameChannels2[3] as ChannelCollab

  return (
    <ChannelCoaMessageDetail2
      templates={MessageTemplatesMockByKey}
      message={messageState}
      onChange={(nextMessage): void => setMessageState(nextMessage)}
      role={role}
      permission={CollaborativePermission.CanEdit}
      isObserver={isObserver}
      isUmpire={isUmpire}
      channelColb={collabChannel}
      gameDate={WargameMock.data.overview.gameDate}
    />
  )
}

const role: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'game-control', roleName: 'Game Control' }
export const Unallocated = Template.bind({})
Unallocated.args = {
  message: messageDataCollaborativeEditing[0],
  isObserver: true,
  isUmpire: true,
  role: role
}

export const CustomMessage = Template.bind({})
CustomMessage.args = {
  message: GameMessagesMock[0] as MessageCustom,
  isObserver: true,
  isUmpire: true,
  role: role
}
