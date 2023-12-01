/* global it expect */
import { Phase } from 'src/config'
import { ChannelPlanning } from 'src/custom-types'
import moment from 'moment-timezone'
import React from 'react'
import renderer from 'react-test-renderer'
import PlanningMessagesList from './index'

import { forceColors, incrementGameTime } from 'src/Helpers'
import { P9Mock } from 'src/mocks'
import { noop } from 'lodash'

const planningChannel = P9Mock.data.channels.channels[0] as ChannelPlanning
const blueForce = P9Mock.data.forces.forces[1]
const blueRole = blueForce.roles[0]
const allForces = P9Mock.data.forces.forces

const overview = P9Mock.data.overview

const turnEndDate = incrementGameTime(overview.gameDate, overview.gameTurnTime)

describe('ChannelMessagesList component: ', () => {
  it('renders component correctly', () => {
    moment.tz.setDefault('Etc/UTC')
    const markAllAsRead = (): void => window.alert('Callback on mark all as read')
    console.log('blueRole.name', blueRole.name)
    console.log('blueRole.name', blueRole)

    const tree = renderer
      .create(<PlanningMessagesList 
        selectedForce={blueForce} 
        selectedRoleName={blueRole.name}
        allForces={allForces}
        forceColors={forceColors(allForces)}
        currentTurn={P9Mock.gameTurn}
        gameTurnEndDate={turnEndDate} 
        channel={planningChannel}
        hideForcesInChannel={false} 
        selectedOrders={[]} 
        setSelectedOrders={(): any => noop}
        onRead={undefined} 
        onUnread={undefined} 
        isUmpire={true}
        playerRoleId={blueRole.roleId}
        phase={Phase.Planning}
        onMarkAllAsRead={markAllAsRead} 
        onSupportPanelLayoutChange={noop}
        getSupportPanelState={() => ({})} />, {
        createNodeMock: node => {
          return document.createElement(node.type as string)
        }
      })
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
