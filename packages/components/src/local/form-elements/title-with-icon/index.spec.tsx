/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import TitleWithIcon from './index'

it('TitleWithIcon renders correctly', () => {
  const tree = renderer
    .create(<TitleWithIcon forceColor="blue" icon="merchant-vessel" platformType="merchant-vessel">Test</TitleWithIcon>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
