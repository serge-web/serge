/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import TitleWithIcon from './index'

it('TitleWithIcon renders correctly', () => {
  const tree = renderer
    .create(<TitleWithIcon/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
