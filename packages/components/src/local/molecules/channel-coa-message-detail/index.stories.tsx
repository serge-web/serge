import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import ChannelCoaMessageDetail from './index'
import RFIPropTypes from './types/props'

import docs from './README.md'
import {
  // channelDataCollaborativeEditing,
  channelDataCollaborativeEditingCollaborationParticipant,
  // channelDataColabEditCollaborativeReleaseManager,
  // channelDataCollaborativeResponding,
  // channelDataCollaborativeRespondingCollaborationParticipant,
  // channelDataCollaborativeRespondingReleaseManager,
  messageDataCollaborativeEditing,
  // messageDataCollaborativeResponding,
  // GameMessagesMockRFI,
  GameChannels
} from '@serge/mocks'
// import { mostRecentOnly } from '@serge/helpers'
import { MessageCustom, ForceRole } from '@serge/custom-types'
const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/molecules/ChannelCoaMessageDetail',
  component: ChannelCoaMessageDetail,
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
// const messages = GameMessagesMockRFI.reverse()
// const newest = mostRecentOnly(messages)

// const unallocated = newest[3] as MessageCustom
// const inProgress = newest[2] as MessageCustom
// const forReview = newest[1] as MessageCustom
// const released = newest[0] as MessageCustom

const Template: Story<RFIPropTypes> = (args) => {
  const { isUmpire, role, message } = args
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
    <ChannelCoaMessageDetail
      message={messageState}
      onChange={(nextMessage): void => setMessageState(nextMessage)}
      role={role}
      isUmpire={isUmpire}
      channel={GameChannels[0]}
    />
  )
}

const role: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'game-control', roleName: 'Game Control' }
export const Unallocated = Template.bind({})
Unallocated.args = {
  message: messageDataCollaborativeEditing[0],
  isUmpire: true,
  canCollaborate: true,
  canReleaseMessages: false,
  channel: channelDataCollaborativeEditingCollaborationParticipant,
  role: role
}