import { P9Mock } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import ViewAs from './index'

const forces = P9Mock.data.forces.forces

describe('Planning Force component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<ViewAs isUmpire={true} forces={forces} viewAsForce={forces[1].uniqid} viewAsCallback={noop} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
