/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import PrivateChatTextInput from './index'

describe('PrivateChatTextInput component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <PrivateChatTextInput onChange={(): any => console.log('here')}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
