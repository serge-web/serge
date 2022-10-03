import { mount } from 'enzyme'
import React from 'react'
import SupportMapping from './index'

describe('Support Mapping component: ', () => {
  it('renders component correctly', () => {
    const tree = mount(<SupportMapping
      position={[51.505, -0.09]} zoom={12} />)
    expect(tree).toMatchSnapshot()
  })
})
