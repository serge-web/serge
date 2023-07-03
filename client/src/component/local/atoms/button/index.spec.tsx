/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Button from './index'

describe('Button component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Button customColor="charcoal">
          Charcoal
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
