/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import JsonEditor from './index'

import { MessageTemplatesMockByKey, messageDataCollaborativeEditing, WargameMock } from '@serge/mocks'
const message = messageDataCollaborativeEditing[2]
describe('ChannelMessageDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<JsonEditor
        messageTemplates={MessageTemplatesMockByKey}
        messageContent={message.message}
        template={message.messageType}
        messageId={`${message._id}_${message.message.Reference}`}
        disabled={true}
        gameDate={WargameMock.data.overview.gameDate}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
