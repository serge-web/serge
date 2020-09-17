/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import InputContainer from './index'

it('InputContainer renders correctly', () => {
  const tree = renderer
    .create(<InputContainer>Child goes here</InputContainer>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
