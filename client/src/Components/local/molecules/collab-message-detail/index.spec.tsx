/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import CollabMessageDetail from './index'

import { ChannelCollab } from '@serge/custom-types'
import { InitialStates, CHANNEL_COLLAB, CollaborativePermission, CollaborativeMessageStates, PARTICIPANT_COLLAB } from '@serge/config'

import { GameMessagesMockRFI, MessageTemplatesMockByKey, WargameMock } from '@serge/mocks'

const [defMessage] = GameMessagesMockRFI

/* TODO: test data */

const testCollabChannel: ChannelCollab = {
  channelType: CHANNEL_COLLAB,
  requestChangesVerbs: ['Endorse', 'Request Changes'],
  approveVerbs: [],
  extraColumns: [],
  releaseVerbs: [],
  initialState: InitialStates.UNALLOCATED,
  newMessageTemplate: { title: 'RFI', _id: 'k16eedkj' },
  name: 'Collab Editing',
  participants: [
    {
      pType: PARTICIPANT_COLLAB,
      canCreate: true,
      viewUnreleasedVersions: true,
      permission: CollaborativePermission.CanApprove,
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'oqoj'
    }
  ],
  uniqid: 'ks8soryj'
}

const state = defMessage.details.collaboration?.status || CollaborativeMessageStates.Unallocated

describe('ChannelMessageDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CollabMessageDetail
        templates={MessageTemplatesMockByKey}
        role={{ forceId: 'umpire', forceName: 'Umpire', roleId: 'co', roleName: 'CO' }}
        permission={CollaborativePermission.CanEdit}
        channelColb={testCollabChannel}
        isUmpire={true}
        isObserver={true}
        message={defMessage}
        state={state}
        onChange={(msg): void => { console.log(msg) }}
        gameDate={WargameMock.data.overview.gameDate}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
