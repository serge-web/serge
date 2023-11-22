/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import CoreMapping from './index'

describe('Core Mapping component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CoreMapping />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
