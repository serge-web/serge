/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import PasswordView from './index'
const onChange = (nextValue: string): void => { console.log(nextValue) }

it('password-view renders correctly', () => {
  const tree = renderer
    .create(<PasswordView onChange={onChange} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
