/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MessageListDetail from './index'

it('MessageListDetail renders correctly', () => {
  const tree = renderer
    .create(<MessageListDetail name="test" colour="blue" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
