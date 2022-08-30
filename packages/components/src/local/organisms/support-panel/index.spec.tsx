/* global it expect */
import { ChannelPlanning } from '@serge/custom-types'
import { p9wargame, planningMessages } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import SupportPanel from './index'

const planningChannel = p9wargame.data.channels.channels[0] as ChannelPlanning

describe('Support Panel component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<SupportPanel
        forceIcons={[]}
        forceColors={[]}
        forceNames={[]}
        hideForcesInChannel={false}
        messages={planningMessages}
        selectedForce={p9wargame.data.forces.forces[1].uniqid}
        selectedRole={p9wargame.data.forces.forces[1].roles[0].roleId}
        channel={planningChannel}
        forces={[p9wargame.data.forces]}
        onUnread={noop}
        onReadAll={noop}
        onRead={noop}
        templates={[]}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
