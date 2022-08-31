/* global it expect */
import { P9Mock } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import { PlanningAssets } from './index'

const forces = P9Mock.data.forces.forces
const blueForce = forces[1]

describe('Planning Assets component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<PlanningAssets forces={forces} opFor={false}
        playerForce={blueForce.uniqid} isUmpire={true} render={noop} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
