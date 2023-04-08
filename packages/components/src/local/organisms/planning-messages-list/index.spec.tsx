/* global it expect */
import { INFO_MESSAGE_CLIPPED, Phase, PLANNING_MESSAGE } from '@serge/config'
import { ChannelPlanning, MessageInteraction, MessagePlanning } from '@serge/custom-types'
import moment from 'moment-timezone'
import React from 'react'
import renderer from 'react-test-renderer'
import PlanningMessagesList from './index'

import { forceColors, incrementGameTime } from '@serge/helpers'
import { P9Mock, planningMessages as planningChannelMessages } from '@serge/mocks'
import { noop } from 'lodash'

const planningChannel = P9Mock.data.channels.channels[0] as ChannelPlanning
const blueForce = P9Mock.data.forces.forces[1]
const blueRole = blueForce.roles[0]
const allForces = P9Mock.data.forces.forces

const overview = P9Mock.data.overview

const turnEndDate = incrementGameTime(overview.gameDate, overview.gameTurnTime)

const nonInfoMessages = planningChannelMessages.filter((msg) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessagePlanning | MessageInteraction>
const interactionMessages = nonInfoMessages.filter((msg) => msg.details.interaction) as Array<MessageInteraction>

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
      .create(<PlanningMessagesList selectedForce={blueForce} selectedRoleName={blueRole.name}
        planningMessages={messages} interactionMessages={interactionMessages} allForces={allForces}
        platformTypes={P9Mock.data.platformTypes ? P9Mock.data.platformTypes.platformTypes : []}
        forceColors={forceColors(allForces)}
        currentTurn={P9Mock.gameTurn} gameTurnEndDate={turnEndDate} channel={planningChannel}
        hideForcesInChannel={false} selectedOrders={[]} setSelectedOrders={(): any => noop}
        messages={messages} onRead={undefined} onUnread={undefined} isUmpire={true} playerRoleId={blueRole.roleId}
        phase={Phase.Planning} editLocation={noop} onMarkAllAsRead={markAllAsRead} onSupportPanelLayoutChange={noop}
        getSupportPanelState={() => ({})} />, {
        createNodeMock: node => {
          return document.createElement(node.type as string)
        }
      })
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
