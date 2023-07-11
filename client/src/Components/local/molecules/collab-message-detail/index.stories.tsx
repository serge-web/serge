import React, { useEffect, useState } from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import CollabMessageDetail from './index'
import RFIPropTypes from './types/props'

import {
  MessageTemplatesMockByKey,
  messageDataCollaborativeEditing,
  GameChannels2,
  WargameMock,
  messageDataCollaborativeResponding
} from 'src/mocks'
import docs from './README.md'

import { MessageCustom, ForceRole, ChannelCollab } from 'src/custom-types'
import { CollaborativeMessageStates, CollaborativePermission } from 'src/config'
const wrapper: React.FC = (storyFn: any) => <div style={{ height: 'auto' }}>{storyFn()}</div>

const roles: ForceRole[] = [
  { forceId: 'f-1', forceName: 'Red', roleId: 'R2343', roleName: 'Comms' },
  { forceId: 'f-1', forceName: 'Red', roleId: 'R3455', roleName: 'Logs' },
  { forceId: 'umpire', forceName: 'White', roleId: 'game-control', roleName: 'Game Control' },
  { forceId: 'umpire', forceName: 'White', roleId: 'logs', roleName: 'Logistics' }]

export default {
  title: 'local/molecules/CollabMessageDetail',
  component: CollabMessageDetail,
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
        type: 'radio',
        labels: ['CannotCollaborate', 'CanEdit', 'CanSubmitForReview',
          'CanApprove', 'CanRelease', 'CanUnClaim']
      }
    },
    state: {
      defaultValue: CollaborativeMessageStates.InProgress,
      options: [CollaborativeMessageStates.Unallocated, CollaborativeMessageStates.InProgress,
        CollaborativeMessageStates.PendingReview, CollaborativeMessageStates.Released, CollaborativeMessageStates.Closed],
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
  const [msgStatus, setMsgStatus] = useState<CollaborativeMessageStates>(state || CollaborativeMessageStates.Unallocated)
  const roleStr = role as unknown as string
  // we wish to update message state for a new story. We do
  // this by tracking the role, since each story has
  // a new role.

  const roleObs = roles.find((roleO: ForceRole) => roleO.roleName === roleStr)
  useEffect(() => {
    if (roleObs !== roleState) {
      setRoleState(roleObs)
    }
  }, [role])

  useEffect(() => {
    if (messageState.details.collaboration && messageState.details.collaboration.status) {
      setMsgStatus(messageState.details.collaboration.status)
    }
  }, [messageState])

  useEffect(() => {
    setMsgStatus(state)
  }, [state])

  if (roleObs && roleState) {
    return (
      <CollabMessageDetail
        templates={MessageTemplatesMockByKey}
        message={messageState}
        state={msgStatus}
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
