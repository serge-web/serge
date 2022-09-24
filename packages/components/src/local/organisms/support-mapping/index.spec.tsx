import { mount } from 'enzyme'
import React from 'react'
import SupportMapping from './index'
import { P9Mock } from '@serge/mocks'

const forces = P9Mock.data.forces.forces

describe('Support Mapping component: ', () => {
  it('renders component correctly', () => {
    const tree = mount(<SupportMapping allForces={forces} position={[51.505, -0.09]} zoom={12} opForces={[]} ownForces={[]} />)
    expect(tree).toMatchSnapshot()
  })
})
