/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Badge from './index'

describe('Badge component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Badge label="Charcoal" type="charcoal" />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
