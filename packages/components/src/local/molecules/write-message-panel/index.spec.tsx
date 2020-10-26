/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import WriteMessagePanel from './index'

describe('WriteMessagePanel component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <WriteMessagePanel />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
