/* global it expect */
import { ChannelPlanning } from 'src/custom-types'
import moment from 'moment-timezone'
import React from 'react'
import renderer from 'react-test-renderer'
import { AdjudicationMessagesList } from './index'

import { forceColors } from 'src/Helpers'
import { P9Mock, planningMessageTemplatesMock, turnPeriod } from 'src/mocks'
import { Phase } from 'src/config'

const planningChannel = P9Mock.data.channels.channels[0] as ChannelPlanning
const forces = P9Mock.data.forces.forces
const blueForce = forces[1]
const blueRole = blueForce.roles[0]

describe('AdjudicationMessagesList component: ', () => {
  it('renders component correctly', () => {
    moment.tz.setDefault('Etc/UTC')
    const markAllAsRead = (): void => window.alert('Callback on mark all as read')

    const tree = renderer
      .create(<AdjudicationMessagesList 
        currentTurn={1} 
        currentWargame={P9Mock.name}
        forces={forces}
        periods={turnPeriod} 
        template={planningMessageTemplatesMock[0]}
        gameDate={P9Mock.data.overview.gameDate} 
        channel={planningChannel}
        phase={Phase.Adjudication}
        gameTurnLength={P9Mock.data.overview.gameTurnTime} 
        forceColors={forceColors(forces)}
        onUnread={undefined} 
        playerRoleId={blueRole.roleId}
        onMarkAllAsRead={markAllAsRead} 
      />, {
        createNodeMock: node => {
          return document.createElement(node.type as string)
        }
      })
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
