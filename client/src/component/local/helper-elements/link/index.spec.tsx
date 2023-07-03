/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Link from './index'

it('link renders correctly', () => {
  const tree = renderer
    .create(<Link disabled={false}>Text</Link>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
