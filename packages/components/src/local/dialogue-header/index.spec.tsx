/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import DialogueHeader from './index'

it('DialogueHeader renders correctly', () => {
  const tree = renderer
    .create(<DialogueHeader string="test" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
