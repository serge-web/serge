/* global it expect */

import { MessageDetails } from '@serge/custom-types'
import React from 'react'
import renderer from 'react-test-renderer'

import ChatEntryForm from './index'

const force = {
  name: 'blue',
  color: '#6699cc',
  icon: '',
  iconURL: ''
}

const createNodeMock = (el: any): HTMLTextAreaElement | null => {
  if (el.type === 'textarea') {
    return document.createElement('textarea')
  }
  return null
}

const onChangePrivateStorage = (message: string): void => console.log('message', message)

const onchangeChatInputMessage = (value: string, messageType: string): void => console.log({ value, messageType })

const privatMessageValue = (privat: string): string => privat

const chatEntryFormValue = (chat: string): string => {
  console.log('chat message:', chat)
  return chat
}

const postBack = (details: MessageDetails, message: any): void => {
  console.log('send message', details, message)
}

describe('ChatEntryForm component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChatEntryForm
          chatEntryFormValue={chatEntryFormValue}
          privatMessageValue={privatMessageValue}
          onChangePrivateStorage={onChangePrivateStorage}
          onchangeChatInputMessage={onchangeChatInputMessage}
          turnNumber={1}
          isUmpire={true}
          from={force}
          channel={'Game Admin'}
          role={'r345'}
          roleName={'Umpire'}
          postBack={postBack}
        />,
        { createNodeMock }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
