import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import PlanningForce from './index'

describe('Planning Force component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<PlanningForce opFor={true} assets={[]} setSelectedItems={noop} selectedItems={[]} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
