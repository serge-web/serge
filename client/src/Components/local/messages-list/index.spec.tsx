/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MessagesList from './index'

import { AdminMessagesMock } from 'src/mocks'

it('MessagesList renders correctly', () => {
  const tree = renderer
    .create(<MessagesList userId="" messages={AdminMessagesMock} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
