/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import WriteMessagePanel from './index'

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
      <WriteMessagePanel isUmpire={true} onSendMessage={(): any => window.alert('Click Send')} onChange={(): any => console.log('here')} />, { createNodeMock }
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
