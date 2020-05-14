/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Turns from './index'

it('Turns renders correctly', () => {
  const tree = renderer
    .create(<Turns turns={5}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
