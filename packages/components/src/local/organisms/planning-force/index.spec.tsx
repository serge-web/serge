import React from 'react'
import renderer from 'react-test-renderer'
import PlanningForce from './index'

describe('Planning Force component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<PlanningForce assets={[]} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
