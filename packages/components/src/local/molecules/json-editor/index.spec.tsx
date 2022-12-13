/* global it expect */
import { messageDataCollaborativeEditing, MessageTemplatesMockByKey, WargameMock } from '@serge/mocks'
import React from 'react'
import renderer from 'react-test-renderer'
import JsonEditor from './index'

const message = messageDataCollaborativeEditing[2]
const template = MessageTemplatesMockByKey[message.messageType]

describe('ChannelMessageDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<JsonEditor
        template={template}
        messageId={`${message._id}_${message.message.Reference}`}
        disabled={true}
        cacheMessage={false}
        gameDate={WargameMock.data.overview.gameDate}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
