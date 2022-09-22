import { mount } from 'enzyme'
import React from 'react'
import SupportMapping from './index'

describe('Support Mapping component: ', () => {
  it('renders component correctly', () => {
    const tree = mount(<SupportMapping />)
    expect(tree).toMatchSnapshot()
  })
})
