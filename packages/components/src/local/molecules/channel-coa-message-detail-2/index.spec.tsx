/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelCoaMessageDetail2 from './index'

import { ChannelCollab, ChannelData } from '@serge/custom-types'
import { InitialStates, CHANNEL_COLLAB, CollaborativePermission, SpecialChannelTypes } from '@serge/config'

import { GameMessagesMockRFI, MessageTemplatesMockByKey, WargameMock } from '@serge/mocks'

const [defMessage] = GameMessagesMockRFI

/* TODO: test data */

const testChannel2: ChannelCollab = {
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
      canCreate: true,
      viewUnreleasedVersions: true,
      permission: CollaborativePermission.CanApprove,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'oqoj'
    }
  ],
  uniqid: 'ks8soryj'
}

const testChannel: ChannelData = {
  collabOptions: {
    extraColumns: [],
    mode: 'edit',
    returnVerbs: ['Endorse', 'Request Changes'],
    startWithReview: true
  },
  format: SpecialChannelTypes.CHANNEL_COLLAB_EDIT,
  name: 'New CE',
  participants: [
    {
      canCollaborate: true,
      canReleaseMessages: false,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'oqoj',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8soryj'
}

describe('ChannelMessageDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ChannelCoaMessageDetail2
        templates={MessageTemplatesMockByKey}
        role={ { forceId: 'umpire', forceName: 'Umpire', roleId: 'co', roleName: 'CO' } }
        canUnClaimMessages={true}
        channel={testChannel}
        channelColb={testChannel2}
        isUmpire={true}
        message={defMessage}
        onChange={(msg): void => { console.log(msg) }}
        gameDate={WargameMock.data.overview.gameDate}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
