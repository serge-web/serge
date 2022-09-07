/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import Orders from './index'

describe('Orders component:', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<Orders columns={[]} rows={[]} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
