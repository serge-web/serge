/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ChatMessage from './index'

it('ChatMessage renders correctly', () => {
  const tree = renderer
    .create(<ChatMessage role="Game Control" timestamp="2020-10-13T08:52:04.394Z" borderColor="#fff" message="This is simple chat message" isOwner={true} isUmpire={false} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
