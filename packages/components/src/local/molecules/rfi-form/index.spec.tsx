/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import RfiForm from './index'

describe('RFIForm component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <RfiForm request={{
          title: 'Lorem ipsum',
          description: 'Do lor sit amet'
        }} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
