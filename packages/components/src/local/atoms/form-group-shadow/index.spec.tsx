/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import FormGroupShadow from './index'

it('FormGroupShadow renders correctly', () => {
  const tree = renderer
    .create(<FormGroupShadow placeholder='Travel Mode'>Demo Content</FormGroupShadow>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
