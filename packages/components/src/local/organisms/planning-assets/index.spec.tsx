/* global it expect */
import { WargameExportedMock } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import { PlanningAssets } from './index'

describe('Planning Assets component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<PlanningAssets forces={WargameExportedMock.data.forces.forces} playerForce={WargameExportedMock.data.forces.forces[0]} isUmpire={true} render={noop} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
