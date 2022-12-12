/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { MessageTemplatesMockByKey, messageDataCollaborativeEditing, WargameMock } from '@serge/mocks'
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
        chacheMessage={false}
        gameDate={WargameMock.data.overview.gameDate}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
