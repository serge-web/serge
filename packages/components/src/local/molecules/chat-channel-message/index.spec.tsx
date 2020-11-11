/* global it expect */
import { boolean } from '@storybook/addon-knobs'
import React from 'react'
import renderer from 'react-test-renderer'
import ChatChannelMessage from './index'
import { forces } from '@serge/mocks'
import { forceColors } from '@serge/helpers'

const forceColorList = forceColors(forces)


/** mock function to workaround issue where multiline textarea
 * failing, as documented here:
 * https://github.com/mui-org/material-ui/issues/16491
 */
const createNodeMock = (element: any): any => {
  if (element.type === 'textarea') {
    return document.createElement('textarea')
  } else {
    return null
  }
}

const messages = [
  {
    id: '1',
    title:"lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet",
    timestamp:"2020-09-18T05:41:17.349Z",
    role:"CO",
    messageType:"Chat",
    hasBeenRead: false,
    authorForceId: 'Blue',
    playerForceId: 'Blue',
    isUmpire:true,
    privateMessage:'This is an example of a private message.',
    hasPrivate: false
  },
  {
    id: '2',
    title:"lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet",
    timestamp:"2020-09-18T05:41:17.349Z",
    role:"CO",
    messageType:"Chat",
    hasBeenRead: false,
    authorForceId: 'Blue',
    playerForceId: 'Red',
    isUmpire:true,
    privateMessage:'This is an example of a private message.',
    hasPrivate: false
  }
]

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ChatChannelMessage
        isUmpire={boolean('Player from umpire force', true)}
        messages={messages}
        colors={forceColorList}
      />, { createNodeMock }
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
