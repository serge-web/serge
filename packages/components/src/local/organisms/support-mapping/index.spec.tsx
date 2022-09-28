import { mount } from 'enzyme'
import React from 'react'
import SupportMapping from './index'
import { noop } from 'lodash'

describe('Support Mapping component: ', () => {
  it('renders component correctly', () => {
    const tree = mount(<SupportMapping forces={[]} filterApplied={true} setFilterApplied={(): void => noop()}
      position={[51.505, -0.09]} zoom={12} opAssets={[]} ownAssets={[]} />)
    expect(tree).toMatchSnapshot()
  })
})
