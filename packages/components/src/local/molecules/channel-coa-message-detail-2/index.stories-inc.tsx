import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import ChannelCoaMessageDetail2 from './index'
import RFIPropTypes from './types/props'

import {
  MessageTemplatesMockByKey,
  messageDataCollaborativeEditing,
  GameChannels2,
  WargameMock,
  messageDataCollaborativeResponding
} from '@serge/mocks'
import docs from './README.md'

import { MessageCustom, ForceRole, ChannelCollab } from '@serge/custom-types'
import { CollaborativeMessageStates2, CollaborativePermission } from '@serge/config'
const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const roles: ForceRole[] = [
  { forceId: 'f-1', forceName: 'Red', roleId: 'R2343', roleName: 'Comms' },
  { forceId: 'f-1', forceName: 'Red', roleId: 'R3455', roleName: 'Logs' },
  { forceId: 'umpire', forceName: 'White', roleId: 'game-control', roleName: 'Game Control' },
  { forceId: 'umpire', forceName: 'White', roleId: 'logs', roleName: 'Logistics' }]

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
      description: 'Player is marked as observer',
      control: 'boolean'
    },
    isUmpire: {
      description: 'Player is from umpire force, so can see private fields',
      control: 'boolean'
    },
    permission: {
      defaultValue: CollaborativePermission.CanEdit,
      options: [CollaborativePermission.CannotCollaborate, CollaborativePermission.CanEdit, CollaborativePermission.CanSubmitForReview,
        CollaborativePermission.CanApprove, CollaborativePermission.CanRelease, CollaborativePermission.CanUnClaim],
      control: {
        type: 'radio', labels: ['CannotCollaborate', 'CanEdit', 'CanSubmitForReview',
          'CanApprove', 'CanRelease', 'CanUnClaim']
      }
    },
    state: {
      defaultValue: CollaborativeMessageStates2.InProgress,
      options: [CollaborativeMessageStates2.Unallocated, CollaborativeMessageStates2.InProgress,
        CollaborativeMessageStates2.PendingReview, CollaborativeMessageStates2.Released, CollaborativeMessageStates2.Closed],
      control: { type: 'radio' }
    },
    role: {
      options: [roles[0].roleName, roles[1].roleName, roles[2].roleName, roles[3].roleName],
      defaultValue: roles[0].roleName,
      control: { type: 'radio' }
    }
  }
}

const Template: Story<RFIPropTypes> = (args) => {
  const { isObserver, message, isUmpire, permission, state, channelColb, role } = args
  const [messageState, setMessageState] = useState<MessageCustom>(message)
  const [roleState, setRoleState] = useState<ForceRole | undefined>(undefined)
  const roleStr = role as unknown as string
  // we wish to update message state for a new story. We do
  // this by tracking the role, since each story has
  // a new role.
  const roleObs = roles.find((roleO: ForceRole) => roleO.roleName === roleStr)
  if (roleObs !== roleState) {
    setRoleState(roleObs)
    setMessageState(message)
  }
  if (roleObs && roleState) {
    return (roleObs &&
      <ChannelCoaMessageDetail2
        templates={MessageTemplatesMockByKey}
        message={messageState}
        state={state}
        onChange={(nextMessage): void => setMessageState(nextMessage)}
        role={roleState}
        permission={permission}
        isObserver={isObserver}
        isUmpire={isUmpire}
        assignees={roles}
        channelColb={channelColb}
        gameDate={WargameMock.data.overview.gameDate}
      />
    )
  } else {
    return (
      <></>
    )
  }
}

export const CollaborativeEdit = Template.bind({})
CollaborativeEdit.args = {
  message: messageDataCollaborativeEditing[0],
  channelColb: GameChannels2[4] as ChannelCollab
}

export const CollaborativeResponse = Template.bind({})
CollaborativeResponse.args = {
  message: messageDataCollaborativeResponding[0],
  channelColb: GameChannels2[3] as ChannelCollab
}
