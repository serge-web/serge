/* global it expect */
import { ChannelPlanning } from '@serge/custom-types'
import { P9Mock } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import SupportPanel from './index'

const forces = P9Mock.data.forces.forces
const blueForce = forces[1]
const blueRole = blueForce.roles[0]
const channel = P9Mock.data.channels.channels[0] as ChannelPlanning

const platformTypes = P9Mock.data.platformTypes!.platformTypes

describe('Support Panel component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<SupportPanel
        forceIcons={[]}
        platformTypes={platformTypes}
        forceNames={[]}
        channel={channel}
        hideForcesInChannel={false}
        messages={[]}
        selectedForce={blueForce.uniqid}
        selectedRole={blueRole.roleId}
        forces={forces}
        onUnread={noop}
        onReadAll={noop}
        onRead={noop}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
