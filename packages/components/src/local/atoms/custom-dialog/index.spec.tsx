/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import CustomDialog from './index'

describe('Custom Dialog component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <CustomDialog isOpen={false} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
