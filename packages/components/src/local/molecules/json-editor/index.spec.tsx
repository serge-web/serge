/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import JsonEditor from './index'

import { MessageTemplatesMockByKey, messageDataCollaborativeEditing, WargameMock } from '@serge/mocks'
const message = messageDataCollaborativeEditing[2]
const template = MessageTemplatesMockByKey[message.messageType]
describe('ChannelMessageDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<JsonEditor
        messageContent={message.message}
        template={template}
        messageId={`${message._id}_${message.message.Reference}`}
        disabled={true}
        gameDate={WargameMock.data.overview.gameDate}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
