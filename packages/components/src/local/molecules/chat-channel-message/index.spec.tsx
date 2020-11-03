/* global it expect */
import { boolean, radios } from '@storybook/addon-knobs'
import React from 'react'
import renderer from 'react-test-renderer'
import ChatChannelMessage from './index'
import { forces } from '@serge/mocks'
import { forceColors } from '@serge/helpers'

const forceColorList = forceColors(forces)

const forceValues = {
  Blue: 'Blue',
  White: 'White',
  Red: 'Red'
}

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

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ChatChannelMessage 
        title="lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet"
        timestamp="2020-09-18T05:41:17.349Z"
        role="CO"
        messageType="Chat"
        hasBeenRead={boolean('Has been read', false)}
        authorForceId={radios('Author force', forceValues, 'Blue')}
        playerForceId={radios('Player force', forceValues, 'Blue')}
        forceColors={forceColorList}  
        isUmpire={boolean('Player from umpire force', true)}
      />, { createNodeMock }
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
