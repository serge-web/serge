/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import WriteMessagePanel from './index'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <WriteMessagePanel isUmpire={true}/>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
