/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MessagesList from './index'

it('MessagesList renders correctly', () => {
  const tree = renderer
    .create(<MessagesList name="test" colour="blue" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});