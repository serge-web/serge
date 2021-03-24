/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ChatMessage from './index'

it('ChatMessage renders correctly', () => {
  const tree = renderer
    .create(<ChatMessage message="This is simple chat message" borderColor="#fff" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});