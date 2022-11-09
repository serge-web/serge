/* global it expect */
import { PLANNING_MESSAGE } from '@serge/config'
import { ChannelPlanning, MessagePlanning } from '@serge/custom-types'
import moment from 'moment-timezone'
import React from 'react'
import renderer from 'react-test-renderer'
import PlanningMessagesList from './index'

import { P9Mock } from '@serge/mocks'
import { noop } from 'lodash'

const planningChannel = P9Mock.data.channels.channels[0] as ChannelPlanning
const blueForce = P9Mock.data.forces.forces[1]
const blueRole = blueForce.roles[0]

describe('ChannelMessagesList component: ', () => {
  it('renders component correctly', () => {
    moment.tz.setDefault('Etc/UTC')
    const markAllAsRead = (): void => window.alert('Callback on mark all as read')
    const messages: MessagePlanning[] = [{
      messageType: PLANNING_MESSAGE,
      details: {
        channel: 'channel-k63pjit0',
        from: {
          force: 'Red',
          forceColor: '#F00',
          iconURL: 'default_img/umpireDefault.png',
          roleName: 'CO',
          roleId: 'u345',
          forceId: 'F-Reed'
        },
        messageType: 'Chat',
        timestamp: '2020-10-13T08:52:04.394Z',
        turnNumber: 1
      },
      message: {
        Reference: 'Message-1',
        activity: 'pres-strike',
        title: 'Message Title',
        startDate: '2020-10-13T08:52:04.394Z',
        endDate: '2020-10-15T08:52:04.394Z'
      },
      _id: '2020-03-25T15:08:47.520Z',
      _rev: '1',
      hasBeenRead: false
    }]
    console.log('blueRole.name', blueRole.name)
    console.log('blueRole.name', blueRole)

    const tree = renderer
      .create(<PlanningMessagesList selectedForce={blueForce} selectedRoleName={blueRole.name} currentTurn={P9Mock.gameTurn} gameDate={P9Mock.data.overview.gameDate} channel={planningChannel}
        hideForcesInChannel={false} selectedOrders={[]} setSelectedOrders={(): any => noop}
        messages={messages} onRead={undefined} onUnread={undefined} isUmpire={true} playerRoleId={blueRole.roleId}
        playerForceId={blueForce.uniqid} editLocation={noop} onMarkAllAsRead={markAllAsRead} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
