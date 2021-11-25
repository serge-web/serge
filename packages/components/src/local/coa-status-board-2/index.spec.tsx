/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { ForceRole, MessageCustom, Role, ChannelCollab } from '@serge/custom-types'
import { CUSTOM_MESSAGE, CollaborativeMessageStates, CHANNEL_COLLAB, InitialStates, CollaborativePermission, CollaborativeMessageStates2 } from '@serge/config'
import { forces, MessageTemplatesMockByKey, WargameMock } from '@serge/mocks'
import CoaStatusBoard2 from './index'
import moment from 'moment'

/* Import mock data */
// import { GameChannels } from '@serge/mocks'

const whiteGC: Role = forces[0].roles[0]
const blueCO: Role = forces[1].roles[0]
const redCO: Role = forces[2].roles[0]

const testChannelColb: ChannelCollab = {
  channelType: CHANNEL_COLLAB,
  requestChangesVerbs: [],
  approveVerbs: [],
  extraColumns: [],
  releaseVerbs: [],
  initialState: InitialStates.UNALLOCATED,
  newMessageTemplate: { title: 'COA', _id: 'k16eedkj' },
  name: 'Collab Editing',
  participants: [
    {
      canCreate: true,
      viewUnreleasedVersions: true,
      permission: CollaborativePermission.CanSubmitForReview,
      force: 'Blue',
      forceUniqid: 'Blue',
      roles: [],
      subscriptionId: 'oqoj'
    },
    {
      canCreate: true,
      viewUnreleasedVersions: true,
      permission: CollaborativePermission.CanRelease,
      force: 'Blue',
      forceUniqid: 'Blue',
      roles: [blueCO.roleId],
      subscriptionId: 'oqoj2'
    }
  ],
  uniqid: 'ks8soryj'
}

/* test data */
const testMock: MessageCustom[] = [
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-BlueRFI',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        iconURL: 'default_img/umpireDefault.png',
        roleName: blueCO.name,
        roleId: blueCO.roleId
      },
      messageType: 'RFI',
      timestamp: '2020-10-13T08:54:21.119Z',
      collaboration: {
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.Pending,
        status2: CollaborativeMessageStates2.Unallocated
      },
      turnNumber: 1
    },
    message: {
      Reference: 'Blue-3',
      Request: 'RFI 3 request goes in here',
      Title: 'RFI 3 from Blue'
    },
    _id: 'id_3a',
    _rev: '2',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'Red RFI',
      from: {
        force: 'Red',
        roleName: redCO.name,
        forceColor: '#F00',
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      messageType: 'RFI',
      timestamp: '2020-10-13T08:55:21.119Z',
      collaboration: {
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.BeingEdited,
        status2: CollaborativeMessageStates2.InProgress
      },
      turnNumber: 1
    },
    message: {
      Reference: 'RED-1',
      Request: 'RFI 1 request from red goes in here',
      Title: 'RFI 1 from RED'
    },
    _rev: '1',
    _id: 'id_4',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'White',
        forceColor: '#FCFBEE',
        iconURL: 'default_img/umpireDefault.png',
        roleName: whiteGC.name,
        roleId: whiteGC.roleId
      },
      messageType: 'Chat',
      privateMessage: 'The private content goes in here',
      timestamp: '2020-10-13T08:52:40.930Z',
      collaboration: {
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.Closed,
        status2: CollaborativeMessageStates2.Closed,
        response: 'Game control response to RFI 4'
      },
      turnNumber: 1
    },
    message: {
      content: 'Message from White, with Private content'
    },
    _id: '2020-03-25T15:08:47.540Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'Red',
        forceColor: '#F00',
        roleName: redCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: redCO.roleId
      },
      messageType: 'Chat',
      timestamp: '2020-10-13T08:52:04.394Z',
      collaboration: {
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.PendingReview,
        status2: CollaborativeMessageStates2.PendingReview,
        response: 'Game control response to RFI 4'
      },
      turnNumber: 1
    },
    message: {
      content: 'message from Red'
    },
    _id: '2020-03-25T15:08:47.525Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  },
  {
    messageType: CUSTOM_MESSAGE,
    details: {
      channel: 'channel-k63pjit0',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: blueCO.name,
        iconURL: 'default_img/umpireDefault.png',
        roleId: blueCO.roleId
      },
      messageType: 'Chat',
      timestamp: '2020-10-13T08:52:21.119Z',
      collaboration: {
        lastUpdated: moment(new Date(), moment.ISO_8601).format(),
        status: CollaborativeMessageStates.Released,
        status2: CollaborativeMessageStates2.Released,
        response: 'Game control response to RFI 4'
      },
      turnNumber: 1
    },
    message: {
      content: 'Message from Blue'
    },
    _id: '2020-03-25T15:08:47.530Z',
    _rev: '1',
    hasBeenRead: false,
    isOpen: false
  }
]

const role: ForceRole = { forceId: 'White', forceName: 'White', roleId: blueCO.roleId, roleName: blueCO.name }

const onChange = (): void => console.log()

it('CoaStatusBoard renders correctly', () => {
  const handleReadMessage = (unreadCount: number): void => {
    console.log('unread mesages left: ' + unreadCount)
  }

  const tree = renderer
    .create(
      <CoaStatusBoard2
        currentWargame='wargame-test'
        templates={MessageTemplatesMockByKey}
        forces={forces}
        role={role}
        isUmpire={true}
        channelColb={testChannelColb}
        messages={testMock}
        onChange={onChange}
        gameDate={WargameMock.data.overview.gameDate}
        onMessageRead={handleReadMessage}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
