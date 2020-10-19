/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Message from './index'
import { AdminMessagesMock } from '@serge/mocks'

it('Message renders correctly', () => {
  const tree = renderer
    .create(<Message message={AdminMessagesMock[0]}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
