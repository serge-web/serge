/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import CollapsibleContent from './index'

it('CollapsibleContent renders correctly', () => {
  const tree = renderer
    .create(<CollapsibleContent>Title</CollapsibleContent>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
