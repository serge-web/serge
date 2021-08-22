/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import AssignMessage from './index'

describe('DropdownList component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <AssignMessage
          options={['Game Control', 'CO', 'Blue 1']}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
