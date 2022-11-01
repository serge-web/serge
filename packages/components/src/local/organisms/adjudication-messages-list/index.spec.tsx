/* global it expect */
import { ChannelPlanning, MessageInteraction } from '@serge/custom-types'
import moment from 'moment-timezone'
import React from 'react'
import renderer from 'react-test-renderer'
import { AdjudicationMessagesList } from './index'

import { forceColors } from '@serge/helpers'
import { P9Mock, planningMessageTemplatesMock } from '@serge/mocks'
import { noop } from 'lodash'

const planningChannel = P9Mock.data.channels.channels[0] as ChannelPlanning
const forces = P9Mock.data.forces.forces
const blueForce = forces[1]
const blueRole = blueForce.roles[0]

describe('AdjudicationMessagesList component: ', () => {
  it('renders component correctly', () => {
    moment.tz.setDefault('Etc/UTC')
    const markAllAsRead = (): void => window.alert('Callback on mark all as read')
    const messages: MessageInteraction[] = []

    const tree = renderer
      .create(<AdjudicationMessagesList selectedOrders={[]} setSelectedOrders={noop} forces={forces} template={planningMessageTemplatesMock[0]} gameDate={P9Mock.data.overview.gameDate} channel={planningChannel} hideForcesInChannel={false}
        messages={messages} onRead={undefined} forceColors={forceColors(forces)} onUnread={undefined} isUmpire={true} playerRoleId={blueRole.roleId}
        playerForceId={blueForce.uniqid} onMarkAllAsRead={markAllAsRead} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
