/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { P9Mock, MessageTemplatesMockByKey, messageDataCollaborativeEditing, WargameMock } from '@serge/mocks'
import JsonEditor from './index'

const message = messageDataCollaborativeEditing[2]
const template = MessageTemplatesMockByKey[message.messageType]
const channel = P9Mock.data.channels.channels[0]
const templateMessageCreator = {
  template: MessageTemplatesMockByKey[message.messageType] && MessageTemplatesMockByKey[message.messageType].details,
  _id: channel.uniqid
}

describe('ChannelMessageDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<JsonEditor
        messageContent={message.message || null}
        template={template || templateMessageCreator}
        messageId={`${message._id}_${message.message.Reference}`}
        disabled={true}
        gameDate={WargameMock.data.overview.gameDate}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
