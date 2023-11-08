/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Speed from './index'

it('Speed renders correctly', () => {
  const tree = renderer
    .create(<Speed colCount={6} options={[0, 10, 20, 30]} value={10}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
