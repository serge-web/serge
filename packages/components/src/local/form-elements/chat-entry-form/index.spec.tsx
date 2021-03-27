/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ChatEntryForm from './index'

it('ChatEntryForm renders correctly', () => {
  const tree = renderer
    .create(<ChatEntryForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});