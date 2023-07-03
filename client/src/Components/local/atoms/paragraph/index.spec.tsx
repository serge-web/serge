/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Paragraph from './index'

it('Paragraph renders correctly', () => {
  const tree = renderer
    .create(
      <Paragraph content={'Lorem ipsum\nDo lor sit amet'} />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
