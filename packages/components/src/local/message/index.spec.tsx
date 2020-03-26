/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Message from './index'
import { MessagesMock } from '@serge/mocks'

it('Message renders correctly', () => {
  const tree = renderer
    .create(<Message message={MessagesMock[0]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});